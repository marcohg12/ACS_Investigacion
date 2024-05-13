const express = require("express");
const courseAdmin = require("../controllers/course_admin");
const router = express.Router();

// --------------------------------------------------------------------------------------------------------------------

router.get("/courses/:userId", async (req, res) => {
  const userId = req.params.userId;
  const response = await courseAdmin.getStudentCourses(userId);
  res.json(response);
});

module.exports = router;
