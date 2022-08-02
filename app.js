// IMPORTING THE PACKAGES
const mongoose = require("mongoose");
const express = require("express");
// const AppError = require("./utils/appError");
// const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");
const path = require("path");

//ASSING APP TO THE EXPRESS OBJECT
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// CONNECTING TO THE DATABASE
const url = "mongodb://localhost:27017/Liberty";
mongoose.connect(url).then(() => {
  console.log("Connected to database");
});

// DECLERING THE ROUTE HANDLERS
const studentRouter = require("./routes/studentRoutes");
const courseRouter = require("./routes/courseRoutes");
const paymnetRouter = require("./routes/paymentRoutes");
const examRouter = require("./routes/examRoutes");
// const teacherRouter = require("./routes/teacherRoutes");
const enrollRouter = require("./routes/enrollRoutes");

// DECLERING Routes --------------------------------
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/payments", paymnetRouter);
app.use("/api/v1/exams", examRouter);
// app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/enrolls", enrollRouter);

// SERVER SIDE PAGES ROUTE
app.get("/", (req, res) => {
  res.status(200).render("base");
});

// USING THE EXPRESS  AND CORS MIDDLEWARE
app.use(cors());
app.use(express.json());

// HANDLING NOT FOUND ROUTES
// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
// });

// app.use(globalErrorHandler);

// EXPORTING THE APP AS MODULE
module.exports = app;
