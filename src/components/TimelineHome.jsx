import Logo1 from "../../public/Images/TimeLineLogo/Logo1.svg";
import Logo2 from "../../public/Images/TimeLineLogo/Logo2.svg";
import Logo3 from "../../public/Images/TimeLineLogo/Logo3.svg";
import Logo4 from "../../public/Images/TimeLineLogo/Logo4.svg";
import TimelineBanner from "../../public/Images/TimelineImage.png";
import Learningsection from "./Learningsection";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: " Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Resposibility",
    Description: "Students will always be our top priority",
  },

  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },

  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];

const TimelineHome = () => {
  return (
    <>
    <div className="flex flex-row items-center  -mt-14 gap-15">
      {/* Left Section */}

      <div className="w-[40%] flex flex-col ml-20 m-16 relative  gap-5">
        {TimeLine.map((element, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 p-5 relative"
          >
            {/* Logo */}
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow-md shadow-richblue-800">
              <img
                src={element.Logo}
                alt={element.Heading}
                className="w-8 h-8"
              />
            </div>

            {/* Vertical Dotted Line (except last item) */}
            {index < TimeLine.length - 1 && (
              <div className="w-[2px] absolute left-[42px]  top-[75px] h-12 border-dotted border-r-1 border-gray-400"></div>
            )}

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold">{element.Heading}</h3>
              <p className="text-sm text-gray-600">{element.Description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section (for video/image/etc later) */}
      <div className="relative w-[60%] ">
        <div className="absolute inset-0 rounded-lg z-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-3xl opacity-40"></div>
        <img
          src={TimelineBanner}
          alt=""
          className="relative  object-cover w-[570px] rounded-lg"
        />
      </div>

      <div className="absolute left-[50%] mt-[520px] translate-x-[22%] uppercase rounded -translate-y-[50%] z-20 h-[100px] flex flex-row items-center w-[400px] bg-caribbeangreen-700">
        <div className="flex items-center gap-4 lg:border-r border-caribbeangreen-300 p-4">
          <p className="text-5xl font-bold   text-white">10</p>
          <p className="text-caribbeangreen-300 text-sm ">years experiences</p>
        </div>

        <div className="flex items-center gap-4 p-4">
          <p className="text-5xl font-bold text-white">250</p>
          <p className="text-caribbeangreen-300 text-sm">Types of courses</p>
        </div>
      </div>

      
    </div>
  <Learningsection/>
    </>     
  );
};

export default TimelineHome;
