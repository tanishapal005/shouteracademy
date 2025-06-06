import React, { useState,useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Paths from "../../routes/Paths";
import axios from "axios";
const initialManagerData = [
  { id: 1, name: "John Doe", role: "Project Manager", projects: 5, tasks: 50, profile: "https://i.pravatar.cc/50?img=5" },
  { id: 2, name: "Jane Smith", role: "Team Lead", projects: 3, tasks: 40, profile: "https://i.pravatar.cc/50?img=6" },
  { id: 3, name: "Michael Brown", role: "Senior Developer", projects: 4, tasks: 60, profile: "https://i.pravatar.cc/50?img=7" },
];

const ManagerTable = () => {
  const [managerData, setManagerData] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:5000/admin/managers").then( (res) => {
      setManagerData(res.data.managers);
      console.log(res.data.managers);
    }).catch( (err) => {
      console.log(err);
    });
  },[]);
  const navigate = useNavigate();
  const [managers, setManagers] = useState(initialManagerData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this manager?");
    if (confirmDelete) {
      setManagers(managers.filter((manager) => manager.id !== id));
    }
  };

  // Unique roles for filter dropdown
  const uniqueRoles = ["All", ...new Set(initialManagerData.map((m) => m.role))];

  const filteredManagers = managers.filter((manager) => {
    const lowerTerm = searchTerm.toLowerCase();
    const matchesSearch =
      manager.name.toLowerCase().includes(lowerTerm) ||
      manager.projects.toString().includes(lowerTerm) ||
      manager.tasks.toString().includes(lowerTerm);

    const matchesRole = selectedRole === "All" || manager.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-center">Manager Overview</h3>

      {/* Search & Role Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search */}
        <div className="flex items-center w-full md:w-1/2 bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by name, projects or tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>

        {/* Role Filter Dropdown */}
        <div className="w-full md:w-1/3">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow-sm outline-none"
          >
            {uniqueRoles.map((role, idx) => (
              <option key={idx} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => navigate(Paths.ADDNEWUSER)}
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          + Add User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name </th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {managerData.length > 0 ? (
              managerData.map((manager) => (
                <tr key={manager.id} className="text-center border border-gray-300">
                  <td className="border border-gray-300 p-2">{manager._id}</td>
                  <td className="border border-gray-300 p-2">{manager.name}</td>
                  <td className="border border-gray-300 p-2">{manager.email}</td>
                  <td className="border border-gray-300 p-2">{manager.age}</td>
                  <td className="p-2 flex justify-center space-x-3">
                    <button
                      onClick={() => navigate(Paths.MANAGER_VIEW.replace(":id", manager.id))}
                      className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />

                    </button>

                    <button
                      onClick={() => handleDelete(manager.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 flex items-center space-x-2"
                    >
                      <Trash2 className="w-4 h-4" />

                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No managers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerTable;