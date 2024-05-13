import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import CourseCard from "./CourseCard";

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
            return <CourseCard course={course}></CourseCard>;
          })}
        </div>
        <div class="col-md-6">
          <h3 className="mb-4">Aplicaciones</h3>
          <div class="bg-secondary text-white p-3">Right Column</div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
