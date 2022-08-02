const Exam = require("./../models/examModel");
console.count;
// exports.getOneExam = (req, res) => {
//   res.status(200).json({
//     status: "success",
//   });
// };
exports.getAllExams = async (req, res) => {
  try {
    const exam = await Exam.find();
    res.status(200).json({
      status: "success",
      result: exam.lenght(),
      data: {
        exam,
      },
    });
  } catch (error) {}
};
exports.createExam = async (req, res) => {
  console.log(req.body);
  try {
    const exam = await Exam.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        exam,
      },
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error.message });
  }
};
// exports.updateExam = (req, res) => {
//   res.status(200).json({
//     status: "success",
//   });
// };
// exports.deleteExam = (req, res) => {
//   res.status(204).json({
//     status: "success",
//   });
// };
