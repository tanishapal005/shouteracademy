import React from "react";
import { FaTasks, FaUsers, FaClock } from "react-icons/fa";

const StatsOverview = () => {
  const stats = [
    { title: "Total Team Members", value: 25, icon: <FaUsers className="text-blue-500 text-3xl" />, bg: "bg-blue-100", text: "text-blue-700" },
    { title: "Tasks Completed", value: 120, icon: <FaTasks className="text-green-500 text-3xl" />, bg: "bg-green-100", text: "text-green-700" },
    { title: "Avg Task Completion Time", value: "2.8 Hours", icon: <FaClock className="text-purple-500 text-3xl" />, bg: "bg-purple-100", text: "text-purple-700" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className={`p-6 rounded-xl shadow-lg flex items-center space-x-4 ${stat.bg} ${stat.text}`}>
          {stat.icon}
          <div>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
