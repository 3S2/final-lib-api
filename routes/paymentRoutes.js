const express = require("express");
const paymentController = require("./../controllers/studentController");

const router = express.Router();

router.route("/:id").post(paymentController.createPayment);

module.exports = router;
