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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
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
      // Reset form
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
    <div className="flex justify-center mt-20 ml-60 p-6">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Add New User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter 10-digit phone number"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter password (min 6 characters)"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Role Field */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              User Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a user role</option>
              <option value="Instructor">Instructor</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
            </select>
            {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
          </div>

          {/* Status Field */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.status ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
            {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
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
