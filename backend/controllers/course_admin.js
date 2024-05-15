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

async function getCourseInfo(courseId) {
  const query = `SELECT courseId, courseName, courseSemester, courseYear 
  FROM Course WHERE courseId = ${courseId};`;

  let course;
  try {
    course = await dbManager.executeQuery(query);
  } catch (err) {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }

  return {
    message: "Curso recuperado exitosamente",
    error: false,
    data: { course: course[0] },
  };
}

async function getCourseEvals(courseId) {
  const query = `SELECT evalId, evalName, evalDeadline, evalDescription FROM Evaluation
                 WHERE courseId = ${courseId}`;

  let evals;
  try {
    evals = await dbManager.executeQuery(query);
  } catch (err) {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }

  return {
    message: "Evaluaciones recuperadas exitosamente",
    error: false,
    data: { evals: evals },
  };
}
async function getCourseStudents(courseId) {
  const query = `SELECT userId, userName FROM SystemUser 
                 INNER JOIN StudentPerCourse ON SystemUser.userId = StudentPerCourse.studentId
                 INNER JOIN Course ON StudentPerCourse.courseId = Course.courseId
                 WHERE Course.courseId = ${courseId};`;

  let students;
  try {
    students = await dbManager.executeQuery(query);
  } catch (err) {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }

  return {
    message: "Estudiantes recuperados exitosamente",
    error: false,
    data: { students: students },
  };
}

module.exports = {
  getStudentCourses,
  getProfessorCourses,
  getCourseInfo,
  getCourseStudents,
  getCourseEvals,
};
