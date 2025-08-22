import Button from "../components/Button"
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import "../../src/index.css"

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div
      className={`flex ${position} my-16 justify-between flex-col lg:gap-16 gap-12 items-center lg:items-start`}
    >
      {/* Left Section */}
    <div className="w-[600px] flex flex-col gap-4 text-center lg:text-left">
  <h2 className="text-3xl font-bold text-white leading-snug ">
    {heading}
  </h2>

  <p className="text-richblack-300 text-base font-medium leading-relaxed max-w-[90%] mx-auto lg:mx-0">
    {subheading}
  </p>
        {/* Buttons */}
        <div className="flex flex-wrap gap-6 mt-6 justify-center lg:justify-start">
          <Button active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight className="text-sm mt-[1px]" />
            </div>
          </Button>

          <Button active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </Button>
        </div>
      </div>

      {/* Right Section (Code Block) */}
      <div className="relative  h-[330px] w-[450px] rounded-2xl overflow-hidden shadow-lg shadow-blue-500/20">
        {/* Gradient Background */}
        <div
          className={`${backgroundGradient} absolute inset-0 rounded-full opacity-80`}
        />

        {/* Code Container */}
        <div
          className="relative h-fit flex flex-row py-4 px-2 text-xs sm:text-sm 
                     leading-[18px] sm:leading-6 bg-richblack-900/60 
                     rounded-2xl backdrop-blur-md border border-richblack-700"
        >
          {/* Line Numbers */}
          <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold space-y-1">
            {[...Array(12).keys()].map((i) => (
              <p key={i}>{i + 1}</p>
            ))}
          </div>

          {/* Code */}
          <div
            className={`w-[90%] flex flex-col gap-2 font-mono ${codeColor} pr-2 text-left`}
          >
            <TypeAnimation
              sequence={[codeblock, 2500, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks
