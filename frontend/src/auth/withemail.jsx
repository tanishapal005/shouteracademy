import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful");
        console.log("User data:", data.user);
        
        navigate("/");
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      alert("❌ Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <p
          className="text-red-500 text-sm text-right cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Use Phone Number, instead
        </p>

        <label className="block text-sm font-semibold mt-4 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-red-500 rounded-lg outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm font-semibold mt-4 mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center border border-red-500 rounded-lg p-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-1 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="cursor-pointer text-gray-500 ml-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2 cursor-pointer">
          Credentials not working?{" "}
          <span className="text-red-500 font-semibold">Forgot password</span>
        </p>

        <button
          className="w-full bg-red-600 text-white py-2 mt-4 rounded-lg hover:bg-red-700 transition"
          onClick={handleEmailLogin}
        >
          Login
        </button>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don’t have an account?
          <span
            className="text-red-500 cursor-pointer font-semibold ml-1"
            onClick={() => navigate("/createaccount")}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailLogin;
