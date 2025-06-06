import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "", // ✅ added password state
  });
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // add this with other states


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile" && /^\d{0,10}$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/users/add", formData);
      alert(res.data.message);
      setShowForm(false);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {showForm ? (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>

          <label className="block text-sm font-semibold mt-4 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-red-500 rounded-lg outline-none"
          />

          <label className="block text-sm font-semibold mt-4 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-red-500 rounded-lg outline-none"
          />

          <label className="block text-sm font-semibold mt-4 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center border border-red-500 rounded-lg p-2">
            <span className="px-2">🇮🇳 +91</span>
            <input
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-1 outline-none"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
            />
          </div>

          {/* ✅ Password Field */}
          <label className="block text-sm font-semibold mt-4 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-red-500 rounded-lg outline-none"
          />
          

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 mt-4 rounded-lg hover:bg-red-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Sign up"}
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By continuing, you agree to shoutersacademy{" "}
            <span className="text-red-500">Terms of Service</span> and{" "}
            <span className="text-red-500">Privacy Policy</span>.
          </p>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already a member?
            <span
              className="text-red-500 cursor-pointer font-semibold ml-1"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </form>
      ) : (
        <div className="text-center text-xl font-semibold">Thank you for signing up!</div>
      )}
    </div>
  );
};

export default Signup;
