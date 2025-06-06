import React, { useState, useEffect, useRef } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    
    // Redirect to login page
    navigate("/login");
  };

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('authToken');
  const userName = localStorage.getItem('userName') || 'Guest';

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon with Greeting */}
      <div 
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-gray-700">
          Hello, {userName.split(' ')[0]}
        </span>
        <BsPersonCircle 
          className="size-6 hover:scale-110 transition-transform duration-200 text-gray-700" 
        />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md py-1 z-50">
          {/* User Info (for logged in users) */}
          {isLoggedIn && (
            <div className="px-4 py-2 border-b">
              <p className="font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">
                {localStorage.getItem('userRole') || 'User'}
              </p>
            </div>
          )}

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>{isLoggedIn ? 'Logout' : 'Login'}</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isLoggedIn ? 
                  "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" : 
                  "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                } 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;