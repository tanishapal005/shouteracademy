import React from "react";
import { FaUser, FaEye, FaUsers } from "react-icons/fa";

const UserAnalytics = () => {
  const cards = [
    {
      title: "Total Users",
      count: 1500,
      icon: <FaUser />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      iconBg: "bg-blue-200",
    },
    {
      title: "Active Users",
      count: 850,
      icon: <FaEye />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      iconBg: "bg-green-200",
    },
    {
      title: "New Signups",
      count: 120,
      icon: <FaUsers />,
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      iconBg: "bg-yellow-200",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-start">
        User Activity & Analytics
      </h2>

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

export default UserAnalytics;


