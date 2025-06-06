const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// ✅ POST: Add a course
router.post("/", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    const savedCourse = await newCourse.save();
    res.status(201).json({ message: "Course added successfully", course: savedCourse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ✅ GET: Get all courses (optional)
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Unable to fetch courses" });
  }
});

module.exports = router;
