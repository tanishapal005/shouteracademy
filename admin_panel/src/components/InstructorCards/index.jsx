import React from "react";
import { FaChalkboardTeacher, FaBuilding, FaUserSlash, FaBan } from "react-icons/fa";

const InstructorCards = () => {
  const instructorStats = [
    { title: "Total Instructors", value: 120, icon: <FaChalkboardTeacher size={40} />, bg: "bg-blue-100", text: "text-blue-700" },
    { title: "Organization Instructors", value: 80, icon: <FaBuilding size={40} />, bg: "bg-green-100", text: "text-green-700" },
    { title: "Inactive Instructors", value: 25, icon: <FaUserSlash size={40} />, bg: "bg-yellow-100", text: "text-yellow-700" },
    { title: "Banned Instructors", value: 5, icon: <FaBan size={40} />, bg: "bg-red-100", text: "text-red-700" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {instructorStats.map((stat, index) => (
        <div
          key={index}
          className={`p-6 h-40 min-w-[250px] rounded-lg shadow-md flex items-center justify-between ${stat.bg} ${stat.text}`}
        >
          <div>
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
          {stat.icon}
        </div>
      ))}
    </div>
  );
};

export default InstructorCards;
