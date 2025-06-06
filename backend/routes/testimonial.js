const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addTestimonial,
  getTestimonials,
} = require("../controllers/testimonialController");

// Multer setup to store files in /uploads/testimonials
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/testimonials");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});
const upload = multer({ storage });

// Route for adding testimonial with optional file upload
router.post("/add", upload.single("videoFile"), addTestimonial);

// Route for getting testimonials
router.get("/", getTestimonials);

module.exports = router;
