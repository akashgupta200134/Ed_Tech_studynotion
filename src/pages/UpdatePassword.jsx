import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { resetPassword } from "../services/operations/authApI";
import { BiArrowBack } from "react-icons/bi";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const location = useLocation();
  const { password, confirmPassword } = formData;

  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword({ password, confirmPassword, token }));
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="w-[500px] text-white border border-richblack-700 rounded-lg shadow-lg p-10 text-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold">Choose New Password</h1>

            <p className="text-sm text-richblack-200 text-center mt-5">
              Almost done. Enter your new password and you're all set.
            </p>

            <form
              onSubmit={handleOnSubmit}
              className="flex flex-col items-center gap-6 mt-6"
            >
              {/* Password */}
              <label className="w-full text-left">
                <p>New Password</p>
                <div className="relative">
                  <input
                    className="border px-3 py-3 mt-2 text-richblack-5 bg-richblack-800 rounded-md w-full
                               focus:outline-none focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]"
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="********"
                    onChange={handleOnchange}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-richblack-200"
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible fontSize={24} />
                    ) : (
                      <AiFillEye fontSize={24} />
                    )}
                  </span>
                </div>
              </label>

              {/* Confirm Password */}
              <label className="w-full text-left">
                <p>Confirm New Password</p>
                <div className="relative">
                  <input
                    className="border px-3 py-3 mt-2 text-richblack-5 bg-richblack-800 rounded-md w-full
                               focus:outline-none focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]"
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="********"
                    onChange={handleOnchange}
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-richblack-200"
                  >
                    {showConfirmPassword ? (
                      <AiFillEyeInvisible fontSize={24} />
                    ) : (
                      <AiFillEye fontSize={24} />
                    )}
                  </span>
                </div>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full text-center py-3 text-richblack-900 font-inter border bg-[#FFD60a] rounded-md 
                           hover:bg-[#e6c200] focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
              >
                Reset Password
              </button>
            </form>

            {/* Back to login */}
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

export default UpdatePassword;
