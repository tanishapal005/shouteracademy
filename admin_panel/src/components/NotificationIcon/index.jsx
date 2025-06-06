import React, { useState, useEffect, useRef } from "react";
import { FaBell, FaBook, FaUserGraduate, FaMoneyBillWave } from "react-icons/fa";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const notifications = [
    {
      icon: <FaBook className="text-red-500" />,
      message: "New course added: React Pro",
    },
    {
      icon: <FaUserGraduate className="text-purple-600" />,
      message: "3 new students enrolled",
    },
    {
      icon: <FaMoneyBillWave className="text-yellow-500" />,
      message: "Payment received ₹1200",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none"
      >
        <FaBell className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full animate-ping" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50 border">
          <div className="p-3 font-semibold text-gray-800 border-b border-gray-200">Notifications</div>
          <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
              >
                {notification.icon}
                <span className="text-sm text-gray-700">{notification.message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;


