exports.getOneTeacher = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.getAllTeachers = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.createTeacher = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      students: req.body,
    },
  });
};
exports.updateTeacher = (req, res) => {
  res.status(200).json({
    status: "success",
  });
};
exports.deleteTeacher = (req, res) => {
  res.status(204).json({
    status: "success",
  });
};
