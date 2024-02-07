const express = require("express");
const app = express();
const blogController = require("./blog.controller.js");
app.post("/addblog", blogController.addBlog);
app.get("/getblog", blogController.getBlogs);
app.patch("/updateblog/:id", blogController.updateBlog);
app.delete("/deleteblog/:id", blogController.deleteBlog);
module.exports = app;
