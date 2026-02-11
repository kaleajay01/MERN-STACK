const connection = require('../config/db');

exports.addUser = (name, contact, result) => {
  const sql = "INSERT INTO ajaxoops(name, contact) VALUES(?, ?)";
  connection.query(sql, [name, contact], result);
};

exports.getAllUser = (callback) => {
  const sql = "select * from ajaxoops"
  connection.query(sql, callback);
};