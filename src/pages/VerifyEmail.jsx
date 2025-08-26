import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authApI"; // ✅ Make sure signUp is imported
import { BiArrowBack } from "react-icons/bi";

const VerifyEmail = () => {
  const { signupData, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, [signupData, navigate]); // ✅ Added dependency array

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!signupData) return;

    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    // ✅ Use local state `otp`, not signupData.otp
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="w-[500px] text-white border border-richblack-700 rounded-lg shadow-lg p-10 text-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold">Verify Email</h1>

            <p className="text-sm text-richblack-200 text-center mt-5">
              A verification code has been sent to your email. Enter the code
              below.
            </p>

            <form
              onSubmit={handleOnSubmit}
              className="flex flex-col items-center gap-6 mt-6"
            >
<OTPInput
  value={otp}
  onChange={setOtp}
  numInputs={4}
  renderInput={(props) => (
    <input
      {...props}
      style={{
        width: "60px",   // 🔥 force width
        minWidth: "60px",// 🔥 prevent shrinking
        height: "60px",
      }}
      className="border border-richblack-600 text-white rounded-md text-center text-2xl 
                 focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
    />
  )}
  renderSeparator={<span className="w-4" />}
/>



              <button
                type="submit"
                className="w-full text-center py-3 text-richblack-900 font-inter border bg-[#FFD60a] rounded-md 
                           hover:bg-[#e6c200] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
              >
                Verify Email
              </button>
            </form>

            {/* Back to login */}
            <div className="flex items-center gap-2 mt-6 justify-center">
              <BiArrowBack className="h-5 w-5" />
              <Link to={"/login"} className="text-richblack-50">
                Back to Login
              </Link>
            </div>

            {/* Resend OTP */}
           <button
  onClick={() =>
    signupData?.email && dispatch(sendOtp(signupData.email))
  }
  className="mt-4 text-yellow-400 hover:text-yellow-500 underline"
>
  Resend it
</button>

          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
