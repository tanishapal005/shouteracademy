const mongoose = require('mongoose');
const Course = require('../models/Course');
require('dotenv').config();

const sampleCourses = [
  {
    name: "Full Stack Web Development",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    status: "Active",
    rating: 4.9,
    students: 25000,
    mentors: 15,
    reviews: 18500,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww"
  },
  {
    name: "UI/UX Design Masterclass",
    description: "Master the art of user interface and user experience design",
    status: "Active",
    rating: 4.7,
    students: 18000,
    mentors: 12,
    reviews: 14200,
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWdufGVufDB8fDB8fHww"
  },
  {
    name: "Data Science & Machine Learning",
    description: "Complete guide to data science and machine learning with Python",
    status: "Active",
    rating: 4.8,
    students: 22000,
    mentors: 18,
    reviews: 16800,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Mobile App Development",
    description: "Build native and cross-platform mobile applications",
    status: "Active",
    rating: 4.6,
    students: 16000,
    mentors: 10,
    reviews: 12400,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww"
  },
  {
    name: "Digital Marketing Strategy",
    description: "Comprehensive digital marketing course for modern businesses",
    status: "Inactive",
    rating: 4.4,
    students: 12000,
    mentors: 8,
    reviews: 9600,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/course_management');
    console.log('Connected to MongoDB');

    // Clear existing courses
    await Course.deleteMany({});
    console.log('Cleared existing courses');

    // Insert sample courses
    const courses = await Course.insertMany(sampleCourses);
    console.log(`Inserted ${courses.length} sample courses`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();