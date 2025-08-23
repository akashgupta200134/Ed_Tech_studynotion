import { FaArrowRight } from "react-icons/fa";
import "../../src/App.css";
import Button from "../components/Button";
import Highlighttext from "./Highlighttext";
import TimelineHome from "./TimelineHome";


const ExploreMore = () => {
  return (
    <div className=" bg-pure-greys-5 text-richblack-900">
      <div className=" homePage_bg h-[330px]">
        <div className=" w-11/12 max-w-maxContent flex flex-col items-center mx-auto gap--10">
          <div className="flex flex-row  text-white gap-8  mt-[150px]">
            <Button active={true} linkto={"/signup"}>
              <div className=" flex flex-row items-center gap-3">
                Explore full Catalog
                <FaArrowRight />
              </div>
            </Button>

            <Button active={false} linkto={"/login"}>
              <div className=" flex flex-row items-center gap-3">
                Learn More
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-7 max-w-maxContent items-start justify-between  w-11/12">
        <div className="flex flex-row mb-20 mt-20  gap-5 ">
          <div className="text-5xl font-semibold w-[60%]">
            Get the skills you need for a
            <Highlighttext text={"Job that is in demand"} />
          </div>

          <div className="flex flex-col items-start mt-2 -ml-6 gap-10 w-[40%]">
            <div className="text-[15px]">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </div>
            <Button active={false} linkto={"/login"} className={"-mt-6"}>
              <div>Learn More</div>
            </Button>
          </div>
        </div>
      </div>


      <div>



      </div>




<TimelineHome/>







    </div>
  );
};

export default ExploreMore;
