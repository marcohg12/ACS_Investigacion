const mysql = require("mysql2");
const fs = require("fs");
const {
  DB_USER,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
} = require("./constants");

// --------------------------------------------------------------------------------------------------------------------

const pool = mysql.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
});

// --------------------------------------------------------------------------------------------------------------------

// Recibe un string con el query que se quiere ejecutar
// Ejecuta la consulta indicada por el query
// Retorna el resultado de la consulta
async function executeQuery(query) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }

      connection.query(query, (error, results) => {
        connection.release();

        if (error) {
          reject(error);
          return;
        }

        resolve(results);
      });
    });
  });
}

module.exports = { executeQuery };
