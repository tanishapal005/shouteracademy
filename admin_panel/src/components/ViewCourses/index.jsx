import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { motion } from "framer-motion";
import { 
  FaChalkboardTeacher, FaClock, FaUsers, FaCalendarAlt, 
  FaCheckCircle, FaTimesCircle, FaEdit, FaTrash, FaLayerGroup, 
  FaDollarSign, FaInfoCircle
} from "react-icons/fa";

const ViewCourses = () => {
  const navigate = useNavigate(); // Hook for navigation

  const course = {
    id: 1,
    name: "Digital Marketing",
    instructor: "John Doe",
    duration: "6 Months",
    enrolledStudents: 120,
    category: "Marketing",
    startDate: "2025-05-01",
    status: "Active",
    price: "₹1500",
    description: "Learn the fundamentals of digital marketing including SEO, social media, and paid advertising.",
    thumbnail: "/course-image.jpg",
  };

  // Handle Delete Action
  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      // Simulating delete action (Replace with API call)
      console.log(`Deleted course ID: ${course.id}`);
      
      // Redirect to previous page
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-gray-100 p-6">
      <motion.div
        className="w-full max-w-5xl bg-white p-10 flex flex-col md:flex-row gap-10 border border-gray-200 rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Section - Course Thumbnail */}
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white p-6 rounded-2xl border border-gray-300 shadow-md">
          <motion.img
            src={course.thumbnail}
            alt={course.name}
            className="w-40 h-40 rounded-lg shadow-lg border-4 border-white object-cover"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <h2 className="text-gray-800 text-2xl font-bold mt-4">{course.name}</h2>
          <span className="mt-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            {course.category}
          </span>
        </div>

        {/* Right Section - Course Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
            Course Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
            <div className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-indigo-500" />
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-green-600" />
              <span>Duration: {course.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-red-500" />
              <span>Enrolled Students: {course.enrolledStudents}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLayerGroup className="text-purple-500" />
              <span>Category: {course.category}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDollarSign className="text-yellow-500" />
              <span>Price: {course.price}</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-blue-600" />
              <span>Published Date: {course.startDate}</span>
            </div>
            <div className="flex items-center gap-3">
              {course.status === "Active" ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <FaTimesCircle className="text-red-500" />
              )}
              <span>Status: {course.status}</span>
            </div>
            <div className="flex items-center gap-3 col-span-2">
              <FaInfoCircle className="text-gray-500" />
              <span>{course.description}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t mt-6">
            <button
              onClick={() => navigate(`/editcourse`)}
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <FaEdit size={18} />
              Edit Course
            </button>
            <button
              onClick={handleDelete}
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <FaTrash size={18} />
              Delete Course
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewCourses;
