const dbManager = require("../database");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../constants");

// --------------------------------------------------------------------------------------------------------------------

async function loginUser(email, password) {
  const query = `SELECT userId, userName, userEmail, userRole FROM SystemUser WHERE userEmail = '${email}' AND userPassword = '${password}';`;
  let user;
  try {
    user = await dbManager.executeQuery(query);
  } catch {
    return { message: "Error: Ocurrió un error inesperado", error: true };
  }
  console.log(query);

  if (user.length > 0) {
    const id = user[0].userId;
    const token = jwt.sign({ id }, JWT_SECRET_KEY, { expiresIn: 300 });
    return {
      message: "Usuario autenticado exitosamente",
      error: false,
      data: { login: true, token: token, user: user[0] },
    };
  }
  return { message: "Error: Usuario y/o contraseña incorrectos", error: true };
}

module.exports = {
  loginUser,
};
