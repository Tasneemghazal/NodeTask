const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("./src/modules/users/user.js");
const blogRouter = require("./src/modules/blogs/blog.js");
app.use(userRouter);
app.use(blogRouter);

app.listen(3000, () => {
  console.log("listening on 3000");
});
