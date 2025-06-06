import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const admin = location.state?.admin;
  const [formData, setFormData] = useState(admin || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin updated successfully!");
    navigate(`/admin/view/${formData.id}`);
  };

  if (!admin) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        No admin data to edit.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mt-16 p-6 bg-white rounded-lg shadow-md ml-72">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Admin Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          "name", "username", "email", "phone", "address", "lastLogin",
          "gender", "course", "department", "dob", "status", "role"
        ].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}

        {/* Buttons in opposite corners */}
        <div className="col-span-2 mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition-all duration-200"
          >
            ⬅ Back
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all duration-200"
          >
            💾 Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAdmin;

