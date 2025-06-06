import React from "react";
import { FaDollarSign, FaChartLine, FaTasks, FaClipboardCheck } from "react-icons/fa";

const RevenueTasks = () => {
  const cards = [
    { title: "Total Revenue", count: "$12,500", icon: <FaDollarSign />, bgColor: "bg-orange-100", textColor: "text-orange-600", iconBg: "bg-orange-200" },
    { title: "Monthly Growth", count: "15%", icon: <FaChartLine />, bgColor: "bg-gray-100", textColor: "text-gray-600", iconBg: "bg-gray-200" },
    { title: "Pending Tasks", count: 7, icon: <FaTasks />, bgColor: "bg-yellow-100", textColor: "text-yellow-600", iconBg: "bg-yellow-200" },
    { title: "Completed Tasks", count: 18, icon: <FaClipboardCheck />, bgColor: "bg-green-100", textColor: "text-green-600", iconBg: "bg-green-200" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mt-8 mb-4">Revenue & Tasks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-md flex flex-col items-center ${card.bgColor}`}>
            <div className={`mb-4 ${card.iconBg} p-3 rounded-full`}>
              <span className={`${card.textColor} text-2xl`}>{card.icon}</span>
            </div>
            <h3 className={`text-lg font-semibold ${card.textColor}`}>{card.title}</h3>
            <p className={`text-xl font-bold ${card.textColor}`}>{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueTasks;

 