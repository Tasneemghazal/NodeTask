const express = require("express");
const app = express();
const userController = require("./user.controller.js");

app.post("/add", userController.addUser);
app.get("/get", userController.getUsers);
app.patch("/update/:id", userController.updateUser);
app.delete("/delete/:id", userController.deleteUser);
module.exports = app; // we call it custom module
