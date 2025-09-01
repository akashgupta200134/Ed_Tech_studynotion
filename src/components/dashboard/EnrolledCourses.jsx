import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserEnrolledCourses } from "../../services/operations/profileApi";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  const getEnrolledCourses = async () => {
    try {
      const response = await getUserEnrolledCourses(token);
      setEnrolledCourses(response);
    } catch (error) {
      console.log("Unable to fetch Enrolled Courses", error);
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div className="w-full min-h-screen  p-4">
      <h2 className="text-2xl font-bold text-gray-50 mb-6">
        Enrolled Courses
      </h2>

      {!enrolledCourses ? (
        <div className="text-gray-500 animate-pulse">Loading...</div>
      ) : !enrolledCourses.length ? (
        <p className="text-gray-600">
          You have not enrolled in any courses yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="text-left px-6 py-3">Course</th>
                <th className="px-6 py-3">Duration</th>
                <th className="px-6 py-3">Progress</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {enrolledCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Course Info */}
                  <td className="flex items-center gap-4 px-6 py-4">
                    <img
                      src={course.thumbnail}
                      alt="course thumbnail"
                      className="w-20 h-14 object-cover rounded-md shadow-sm"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {course.courseName}
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-2">
                        {course.courseDescription}
                      </p>
                    </div>
                  </td>

                  {/* Duration */}
                  <td className="text-center px-6 py-4 text-gray-700">
                    {course.totalDuration || "N/A"}
                  </td>

                  {/* Progress */}
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-gray-600">
                        {course.progressPercentage || 0}%
                      </span>
                      <ProgressBar
                        completed={course.progressPercentage || 0}
                        height="8px"
                        isLabelVisible={false}
                        bgColor="#3b82f6"
                        baseBgColor="#e5e7eb"
                        borderRadius="8px"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
