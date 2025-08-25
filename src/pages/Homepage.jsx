import { Link } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import Highlighttext from "../components/Highlighttext";
import Button from "../components/Button";
import Banner from "../../assets/Images/banner.mp4";
import CodeBlocks from "../components/codeblocks";
import ExploreMore from "../components/ExploreMore";
import InstructorSection from "../components/InstructorSection";
import Footer from "../components/common/footer";
import SignupForm from "./Signupfrom";

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

        <div className=" my-14 mx-auto max-w-3xl  shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            muted
            loop
            autoPlay
            playsInline
            className=" aspect-video object-contain rounded-lg shadow-[15px_15px_rgba(255,255,255)]"
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section-1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row text-left"}
            heading={
              <div className="text-5xl font-semibold">
                Unlock Your
                <Highlighttext text={" coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
              className: "-mt-10",
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
              className: "-mt-10",
            }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-25"}
            backgroundGradient={"codeblock1"}
          />
        </div>

        {/* Code Section-2*/}
        <div>
          <CodeBlocks
            position={
              "flex lg:flex-row-reverse text-left my-20 justify-between gap-10 lg:gap-10"
            }
            heading={
              <div className="text-5xl font-semibold ml-18">
                Start
                <Highlighttext text={" coding in seconds "} />
              </div>
            }
            subheading={
              <div className=" text-sm ml-19">
                Take the leap and start coding today! With our hands-on learning
                approach, you'll be creating real projects from your very first
                lesson.
              </div>
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
              className: "ml-19",
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a>This is myPage</h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-white"}
            backgroundGradient={"codeblock2"}
          />
        </div>
      </div>

      <ExploreMore />

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />

        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>

        <div>{/* Review Slider */}</div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
