

import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const userLoginData = {
  "Last 7 Days": [
    { date: "24 Mar", logins: 30 },
    { date: "25 Mar", logins: 45 },
    { date: "26 Mar", logins: 60 }
  ],
  "Last 14 Days": [
    { date: "20 Mar", logins: 20 },
    { date: "21 Mar", logins: 35 },
    { date: "22 Mar", logins: 40 }
  ],
  "Last 30 Days": [
    { date: "5 Mar", logins: 15 },
    { date: "10 Mar", logins: 25 },
    { date: "15 Mar", logins: 35 }
  ],
  "Others": [
    { date: "1 Jan", logins: 5 },
    { date: "1 Feb", logins: 10 },
    { date: "1 Mar", logins: 20 }
  ]
};

export const UserLoginByDate = () => {
  const [selectedTab, setSelectedTab] = useState("Last 7 Days");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-300 text-gray-900">
      <h2 className="text-xl font-semibold text-gray-700 mb-4"> User Logins (By Date)</h2>

      {/* Radio Buttons */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(userLoginData).map((tab) => (
          <label key={tab} className="flex items-center space-x-2">
            <input
              type="radio"
              name="date-filter"
              checked={selectedTab === tab}
              onChange={() => setSelectedTab(tab)}
              className="hidden"
            />
            <span
              className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all ${
                selectedTab === tab
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </span>
          </label>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={userLoginData[selectedTab]}>
          <XAxis dataKey="date" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip />
          <Line type="monotone" dataKey="logins" stroke="#2563EB" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      {/* Years Mentioned */}
      <p className="text-center text-gray-500 mt-2">2023 - 2025</p>
    </div>
  );
};

