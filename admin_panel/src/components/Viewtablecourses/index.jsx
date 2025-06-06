import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ViewCourses = () => {
  const course = {
    name: "Digital Marketing",
    instructor: "John Doe",
    duration: "6 Months",
    students: [
      { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "9876543210", enrollDate: "2024-01-15", status: "Active" },
      { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "9876504321", enrollDate: "2024-02-10", status: "Inactive" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "9876123450", enrollDate: "2024-03-05", status: "Active" },
      { id: 4, name: "David Wilson", email: "david@example.com", phone: "9876987654", enrollDate: "2024-04-01", status: "Active" },
    ],
    category: "Marketing",
    startDate: "2025-05-01",
    status: "Active",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        View Course - {course.name}
      </h2>

      {/* Enrolled Students Table */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">Enrolled Students</h3>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Enrollment Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {course.students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.phone}</td>
                <td className="p-3">{student.enrollDate}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-white ${student.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-3 flex justify-center gap-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewCourses;
