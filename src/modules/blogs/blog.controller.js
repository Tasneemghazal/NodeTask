const conn = require("../../../DataBase/connection.js");
const addBlog = (req, res) => {
  const { title, description, user_id } = req.body;
  const sql = `INSERT INTO blogs (title, description,user_id) VALUES ('${title}', '${description}', '${user_id}')`;
  conn.execute(sql, (err, result) => {
    if (err) {
      if (err.errno == 1452) {
        return res.json({ message: " user not found" });
      }
      return res.json({ message: "error", err });
    }
    return res.json({ message: "success" });
  });
};
const getBlogs = (req, res) => {
  const sql = `SELECT blogs.id as blog_id, users.id as user_id, name,title, description FROM blogs INNER JOIN users on blogs.user_id = users.id`;
  conn.execute(sql, (err, result) => {
    if (err) {
      return res.json({ message: "error" });
    }
    return res.json({ message: "success", users: result });
  });
};
const updateBlog = (req, res) => {
  const { description } = req.body;
  const { id } = req.params;
  const sql = `UPDATE blogs SET description = '${description}' where id = '${id}'`;
  conn.execute(sql, (err, result) => {
    if (result.affectedRows == 0) {
      return res.json({ message: "blog not found" });
    }
    return res.json({ message: "success" });
  });
};
const deleteBlog = (req, res) => {
  const { id } = req.params;
  const sql = `delete from blogs where id = '${id}'`;
  conn.execute(sql, (err, result) => {
    if (result.affectedRows == 0) {
      return res.json({ message: "blog not found" });
    }
    return res.json({ message: "success" });
  });
};
module.exports = { addBlog, getBlogs, updateBlog, deleteBlog };
