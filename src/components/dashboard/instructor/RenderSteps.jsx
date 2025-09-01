import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformationForm";

const RenderSteps = () => {
  const { step } = useSelector((state) => state.course);

  const steps = [
    { id: 1, title: "Course Information" },
    { id: 2, title: "Course Builder" },
    { id: 3, title: "Publish" },
  ];

  return (
    <div className="w-full">
      {/* Stepper Row */}
      <div className="flex items-center justify-between w-full">
        {steps.map((element, index) => (
          <React.Fragment key={element.id}>
            {/* Step Circle + Title */}
            <div className="flex flex-col items-center flex-shrink-0 w-28">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 font-semibold transition-all duration-300
                  ${
                    step === element.id
                      ? "bg-yellow-500 border-yellow-500 text-white shadow-md"
                      : step > element.id
                      ? "bg-green-100 border-green-500 text-green-700"
                      : "bg-gray-800 text-gray-300 border-gray-500"
                  }`}
              >
                {step > element.id ? <FaCheck className="text-lg" /> : element.id}
              </div>

              {/* Step Title */}
              <p
                className={`mt-2 text-sm font-medium text-center transition-colors duration-300
                  ${
                    step === element.id
                      ? "text-yellow-500"
                      : step > element.id
                      ? "text-green-600"
                      : "text-gray-400"
                  }`}
              >
                {element.title}
              </p>
            </div>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-[2px] self-center transition-all duration-300
                  ${
                    step > element.id
                      ? "bg-green-500"
                      : step === element.id
                      ? "border-t-2 border-dashed border-yellow-500"
                      : "border-t-2 border-dashed border-gray-500"
                  }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Form Content */}
      <div className="mt-6">
        {step === 1 && <CourseInformationForm />}
        {/* {step === 2 && <CourseBuilderForm />} */}
        {/* {step === 3 && <PublishCourse />} */}
      </div>
    </div>
  );
};

export default RenderSteps;
