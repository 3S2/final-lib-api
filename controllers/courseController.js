const Course = require("./../models/courseModel");

exports.getOneCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).send({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.getAllCourses = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).send({
      status: "success",
      result: course.length,
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).send({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).send({
      status: "success",
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
};
