import React, { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [courseTerm, setCourseTerm] = useState("");

  const studentsData = [
    {
      id: 1,
      name: "Aarav Sharma",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      courses: [
        { name: "React Basics", domain: "Frontend" },
        { name: "Node.js", domain: "Backend" },
      ],
      regDate: "2024-01-10",
      status: "Active",
    },
    {
      id: 2,
      name: "Kavita Suthar",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      courses: [
        { name: "React Advanced", domain: "Frontend" },
        { name: "DSA", domain: "CS" },
      ],
      regDate: "2024-02-18",
      status: "Inactive",
    },
  ];

  const filteredStudents = studentsData.filter((student) => {
    const nameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const courseMatch = student.courses.some((course) =>
      course.name.toLowerCase().includes(courseTerm.toLowerCase())
    );
    return nameMatch && courseMatch;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border px-3 py-2 rounded-md w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by course"
          className="border px-3 py-2 rounded-md w-1/3"
          value={courseTerm}
          onChange={(e) => setCourseTerm(e.target.value)}
        />
        <button
          onClick={() => navigate('/addnewuser')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add User
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Courses</th>
              <th className="px-4 py-3">Reg. Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img src={student.image} alt="profile" className="w-8 h-8 rounded-full" />
                  {student.name}
                </td>
                <td className="px-4 py-3">
                  {student.courses.map((course, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full mr-1 mb-1"
                    >
                      {course.name}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-3">{student.regDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-medium ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => navigate(`/students/${student.id}`, { state: { student } })}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No matching students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
