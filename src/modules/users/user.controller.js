const conn = require("../../../DataBase/connection.js");
const addUser = (req, res) => {
  const { name, email, password } = req.body;
  const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
  conn.execute(sql, (err, result) => {
    if (err) {
      if (err.errno == 1062) {
        return res.json({ message: "email already in use" });
      } else return res.json({ message: "error while creating user" });
    }

    return res.json({ message: "success" });
  });
};
const getUsers = (req, res) => {
  const sql = `SELECT * FROM users`;
  conn.execute(sql, (err, result) => {
    if (err) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "success", users: result });
  });
};
const updateUser = (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  const sql = `UPDATE users SET email = '${email}' where id = '${id}'`;
  conn.execute(sql, (err, result) => {
    if (result.affectedRows == 0) {
      return res.json({ message: "user not found" });
    }
    return res.json({ message: "success" });
  });
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  const sql = `delete from users where id = '${id}'`;
  conn.execute(sql, (err, result) => {
    if (result.affectedRows == 0) {
      return res.json({ message: "user not found" });
    }
    return res.json({ message: "success" });
  });
};
module.exports = { addUser, getUsers, updateUser, deleteUser };
