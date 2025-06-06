import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ArrowLeft } from "lucide-react";

const EditRolesAndPermissionsPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
 
    role: "Manager",
    department: "Sales",
    status: "Active",
    permissions: {
      viewReports: true,
      editUsers: false,
      manageRoles: true,
      deleteRecords: false,
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePermissionChange = (permission) => {
    setFormData((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: !prev.permissions[permission],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Roles and permissions updated successfully! (Mocked)");
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center mt-20 bg-gray-100 p-6 ml-60">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Edit Roles & Permissions
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Basic Details */}

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border rounded-lg p-2 mt-1 text-gray-800"
            >
              <option value="Manager">Manager</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Staff">Staff</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>

         

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border rounded-lg p-2 mt-1 text-gray-800"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>

          {/* Permissions */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-2">Permissions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(formData.permissions).map(([perm, value]) => (
                <label key={perm} className="flex items-center space-x-3 text-gray-700">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => handlePermissionChange(perm)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span className="capitalize">{perm.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex gap-4 mt-6">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md flex items-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRolesAndPermissionsPage;