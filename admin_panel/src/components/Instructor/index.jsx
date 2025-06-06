// src/pages/InstructorPage.jsx
import React, { useState } from 'react';
import { FaEdit, FaToggleOn, FaToggleOff, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Eye, Trash2 } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
 // path sahi se adjust kar lena

const mockInstructors = [
  {
    id: 1,
    name: 'Kavita Sharma',
    email: 'kavita@example.com',
    phone: '9876543210',
    designation: 'Full-time',
    subjects: ['Math', 'Physics'],
    joined: '2022-01-15',
    active: true,
    studentsTaught: 120,
    bio: 'PhD in Applied Mathematics with 10 years of experience.',
    profile: 'https://via.placeholder.com/50'
  },
  // Add more mock data if needed
];

const InstructorPage = () => {
  const [instructors, setInstructors] = useState(mockInstructors);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleToggleStatus = (id) => {
    setInstructors(prev =>
      prev.map(inst => inst.id === id ? { ...inst, active: !inst.active } : inst)
    );
  };

  const filteredInstructors = instructors.filter(inst =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 ml-60 mt-16">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Instructors</h1>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center bg-gray-100 p-2 rounded-lg w-1/3">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>
        <button
          onClick={() => navigate('/addnewuser')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm">
              <th className="p-3">Profile</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Designation</th>
              <th className="p-3">Subjects</th>
              <th className="p-3">Joined</th>
              <th className="p-3">Students</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInstructors.map(inst => (
              <motion.tr
                key={inst.id}
                className="border-t hover:bg-gray-50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <td className="p-3">
                  <img src={inst.profile} alt={inst.name} className="rounded-full w-10 h-10" />
                </td>
                <td className="p-3 font-semibold">{inst.name}</td>
                <td className="p-3">{inst.email}</td>
                <td className="p-3">{inst.phone}</td>
                <td className="p-3">{inst.designation}</td>
                <td className="p-3">{inst.subjects.join(', ')}</td>
                <td className="p-3">{inst.joined}</td>
                <td className="p-3">{inst.studentsTaught}</td>
                <td className="p-3">
                  <button onClick={() => handleToggleStatus(inst.id)}>
                    {inst.active ? (
                      <FaToggleOn className="text-green-500 text-xl" />
                    ) : (
                      <FaToggleOff className="text-gray-400 text-xl" />
                    )}
                  </button>
                </td>
                <td className="p-3 flex items-center gap-2">
  <Link to={`/users/instructors/view/${inst.id}`} title="View">
  <Eye className="text-blue-600 hover:scale-110 transition-transform cursor-pointer" />
</Link>
                  
                  <button title="Delete">
                    <Trash2 className="text-red-500 hover:scale-110 transition-transform" />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorPage;
