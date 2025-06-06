import React from "react";
import {
  FaBook,
  FaGraduationCap,
  FaClipboardList,
} from "react-icons/fa";

const CoursesOverview = () => {
  const cards = [
    {
      title: "Total Courses",
      count: 24,
      icon: <FaBook />,
      bgColor: "bg-pink-100",
      textColor: "text-pink-600",
      iconBg: "bg-pink-200",
    },
    {
      title: "Close Courses",
      count: 12,
      icon: <FaGraduationCap />,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      iconBg: "bg-indigo-200",
    },
    {
      title: "Upcoming Courses",
      count: 4,
      icon: <FaClipboardList />,
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
      iconBg: "bg-teal-200",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-start">Courses Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow-md flex flex-col items-center ${card.bgColor}`}
          >
            <div className={`mb-2 ${card.iconBg} p-2 rounded-full`}>
              <span className={`${card.textColor} text-xl`}>{card.icon}</span>
            </div>
            <h3 className={`text-base font-medium ${card.textColor}`}>
              {card.title}
            </h3>
            <p className={`text-lg font-bold ${card.textColor}`}>
              {card.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;
