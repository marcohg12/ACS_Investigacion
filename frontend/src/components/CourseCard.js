import React from "react";

function CourseCard(props) {
  const { course } = props;

  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{course.courseName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Semestre {course.courseSemester}, {course.courseYear}
        </h6>
      </div>
    </div>
  );
}

export default CourseCard;
