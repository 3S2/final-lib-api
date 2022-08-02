const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: ["true", "A course must have a name"],
  },
  courseTeacher: {
    type: String,
    required: ["true", "A course must have a teacher"],
  },
  courseBook: {
    type: String,
  },
  courseDuration: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now(),
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
