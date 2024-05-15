const express = require("express");
const courseAdmin = require("../controllers/course_admin");
const evalAdmin = require("../controllers/evaluation_admin");
const router = express.Router();

// --------------------------------------------------------------------------------------------------------------------

router.get("/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const response = await courseAdmin.getCourseInfo(courseId);
  res.json(response);
});

router.get("/students/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const response = await courseAdmin.getCourseStudents(courseId);
  res.json(response);
});

router.get("/evals/:courseId", async (req, res) => {
  const courseId = req.params.courseId;
  const response = await courseAdmin.getCourseEvals(courseId);
  res.json(response);
});

router.post("/evals", async (req, res) => {
  const { name, description, deadline, courseId } = req.body;
  const response = await evalAdmin.registerEvaluation(
    courseId,
    name,
    deadline,
    description
  );
  res.json(response);
});

module.exports = router;
