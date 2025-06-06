import React, { useState } from "react";
import { Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Paths from "../../routes/Paths";

const AdminTable = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [adminList, setAdminList] = useState([
    {
      id: 1,
      name: "Michael Scott",
      email: "michael@dundermifflin.com",
      profile: "https://i.pravatar.cc/50?img=5",
      role: "Manager",
      lastLogin: "2025-03-28",
    },
    {
      id: 2,
      name: "David Wallace",
      email: "david@dundermifflin.com",
      profile: "https://i.pravatar.cc/50?img=6",
      role: "CEO",
      lastLogin: "2025-03-27",
    },
    {
      id: 3,
      name: "Jan Levinson",
      email: "jan@dundermifflin.com",
      profile: "https://i.pravatar.cc/50?img=7",
      role: "HR",
      lastLogin: "2025-03-29",
    },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this admin?");
    if (confirmDelete) {
      setAdminList(adminList.filter((admin) => admin.id !== id));
    }
  };

  // Filtered list based on search and selected role
  const filteredAdmins = adminList.filter((admin) => {
    const matchesSearch =
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole ? admin.role === selectedRole : true;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-semibold mb-6">Admin Table</h3>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/2"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/4"
        >
          <option value="">Filter by Role</option>
          <option value="Manager">Manager</option>
          <option value="CEO">CEO</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3">ID</th>
            <th className="border p-3">Profile</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Role</th>
            <th className="border p-3">Last Login</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdmins.length > 0 ? (
            filteredAdmins.map((admin) => (
              <tr key={admin.id} className="border">
                <td className="border p-3">{admin.id}</td>
                <td className="mt-3 p-3 flex items-center space-x-3">
                  <img
                    src={admin.profile}
                    alt={admin.name}
                    className="rounded-full w-10 h-10"
                  />
                  <span>{admin.name}</span>
                </td>
                <td className="border p-3">{admin.email}</td>
                <td className="border p-3">{admin.role}</td>
                <td className="border p-3">{admin.lastLogin}</td>
                <td className="p-3 flex flex-col sm:flex-row gap-2">
                <div className="flex items-center space-x-2 mb-4">
                  <button
                    onClick={() =>
                      navigate(
                        Paths.VIEW_PAGE.replace(":type", "admin").replace(
                          ":id",
                          admin.id
                        )
                      )
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    <Eye className="w-4 h-4" />
                   
                  </button>

                  <button
                    onClick={() => handleDelete(admin.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center p-4">
                No admins found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
