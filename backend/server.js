const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user_router");
const studentRouter = require("./routes/student_router");
const professorRouter = require("./routes/professor_router");
const courseRouter = require("./routes/course_router");
const cors = require("cors");
const app = express();
const port = 4000;

// --------------------------------------------------------------------------------------------------------------------

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/student", studentRouter);
app.use("/professor", professorRouter);
app.use("/course", courseRouter);

// --------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log("The server is running...");
});
