import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CourseMenu from "./CourseMenu";
import CourseEvaluation from "./CourseEvaluation";
import CourseStudents from "./CourseStudents";

function CourseDashboard(props) {
  const { role } = props;
  const { courseId } = useParams();
  const [childrenComponent, setChildrenComponent] = useState(
    <CourseMenu courseId={courseId}></CourseMenu>
  );

  const setComponent = (componentType) => {
    if (componentType === "GENERAL") {
      const component = <CourseMenu courseId={courseId}></CourseMenu>;
      setChildrenComponent(component);
    } else if (componentType === "EVALUATION") {
      const component = (
        <CourseEvaluation courseId={courseId} role={role}></CourseEvaluation>
      );
      setChildrenComponent(component);
    } else if (componentType === "STUDENTS") {
      const component = <CourseStudents courseId={courseId}></CourseStudents>;
      setChildrenComponent(component);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => {
                setComponent("GENERAL");
              }}
            >
              General
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => {
                setComponent("EVALUATION");
              }}
            >
              Evaluaciones
            </button>
          </li>
          {role === "PROFESSOR" ? (
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  setComponent("STUDENTS");
                }}
              >
                Estudiantes
              </button>
            </li>
          ) : (
            <></>
          )}
          {role === "PROFESSOR" ? (
            <li className="nav-item">
              <button className="nav-link">Administración</button>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="card-body">{childrenComponent}</div>
    </div>
  );
}

export default CourseDashboard;
