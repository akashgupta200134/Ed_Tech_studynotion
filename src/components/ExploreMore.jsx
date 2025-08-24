import { FaArrowRight } from "react-icons/fa";
import "../../src/App.css";
import Button from "../components/Button";
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
        <div className="flex flex-col mt-10 items-center justify-center">
          <span className="text-5xl text-white font-bold whitespace-nowrap">
            Unlock the <Highlighttext text={"Power of Code"} />
          </span>
          <p className="text-richblack-200 mt-2">
            Learn to Build Anything You Can Imagine
          </p>
        </div>

        <div className=" flex flex-row items-center justify-center p-1 mt-10   ml-[260px] mr-[260px] gap-2  border-richblack-100 rounded-full bg-richblack-800">
          {TabName.map((element, index) => {
            return (
              <div
                className={`text-[16px] flex flex-row gap-2 items-center"
                  ${
                    currentTab === element
                      ? "bg-richblack-900 text-richblack-5 font-medium"
                      : "text-richblack-200"
                  } rounded-full transition-all duration-200 cursor-pointer hover:text-richblack-5 px-7 py-2 hover:bg-richblack-900`}
                key={index}
                onClick={() => setMyCards(element)}
              >
                {element}
              </div>
            );
          })}
        </div>

        <div className=" lg:h-[250px]"></div>

        <div className='lg:absolute gap-10 justify-center -mt-[170px] flex-row flex  flex-wrap w-full'>
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
        <div className=" homePage_bg h-[330px]">
          <div className=" w-11/12 max-w-maxContent flex flex-col items-center mx-auto gap--10">
            <div className="flex flex-row  text-white gap-8 mt-[240px]">
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

        <div className="mx-auto flex flex-col gap-7 max-w-maxContent items-start justify-between  w-11/12">
          <div className="flex flex-row mb-20 mt-20  gap-5 ">
            <div className="text-5xl font-semibold w-[50%]">
              Get the skills you need for a
              <Highlighttext text={" Job that is in demand"} />
            </div>

            <div className="flex flex-col items-start mt-2  gap-10 w-[50%]">
              <div className="text-[18px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <Button active={false} linkto={"/login"} className={"-mt-6"}>
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
