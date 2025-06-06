import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnrollmentsList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [enrollments, setEnrollments] = useState([
    {
      id: 1,
      studentId: "STU001",
      student: "Amit Sharma",
      instructor: "Rahul Yadav",
      course: "ReactJS Essentials",
      date: "2024-03-27",
      status: "Approved",
    },
    {
      id: 2,
      studentId: "STU002",
      student: "Priya Verma",
      instructor: "Sneha Kapoor",
      course: "JavaScript Mastery",
      date: "2024-03-26",
      status: "Pending",
    },
    {
      id: 3,
      studentId: "STU003",
      student: "Rohan Gupta",
      instructor: "Neha Singh",
      course: "Full Stack Bootcamp",
      date: "2024-03-25",
      status: "Rejected",
    },
  ]);

  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [editEnrollment, setEditEnrollment] = useState(null);
  const [editStatus, setEditStatus] = useState("Pending");

  const handleDelete = (id) => {
    setEnrollments(enrollments.filter((e) => e.id !== id));
    toast.success("Enrollment deleted successfully!");
  };

  const handleEdit = (enrollment) => {
    setEditEnrollment(enrollment);
    setEditStatus(enrollment.status);
  };

  const handleSave = () => {
    setEnrollments(
      enrollments.map((e) =>
        e.id === editEnrollment.id ? { ...e, status: editStatus } : e
      )
    );
    setEditEnrollment(null);
    toast.success("Enrollment updated successfully!");
  };

  const filteredEnrollments = enrollments.filter((e) =>
    e.student.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-white shadow-md rounded-xl relative">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">Enrollments List</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by student name..."
        className="mb-4 p-2 border border-gray-300 rounded-lg w-full md:w-1/3"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">Student ID</th>
              <th className="border p-3">Student Name</th>
              <th className="border p-3">Instructor</th>
              <th className="border p-3">Course</th>
              <th className="border p-3">Date of Enrolled</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnrollments.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50 transition">
                <td className="border p-3">{e.studentId}</td>
                <td className="border p-3">{e.student}</td>
                <td className="border p-3">{e.instructor}</td>
                <td className="border p-3">{e.course}</td>
                <td className="border p-3">{e.date}</td>
                <td className="border p-3">{e.status}</td>
                <td className="border p-3 flex gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg"
                    onClick={() => setSelectedEnrollment(e)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    onClick={() => handleEdit(e)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
                    onClick={() => handleDelete(e.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedEnrollment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96"
          >
            <h3 className="text-xl font-bold mb-4">Student Details</h3>
            <p><strong>Student ID:</strong> {selectedEnrollment.studentId}</p>
            <p><strong>Student Name:</strong> {selectedEnrollment.student}</p>
            <p><strong>Instructor:</strong> {selectedEnrollment.instructor}</p>
            <p><strong>Course:</strong> {selectedEnrollment.course}</p>
            <p><strong>Date of Enrolled:</strong> {selectedEnrollment.date}</p>
            <p><strong>Status:</strong> {selectedEnrollment.status}</p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              onClick={() => setSelectedEnrollment(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      {/* Edit Modal */}
      {editEnrollment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-96"
          >
            <h3 className="text-xl font-bold mb-4">Edit Status</h3>
            <label className="block mb-2 font-medium">Status:</label>
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg"
            >
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>

            <div className="flex gap-2 mt-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                onClick={() => setEditEnrollment(null)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EnrollmentsList;
