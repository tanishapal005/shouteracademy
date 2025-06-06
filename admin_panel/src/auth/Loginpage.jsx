import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/Loginpage/img1.jpg";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Here you would typically make an API call to authenticate
    // For demo, we'll just store the role and redirect
    
    localStorage.setItem('authToken', 'demo-token');
    localStorage.setItem('userRole', role);
    
    // Redirect based on role
    if (role === "Admin" || role === "SuperAdmin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side (Image) */}
      <div className="w-1/2 relative">
        <img
          src={img1}
          alt="Shouters Academy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side (Login Form) */}
      <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Welcome back!</h2>
          <p className="text-lg">We're glad to have you back.</p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium">
              Username or Email address *
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Remember Me
            </label>
            <Link to="/forgotusername" className="text-green-700 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        {/* Role Selection */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 mb-2">Login as</p>
          <div className="flex justify-center gap-3 flex-wrap">
            {["Instructor", "Student", "Admin", "SuperAdmin", "Manager"].map(
              (r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`px-4 py-1 rounded-full border ${
                    role === r
                      ? "bg-green-700 text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {r}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;