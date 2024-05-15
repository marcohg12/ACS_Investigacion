import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

function ProfessorDashboard() {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get(
        "http://localhost:4000/professor/courses/" + user.userId
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
                to={"/professor/course/" + course.courseId}
                style={{ textDecoration: "none" }}
              >
                <CourseCard course={course}></CourseCard>
              </Link>
            );
          })}
        </div>
        <div class="col-md-6 vstack ">
          <h3 className="mb-4">Administración</h3>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "150px" }}>
              Comités
            </button>
          </Link>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "150px" }}>
              Estadísticas
            </button>
          </Link>
          <Link to="/">
            <button class="btn btn-secondary mb-3" style={{ width: "150px" }}>
              Investigaciones
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfessorDashboard;
