import RenderSteps from "./RenderSteps";

export default function AddCourse() {
  return (
    <>
    
   
      <div className="w-full max-w-7xl mx-auto overflow-y-hidden px-6 lg:px-10 py-6 lg:py-10">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-100">Add Course</h1>
          <p className="text-gray-500 text-base">
            Fill in the details below to create and publish your course.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
          {/* Left: Steps */}
          <div className="lg:col-span-2 rounded-2xl p-8 shadow-sm border ">
            <RenderSteps />
          </div>

          {/* Right: Tips */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 shadow-sm self-start">
            <h2 className="text-lg font-semibold text-yellow-800 mb-4">
              📌 Course Upload Tips
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
              <li>Set the Course Price option or make it free.</li>
              <li>
                Standard size for the course thumbnail is <b>1024x576</b>.
              </li>
              <li>Video section controls the course overview video.</li>
              <li>Course Builder is where you create & organize a course.</li>
              <li>
                Add Topics in the Course Builder section to create lessons,
                quizzes, and assignments.
              </li>
              <li>
                Information from the Additional Data section shows up on the
                course single page.
              </li>
              <li>Make Announcements to notify any important updates.</li>
              <li>Notes go to all enrolled students at once.</li>
            </ul>
          </div>
        </div>
      </div>
   
    
    </>
    
  );
}
