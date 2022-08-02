const Student = require("./../models/studentModel");
const Course = require("./../models/courseModel");
const Enroll = require("./../models/enrollmentModel");

exports.createEnrollment = async (req, res) => {
  try {
    const { sid, cid } = req.params;
    console.log(sid, cid);
    const student = await Student.findOne({ _id: sid });
    const course = await Course.findOne({ _id: cid });
    console.log(student);
    console.log(course);
    const enroll = await Enroll.create({
      student: student._id,
      course: course._id,
    });

    res.status(200).send({
      status: "success",
      data: {
        enroll,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.getCourseStudnts = async (req, res) => {
  try {
    const { sid } = req.params;

    const enroll = await Enroll.find({ student: sid }).populate("course");

    res.status(200).send({
      status: "success",
      data: {
        enroll,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.getStudntCourses = async (req, res) => {
  try {
    const { cid } = req.params;

    const enroll = await Enroll.find({ course: cid }).populate("student");

    res.status(200).send({
      status: "success",
      data: {
        enroll,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
