import React, { useState } from "react";

const NewUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    group: "",
    status: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.role) newErrors.role = "Select a user role";
    if (!formData.status) newErrors.status = "Select a status";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("New User Data:", formData);
      alert(`New User Added: ${formData.name} as ${formData.role}`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        group: "",
        status: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex  items-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
          Add New User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
              placeholder="Enter full name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
              placeholder="Enter email"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
              placeholder="Enter phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
              placeholder="Enter password"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          {/* User Role */}
          <div>
            <label className="block text-sm text-gray-700">User Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
            >
              <option value="">Select a user role</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
          </div>

        

          {/* Status */}
          <div>
            <label className="block text-sm text-gray-700">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg mt-1 text-sm focus:ring focus:ring-blue-300"
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <p className="text-red-500 text-xs">{errors.status}</p>}
          </div>

          {/* Save Button (Full Width Centered) */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded-lg w-full max-w-xs text-sm hover:bg-blue-700 transition duration-300"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;