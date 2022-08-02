const mongoose = require("mongoose");
const Student = require("./studentModel");
const Course = require("./courseModel");

const examSchema = new mongoose.Schema({
  examType: {
    type: String,
  },
  examMarks: {
    type: Number,
  },
  examDate: {
    type: String,
  },
  remarks: {
    type: String,
  },
});

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
