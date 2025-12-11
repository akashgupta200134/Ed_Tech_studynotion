import { FaArrowRight } from "react-icons/fa";
import "../../src/App.css";
import Button from "./common/Button";
import Highlighttext from "./Highlighttext";
import TimelineHome from "./TimelineHome";
import { useState } from "react";
import { HomePageExplore } from "../data/homepage-explore";
import CourseCard from "./common/courseCard";


const TabName = [
"Free",
"New to coding",
"Most popular",
"Skills paths",
"Career paths",

];






const ExploreMore = () => {
 
  const [currentTab , setcurrentTab] = useState(TabName[0]);
  const [courses , setCourse] = useState(HomePageExplore[0].courses);
  const [currentCard , setcurrentcard] = useState(HomePageExplore[0].courses[0].heading);


  const setMyCards = (value) => {
    setcurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourse(result[0].courses)
    setcurrentcard(result[0].courses[0].heading);

  }

  return (
    <>
      <div>
        <div className="flex flex-col md:mt-10 items-center justify-center">
          <span className="md:text-5xl text-3xl text-white font-bold whitespace-nowrap">
            Unlock the <Highlighttext text={"Power of Code"} />
          </span>
          <p className="text-richblack-200 text-xl  mb-18 md:mb-0 md:mt-2">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

   <div className="grid grid-cols-2 sm:grid-cols-2 md:flex flex-row gap-1 sm:gap-16 md:gap-3 items-center justify-center p-4 sm:p-6 md:p-1 -mt-4 sm:mt-6 md:mt-10 mx-1  sm:mx-8 md:mx-[200px] border-richblack-100 rounded-4xl bg-richblack-800">
  {TabName.map((element, index) => {
    return (
      <div
        className={`flex flex-row gap-2 items-center text-[20px] 
          ${
            currentTab === element
              ? "bg-richblack-900 text-richblack-5 font-medium"
              : "text-richblack-200"
          } 
          rounded-full transition-all duration-200 cursor-pointer hover:text-richblack-5 px-7 py-2 hover:bg-richblack-900`}
        key={index}
        onClick={() => setMyCards(element)}
      >
        {element}
      </div>
    );
  })}
</div>


        <div className=" lg:h-[250px]"></div>

        <div className='lg:absolute gap-12 md:gap-10  justify-center  mt-10  md:-mt-[170px] flex-row flex flex-wrap  w-full'>
            {
                courses.map((element, index) => {
                    return (
                        <CourseCard 
                            key={index}
                            cardData={element}
                            currentCard={currentCard}
                            setCurrentCard={setcurrentcard}
                        />
                    )
                })
            }
        </div>

      </div>

      <div className=" bg-pure-greys-5 text-richblack-900">
        <div className=" homePage_bg md:h-[330px]">
          <div className=" w-11/12 max-w-maxContent flex flex-col items-center mx-auto gap--10">
            <div className="flex flex-row  text-white gap-8 mt-16 md:mt-[240px]">
              <Button active={true} linkto={"/signup"}>
                <div className=" flex flex-row items-center gap-3 ">
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

        <div className="mx-auto flex flex-col  gap-7 max-w-maxContent items-start justify-between  w-11/12">
          <div className="flex flex-col md:flex md:flex-row mb-20 mt-20  gap-5 ">
            <div className="md:text-5xl text-4xl font-semibold w-full md:w-[50%]">
              Get the skills you need for a
              <Highlighttext text={" Job that is in demand"} />
            </div>

            <div className="flex flex-col items-start md:mt-2  gap-10 md:w-[50%]">
              <div className="text-xl md:text-[18px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <Button active={false} linkto={"/login"} className={"md:-mt-6"}>
                <div>Learn More</div>
              </Button>
            </div>
          </div>
        </div>

        <div></div>

        <TimelineHome />
      </div>
    </>
  );
};

export default ExploreMore;
