import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get(
        "http://localhost:4000/student/courses/" + user.userId
      );
      if (response.data.error === false) {
        setCourses(response.data.data.courses);
      }
    };
    getCourses();
  }, [user]);

  return (
    <div className="mt-4 mb-4">
      <div class="row">
        <div class="col-md-6">
          <h3 className="mb-4">Cursos</h3>
          {courses.map((course) => {
            return (
              <Link
                to={"/student/course/" + course.courseId}
                style={{ textDecoration: "none" }}
              >
                <CourseCard course={course}></CourseCard>
              </Link>
            );
          })}
        </div>
        <div class="col-md-6 vstack">
          <h3 className="mb-4">Aplicaciones</h3>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "200px" }}>
              Historial Académico
            </button>
          </Link>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "200px" }}>
              Retiros de Materia
            </button>
          </Link>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "200px" }}>
              Inclusiones de Materia
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
