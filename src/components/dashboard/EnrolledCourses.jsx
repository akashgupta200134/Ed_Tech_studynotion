import React, { useEffect, useState } from "react";
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
      console.log(error);
      console.log("Unable to fetch Enrolled Courses");
    }
  };

  useEffect(() => {
    getEnrolledCourses();
  }, []);

  return (
    <div>
      <div>Enrolled Courses</div>

      {!enrolledCourses ? (
        <div>Loading...</div>
      ) : !enrolledCourses.length ? (
        <p>You have not any enrolled courses yet</p>
      ) : (
        <div>
          <div>
            <p> Course Name</p>
            <p>Duration</p>
            <p>Progress</p>
          </div>

          {enrolledCourses.map((courses, index) => {
            <div>
              <div>
                <img src={courses.thumbnail} alt="course thumbnail" />
                <div>
                  <p> {courses.courseName}</p>
                  <p> {courses.courseDescription} </p>
                </div>
              </div>
              <div>{courses.totalDuration}</div>

              <div>
                <p> Progress : {courses.progressPercentage || 0}</p>
                <ProgressBar
                  completed={progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                ></ProgressBar>
              </div>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default EnrolledCourses;
