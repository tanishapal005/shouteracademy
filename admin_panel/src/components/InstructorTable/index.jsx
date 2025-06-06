import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Paths from "../../routes/Paths";

const AdminTable = () => {
  const navigate = useNavigate();
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const [admins, setAdmins] = useState([
    {
      id: 1,
      image: "https://i.pravatar.cc/50?img=12",
      name: "Amit Sharma",
      email: "amit.admin@example.com",
      role: "Super Admin",
      department: "Operations",
      accountStatus: "Active",
      joiningDate: "05 Jan 2024",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/50?img=18",
      name: "Neha Verma",
      email: "neha.verma@example.com",
      role: "Moderator",
      department: "HR",
      accountStatus: "Suspended",
      joiningDate: "20 Feb 2024",
    },
    // Add more admins if needed
  ]);

  const handleDelete = (id) => {
    const updatedList = admins.filter((admin) => admin.id !== id);
    setAdmins(updatedList);
    setSelectedAdmin(null);
  };

  const handleCloseModal = () => {
    setSelectedAdmin(null);
  };

  const filteredAdmins = admins.filter((admin) => {
    const matchesSearch = admin.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterRole === "All" || admin.role === filterRole;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto mt-12">
      {/* Heading & Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-1">
          Admin Management Panel
        </h2>
        <button
          onClick={() => navigate(Paths.ADDNEWUSER)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add Admin
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md"
        >
          <option value="All">All Roles</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Moderator">Moderator</option>
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md w-full sm:w-1/2"
        />
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Admin</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Joining Date</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.map((admin) => (
            <tr key={admin.id} className="border-b">
              <td className="p-3">{admin.id}</td>
              <td className="p-3 flex items-center space-x-3">
                <img
                  src={admin.image}
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
                <span>{admin.name}</span>
              </td>
              <td className="p-3">{admin.email}</td>
              <td className="p-3">{admin.role}</td>
              <td className="p-3">{admin.department}</td>
              <td className="p-3">{admin.accountStatus}</td>
              <td className="p-3">{admin.joiningDate}</td>
              <td className="p-4 flex space-x-2 mt-2">
                <button
                  className="text-blue-500"
                  onClick={() => navigate(Paths.VIEW_ADMIN.replace(":id", admin.id))}
                >
                  <Eye />

                </button>
                
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(admin.id)}
                >
                  <Trash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Viewing Admin Details */}
      {selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold text-center">Admin Details</h3>
            <div className="text-center my-3">
              <img
                src={selectedAdmin.image}
                alt="Profile"
                className="h-24 w-24 rounded-full mx-auto border border-gray-300"
              />
              <p className="text-lg font-semibold mt-2">{selectedAdmin.name}</p>
              <p className="text-gray-600">{selectedAdmin.email}</p>
              <p className="text-gray-600">{selectedAdmin.role}</p>
              <p className="text-gray-600">{selectedAdmin.department}</p>
              <p className="text-gray-600 font-semibold">{selectedAdmin.accountStatus}</p>
              <p className="text-gray-500 text-sm">
                Joined on {selectedAdmin.joiningDate}
              </p>
            </div>

            <button
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              onClick={() => handleDelete(selectedAdmin.id)}
            >
              Delete
            </button>

            <button
              className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;