const mysql = require('mysql2');

const dbserver = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "ajax"
};

const connection = mysql.createConnection(dbserver);
connection.connect((err) => {
  if (err) {
    console.error("connection failed:", err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = connection;