/* 

  This the courses endpoints 
  when we hit the course endpoint 
  we are redirected to to this page 
  from here we send it to the controllers

*/

const express = require("express");
const courseController = require("./../controllers/courseController");

const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);
router
  .route("/:id")
  .get(courseController.getOneCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
