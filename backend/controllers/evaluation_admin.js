const dbManager = require("../database");

// --------------------------------------------------------------------------------------------------------------------

async function registerEvaluation(courseId, name, deadline, description) {
  const statement = `INSERT INTO Evaluation (evalName, evalDeadline, evalDescription, courseId)
                        VALUES ('${name}', '${deadline}', '${description}', ${courseId});`;

  try {
    await dbManager.executeStatement(statement);
    return { message: "Evaluación registrada exitosamente", error: false };
  } catch (err) {
    console.log(err);
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }
}

module.exports = { registerEvaluation };
