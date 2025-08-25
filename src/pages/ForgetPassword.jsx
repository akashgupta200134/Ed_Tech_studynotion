import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authApI";

const ForgetPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(getPasswordResetToken(email , setEmailSent));


  }





  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-[500px] text-white border border-richblack-700 rounded-lg shadow-lg p-10 text-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold">
              {!emailSent ? "Reset Your Password" : "Check your email"}
            </h1>

            <p className="text-sm text-richblack-200 text-center mt-5">
              {!emailSent
                ? "Have no fear. We’ll email you instructions to reset your password. If you don’t have access to your email we can try account recovery."
                : `We have sent the reset email to: ${email}`}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 mt-6">
              {!emailSent && (
                <label className="w-full text-left">
                  <p>Email Address</p>
                  <input
                    className="border px-3 py-3 mt-2 text-richblack-5 bg-richblack-800 rounded-md w-full
                               focus:outline-none focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]"
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
                </label>
              )}

              <button type="submit"
                className="w-full text-center py-3 text-richblack-900 font-inter border bg-[#FFD60a] rounded-md 
                           hover:bg-[#e6c200] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
              >
                {!emailSent ? "Reset Password" : "Check Your Email"}
              </button>
            </form>

            <div className="flex items-center gap-2 mt-6 justify-center">
              <BiArrowBack className="h-5 w-5" />
              <Link to={"/login"} className="text-richblack-50">
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
