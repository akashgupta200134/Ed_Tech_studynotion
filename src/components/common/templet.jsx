import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux";
import frameImg from "../../../assets/Images/frame.png";
import SignupForm from "../../pages/Signupfrom";
import LoginForm from "../core/Auth/LoginForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] ml-10 mr-10  place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          {/* -------- Left Side (Forms) -------- */}
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            {/* Title & Description */}
            <div className="ml-[360px] w-full whitespace-nowrap text-center flex flex-col justify-center items-center">
              <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                {title}
              </h1>
              <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
                <span className="text-richblack-100">{description1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>
            </div>

            {/* ✅ Wrapped Form + Divider + Google Button inside one box */}
            <div className="border border-richblack-700 rounded-lg p-6 mt-6 shadow-sm bg-richblack-900">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}

              {/* Divider */}
              <div className="flex w-full items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-richblack-700"></div>
                <p className="text-richblack-700 font-medium leading-[1.375rem]">
                  OR
                </p>
                <div className="w-full h-[1px] bg-richblack-700"></div>
              </div>

              {/* Google Button */}
              {formType === "login" ? (
                <button
                  className="w-full flex  flex-row justify-center items-center rounded-[8px] font-medium text-richblack-100
                     border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-richblack-800 transition-all"
                >
                  <FcGoogle />
                  <p>Login With Google</p>
                </button>
              ) : (
                <button
                  className="w-full flex flex-row justify-center items-center rounded-[8px] font-medium text-richblack-100
                     border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-richblack-800 transition-all"
                >
                  <FcGoogle />
                  <p>Sign Up With Google</p>
                </button>
              )}
            </div>
          </div>

          {/* -------- Right Side (Image) -------- */}
          <div className="relative mx-auto w-11/12 max-w-[450px] mt-[120px] -ml-16-20 md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Student"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
