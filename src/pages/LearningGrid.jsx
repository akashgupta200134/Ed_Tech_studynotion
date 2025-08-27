import Button from "../components/common/Button";
import Highlighttext from "../components/Highlighttext";

const LearningGrid = () => {
  const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highlightText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring cutting-edge methods for effective learning.",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Earn globally recognized certificates to showcase your skills and boost career opportunities.",
    },
    {
      order: 4,
      heading:`Rating "Auto-grading"`,
      description:
        "Get instant feedback with AI-powered auto-grading, saving you time and improving your learning experience.",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Graduate with skills aligned to industry needs, ready to make an impact from day one.",
    },
  ];

  return (
    <div className="grid mx-auto max-w-6xl grid-cols-1 lg:grid-cols-4 mt-20 gap-6 px-6">
      {LearningGridArray.map((element, index) => {
        return (
          <div
            key={index}
            className={`
              rounded-xl shadow-md p-6 flex flex-col justify-between
              transition-transform duration-300 hover:scale-105 hover:shadow-xl
              ${index === 0 ? "lg:col-span-2 bg-gradient-to-r from-richblack-700 to-richblack-900" : ""}
              ${element.order % 2 === 1 ? "bg-richblack-700" : "bg-richblack-800"}
              ${element.order === 3 ? "lg:col-start-2" : ""}
            `}
          >
            {element.order < 0 ? (
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-white">
                  {element.heading}{" "}
                  <Highlighttext text={element.highlightText} />
                </h1>
                <p className="text-richblack-200 text-sm leading-relaxed">
                  {element.description}
                </p>

                <div className="mt-4">
                  <Button active={true} linkto={"/"}>
                    {element.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-semibold text-yellow-300">
                  {element.heading}
                </h1>
                <p className="text-richblack-200 text-sm leading-relaxed">
                  {element.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
