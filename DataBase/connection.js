const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_blog",
});

module.exports = conn;
