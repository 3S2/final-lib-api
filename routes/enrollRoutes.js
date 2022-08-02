const express = require("express");
const enrollmentController = require("./../controllers/enrollmentController");

const router = express.Router();

router.route("/:sid/:cid").post(enrollmentController.createEnrollment);

router.route("/course/:sid").get(enrollmentController.getCourseStudnts);
router.route("/student/:cid").get(enrollmentController.getStudntCourses);

module.exports = router;
