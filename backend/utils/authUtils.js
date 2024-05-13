const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../constants");

// --------------------------------------------------------------------------------------------------------------------

function isAuthenticated(req, res, next) {
  const token = req.headers["access-token"];

  if (!token) {
    res.json({
      message: "Error: No se encontró el token de autenticación",
      error: true,
    });
    return;
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.json({ message: "Error: No se encuentra autenticado", error: true });
    } else {
      req.userId = decoded.id;
      next();
    }
  });
}

module.exports = { isAuthenticated };
