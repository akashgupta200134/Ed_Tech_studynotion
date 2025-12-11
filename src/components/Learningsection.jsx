import Highlighttext from "./Highlighttext";
import planYourprogress from "../../public/Images/Plan_your_lessons.svg"
 import knowyourprogress from "../../public/Images/Know_your_progress.svg"
 import comparewithothers from "../../public/Images/Compare_with_others.svg"
import Button from "./common/Button";




const Learningsection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-15 mt-15  md:mt-0 md:p-24 ">
      <div className="md:text-5xl text-4xl text-center font-bold">
        Your swiss knife for
        <Highlighttext text={" Learning Any Language"} />
        <div className="md:text-[16px] text-xl md:mt-0 mt-4 max-w-5xl  font-normal md:p-[20px]">
          Using <span className="font-semibold text-blue-600">Spin</span>,
          learning multiple languages becomes effortless. With{" "}
          <span className="font-semibold">20+ languages</span>, realistic
          voice-over, progress tracking, custom schedules, and more — you’ll
          master languages faster than ever.
        </div>
      </div>

      <div className="flex flex-row items-center justify-center mb-10 mt-8 md:-mt-5 ">
        <img
          src={planYourprogress}
          alt="planYourprogress"
          className=" -mr-[140px] object-contain"
        />

        <img
          src={comparewithothers}
          alt="comparewithothers"
          className="object-contain"
        />

        <img
          src={knowyourprogress}
          alt="knowyourprogress"
          className=" -ml-32 object-contain"
        />
      </div>

      <Button active={true} linkto={"/login"}>
        Learn More
      </Button>


    </div>
  );
};

export default Learningsection;
