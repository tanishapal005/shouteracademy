// src/pages/Login.jsx
import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom"; // <-- import this

const Login = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Login successful!");
      navigate("/"); // <-- redirect to home after login
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-sm text-center text-gray-500">Login to continue</p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full py-3 px-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200"
        >
          <FcGoogle className="mr-3 text-xl" />
          Continue with Google
        </button>

        <p className="text-xs text-center text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
