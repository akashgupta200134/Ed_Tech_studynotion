import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

// =================================================
// Send OTP
// =================================================
export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkuserPresent: true,
      })

      console.log("SENDOTP API RESPONSE...........", response)

      if (!response.data.success) {
        throw new Error(response.data.message || "Could Not Send OTP")
      }

      toast.success("OTP Sent Successfully")
      if (navigate) navigate("/verify-email")
    } catch (error) {
      console.error("SENDOTP API ERROR...........", error)
      toast.error(error.response?.data?.message || "Could Not Send OTP")
    } finally {
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}

// =================================================
// Signup
// =================================================
export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE...........", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.error("SIGNUP API ERROR.............", error)
      toast.error(error.response?.data?.message || "Signup Failed")
      // No need to force navigate("/signup"), user is already there
    } finally {
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}

// =================================================
// Login
// =================================================
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, { email, password })

      console.log("LOGIN API RESPONSE..............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
     
      // Save token
      dispatch(setToken(response.data.token))

      // Handle user image fallback
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

      dispatch(setUser({ ...response.data.user, image: userImage }))

      // LocalStorage
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))

      navigate("/")
    } catch (error) {
      console.error("LOGIN API ERROR..............", error)
      toast.error(error.response?.data?.message || "Login Failed")
    } finally {
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}

// =================================================
// Logout
// =================================================
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

// =================================================
// Get Reset Password Token
// =================================================
export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, { email })

      console.log("RESET PASSWORD TOKEN RESPONSE..........", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.error("RESET PASSWORD TOKEN ERROR", error)
      toast.error(error.response?.data?.message || "Failed To Send Reset Email")
    } finally {
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}

// =================================================
// Reset Password
// =================================================
export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESET Password RESPONSE ... ", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Has Been Reset Successfully")
    } catch (error) {
      console.error("RESET PASSWORD ERROR............", error)
      toast.error(error.response?.data?.message || "Unable To Reset Password")
    } finally {
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }
}
