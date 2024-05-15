import React, { useState, useEffect } from "react";
import axios from "axios";

function CourseStudents(props) {
  const { courseId } = props;
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const response = await axios.get(
        "http://localhost:4000/course/students/" + courseId
      );

      if (response.data.error === false) {
        setStudents(response.data.data.students);
      }
    };
    getStudents();
  }, [courseId]);

  return (
    <>
      <button className="btn btn-secondary mb-4" style={{ width: "200px" }}>
        Agregar Estudiante
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr>
                <td>{student.userName}</td>
                <td>
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CourseStudents;
