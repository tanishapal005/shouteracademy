import React from "react";
import { FaUsers, FaChartLine, FaDollarSign, FaCheckCircle } from "react-icons/fa";

const AdminCards = () => {
  const stats = [
    { title: "Total Users", value: 1200, icon: <FaUsers className="text-blue-500" /> },
    { title: "Active Users", value: 870, icon: <FaCheckCircle className="text-green-500" /> },
    { title: "Monthly Revenue", value: "$24,580", icon: <FaDollarSign className="text-yellow-500" /> },
    { title: "Growth Rate", value: "8.2%", icon: <FaChartLine className="text-purple-500" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="text-4xl">{stat.icon}</div>
          <div>
            <p className="text-gray-500">{stat.title}</p>
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCards;
