const dbManager = require("../database");

// --------------------------------------------------------------------------------------------------------------------

async function getStudentCourses(userId) {
  const query = `SELECT Course.courseId, courseName, courseSemester, courseYear 
                 FROM Course INNER JOIN StudentPerCourse ON Course.courseId = StudentPerCourse.courseId 
                 WHERE studentId = ${userId}`;
  let courses;
  try {
    courses = await dbManager.executeQuery(query);
  } catch {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }

  return {
    message: "Cursos recuperados exitosamente",
    error: false,
    data: { courses: courses },
  };
}

async function getProfessorCourses(userId) {
  const query = `SELECT courseId, courseName, courseSemester, courseYear 
                   FROM Course WHERE courseProfessor = ${userId}`;
  let courses;
  try {
    courses = await dbManager.executeQuery(query);
  } catch {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }

  return {
    message: "Cursos recuperados exitosamente",
    error: false,
    data: { courses: courses },
  };
}

module.exports = { getStudentCourses, getProfessorCourses };
