import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import Highlighttext from "../components/Highlighttext";
import Button from "../components/Button";

const Homepage = ({ text, children, active, linkto }) => {
  return (
    <div>
      {/* section 1 */}
      <div className=" relative mx-auto flex flex-col text-center  w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className="mx-auto  p-[2px] mt-10 shadow-sm shadow-richblack-600 group text-richblack-200  bg-richblack-800 font-bold rounded-full transition-all duration-200 hover:scale-95 w-fit">
            <div className=" flex flex-row items-center  rounded-full px-6 py-[7px] gap-2 text-center group-hover:bg-richblack-900  ">
              <p>Become A Instructor</p>
              <FaChalkboardTeacher className=" text-xl mt-1" />
            </div>
          </div>
        </Link>

        <div className="mt-12 text-[44px] font-bold font-inter whitespace-nowrap">
          Empower Your Future with{" "}
          <span className="inline-block">
            <Highlighttext text={"Coding Skills"} />
          </span>
        </div>

        <div className=" text-md font-inter w-[800px] mt-2 text-richblack-300">
          <p className="">
            With our online coding courses, you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
        </div>

        <div className="mt-8 flex flex-row items-center gap-5">
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>
          
          <Button active={false} linkto={"/login"}>
            Request a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
