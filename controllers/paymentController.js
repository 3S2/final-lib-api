exports.createPayment = (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      students: req.body,
    },
  });
};
