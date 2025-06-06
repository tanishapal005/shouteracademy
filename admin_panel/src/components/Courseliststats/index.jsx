import React from "react";
import { FaFileAlt, FaEye, FaHistory, FaDollarSign } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaFileAlt />, label: "Total Courses", value: 8, bgColor: "bg-blue-100", textColor: "text-blue-600", iconBg: "bg-blue-200" },
  { id: 2, icon: <FaEye />, label: "Total Completed Courses", value: 0, bgColor: "bg-green-100", textColor: "text-green-600", iconBg: "bg-green-200" },
  { id: 3, icon: <FaHistory />, label: "Ongoing Courses", value: "20", bgColor: "bg-yellow-100", textColor: "text-yellow-600", iconBg: "bg-yellow-200" },
  { id: 4, icon: <FaDollarSign />, label: "Total Sales", value: 19, bgColor: "bg-purple-100", textColor: "text-purple-600", iconBg: "bg-purple-200" },
];

const DashboardStats = () => {
  return (
    <div className="flex space-x-4 p-4">
      {stats.map((stat) => (
        <div key={stat.id} className={`flex items-center p-4 rounded-lg shadow-md w-56 ${stat.bgColor}`}>
          {/* Icon */}
          <div className={`p-2 ${stat.iconBg} flex items-center justify-center`}>
            <span className={`${stat.textColor} text-4xl`}>{stat.icon}</span>
          </div>

          {/* Title & Value */}
          <div className="ml-3 mt-6">
            <p className={`text-sm font-medium ${stat.textColor}`}>{stat.label}</p>
            <p className="text-lg mt-[-10px] font-bold text-black">{stat.value}</p> {/* Value appears below the title */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
