const express = require('express');
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseStats
} = require('../controllers/courseController');

const router = express.Router();

// Course statistics route
router.get('/stats', getCourseStats);

// CRUD routes
router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;