import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Lock, Unlock, Trash, Pencil, ChevronDown, Users, BookOpen, FileText, DollarSign } from "lucide-react";

const initialUsers = [
  { id: 1, name: "Alice", role: "Admin", status: "Active", profilePic: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", role: "Manager", status: "Inactive", profilePic: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", role: "Student", status: "Active", profilePic: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David", role: "Super Admin", status: "Active", profilePic: "https://i.pravatar.cc/150?img=4" },
];

const DashboardCard = ({ icon, title, value, color }) => (
  <div className={`p-4 rounded-lg shadow ${color} flex items-center gap-3`}>
    <div className="p-2 bg-white bg-opacity-30 rounded-full">{icon}</div>
    <div>
      <p className="text-sm font-medium text-gray-700">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const RolePermission = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState("Super Admin");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const permissions = {
    "Super Admin": ["add", "edit", "delete", "view", "disable"],
    Admin: ["edit", "view"],
    Manager: ["view"],
    Student: ["view"],
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setSelectedUsers(selectedUsers.filter(userId => userId !== id));
  };

  const toggleUserStatus = (id) => {
    setUsers(users.map((user) =>
      user.id === id 
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } 
        : user
    ));
  };

  const canPerform = (action) => permissions[currentUser]?.includes(action);

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId) 
        : [...prev, userId]
    );
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
    setSelectAll(!selectAll);
  };

  const bulkDelete = () => {
    setUsers(users.filter(user => !selectedUsers.includes(user.id)));
    setSelectedUsers([]);
    setSelectAll(false);
  };

  const bulkToggleStatus = (status) => {
    setUsers(users.map(user => 
      selectedUsers.includes(user.id) ? { ...user, status } : user
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentUser} - Roles & Permissions
        </h1>

        <div className="relative">
          <button
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {currentUser} <ChevronDown size={18} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-10 border border-gray-200">
              {Object.keys(permissions).map((role) => (
                <button
                  key={role}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setCurrentUser(role);
                    setDropdownOpen(false);
                  }}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <DashboardCard icon={<Users size={20} />} title="Total Users" value={users.length} color="bg-blue-100" />
        <DashboardCard icon={<BookOpen size={20} />} title="Total Courses" value="320" color="bg-purple-100" />
        <DashboardCard icon={<FileText size={20} />} title="Reports" value="45" color="bg-yellow-100" />
        <DashboardCard icon={<DollarSign size={20} />} title="Revenue" value="$12,500" color="bg-green-100" />
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="mb-4 bg-blue-50 p-3 rounded-lg flex flex-wrap items-center gap-3">
          <span className="font-medium text-blue-800">
            {selectedUsers.length} selected
          </span>

          <div className="flex flex-wrap gap-2">
            {canPerform("delete") && (
              <button 
                className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                onClick={bulkDelete}
              >
                <Trash size={16} /> Delete
              </button>
            )}

            {canPerform("disable") && (
              <>
                <button 
                  className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                  onClick={() => bulkToggleStatus("Active")}
                >
                  <Unlock size={16} /> Activate
                </button>
                <button 
                  className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition-colors"
                  onClick={() => bulkToggleStatus("Inactive")}
                >
                  <Lock size={16} /> Deactivate
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* User Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Manage Roles</h2>

          {canPerform("add") && (
            <button
              className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              onClick={() => navigate("/addrole")}
            >
              + Add Role
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3"><input type="checkbox" checked={selectAll} onChange={toggleSelectAll} /></th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-3"><input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={() => toggleUserSelection(user.id)} /></td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                     
                      {canPerform("edit") && (
                        <button onClick={() => navigate("/editrolesandpermission")} className="text-yellow-500 hover:text-yellow-700 p-1"><Pencil size={16} /></button>
                      )}
                      {canPerform("disable") && (
                        <button onClick={() => toggleUserStatus(user.id)} className="p-1">
                          {user.status === "Active" ? <Lock size={16} className="text-red-500" /> : <Unlock size={16} className="text-green-500" />}
                        </button>
                      )}
                      {canPerform("delete") && (
                        <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:text-red-700 p-1"><Trash size={16} /></button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RolePermission;
