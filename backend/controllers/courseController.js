const Course = require('../models/Course');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const filter = {};
    
    if (status) {
      filter.status = status;
    }

    const courses = await Course.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Course.countDocuments(filter);

    res.json({
      success: true,
      data: courses,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching courses',
      error: error.message
    });
  }
};

// Get single course by ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching course',
      error: error.message
    });
  }
};

// Create new course
const createCourse = async (req, res) => {
  try {
    const { name, description, status, rating, students, mentors, reviews, image } = req.body;

    // Check if course with same name already exists
    const existingCourse = await Course.findOne({ name });
    if (existingCourse) {
      return res.status(400).json({
        success: false,
        message: 'Course with this name already exists'
      });
    }

    const course = new Course({
      name,
      description,
      status,
      rating,
      students,
      mentors,
      reviews,
      image
    });

    await course.save();

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: Object.values(error.errors).map(e => e.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error creating course',
      error: error.message
    });
  }
};

// Update course
const updateCourse = async (req, res) => {
  try {
    const { name, description, status, rating, students, mentors, reviews, image } = req.body;

    // Check if another course with same name exists
    if (name) {
      const existingCourse = await Course.findOne({ 
        name, 
        _id: { $ne: req.params.id } 
      });
      if (existingCourse) {
        return res.status(400).json({
          success: false,
          message: 'Course with this name already exists'
        });
      }
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        status,
        rating,
        students,
        mentors,
        reviews,
        image
      },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      message: 'Course updated successfully',
      data: course
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: Object.values(error.errors).map(e => e.message)
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating course',
      error: error.message
    });
  }
};

// Delete course
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting course',
      error: error.message
    });
  }
};

// Get course statistics
const getCourseStats = async (req, res) => {
  try {
    const stats = await Course.aggregate([
      {
        $group: {
          _id: null,
          totalCourses: { $sum: 1 },
          activeCourses: {
            $sum: { $cond: [{ $eq: ['$status', 'Active'] }, 1, 0] }
          },
          inactiveCourses: {
            $sum: { $cond: [{ $eq: ['$status', 'Inactive'] }, 1, 0] }
          },
          totalStudents: { $sum: '$students' },
          totalMentors: { $sum: '$mentors' },
          averageRating: { $avg: '$rating' }
        }
      }
    ]);

    res.json({
      success: true,
      data: stats[0] || {
        totalCourses: 0,
        activeCourses: 0,
        inactiveCourses: 0,
        totalStudents: 0,
        totalMentors: 0,
        averageRating: 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching course statistics',
      error: error.message
    });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseStats
};