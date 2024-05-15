import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseMenu(props) {
  const { courseId } = props;
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    const getCourseInfo = async () => {
      const response = await axios.get(
        "http://localhost:4000/course/" + courseId
      );

      if (response.data.error === false) {
        setCourseInfo(response.data.data.course);
      }
    };
    getCourseInfo();
  }, [courseId]);

  return courseInfo ? (
    <>
      <h5 className="card-title">{courseInfo.courseName}</h5>
      <p className="card-text">
        Semestre {courseInfo.courseSemester}, {courseInfo.courseYear}
      </p>
    </>
  ) : (
    <></>
  );
}

export default CourseMenu;
