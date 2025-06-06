// models/Course.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
  category: String, // e.g., 'Marketing'
  price: Number,
  students: Number,
  status: String,
  publishedDate: Date,
  image: String,
});

module.exports = mongoose.model("Course", courseSchema);
