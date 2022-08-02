const { Schema, model, Types } = require("mongoose");
const Student = require("./studentModel");
const Course = require("./courseModel");

const ObjectId = Types.ObjectId;

const enrollmentSchema = new Schema({
  student: {
    type: ObjectId,
    ref: Student,
  },
  course: {
    type: ObjectId,
    ref: Course,
  },
});

const Enroll = model("Enroll", enrollmentSchema);
module.exports = Enroll;
