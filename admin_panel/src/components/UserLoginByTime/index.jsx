import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const userLoginTimeData = {
  "Last 7 Days": [
    { time: "10 AM", logins: 10 },
    { time: "12 PM", logins: 25 },
    { time: "2 PM", logins: 35 },
    { time: "4 PM", logins: 50 }
  ],
  "Last 14 Days": [
    { time: "9 AM", logins: 5 },
    { time: "11 AM", logins: 20 },
    { time: "1 PM", logins: 30 }
  ],
  "Last 30 Days": [
    { time: "8 AM", logins: 3 },
    { time: "10 AM", logins: 12 },
    { time: "12 PM", logins: 28 }
  ],
  "Others": [
    { time: "7 AM", logins: 2 },
    { time: "9 AM", logins: 8 },
    { time: "11 AM", logins: 15 }
  ]
};

export const UserLoginByTime = () => {
  const [selectedTab, setSelectedTab] = useState("Last 7 Days");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-300 text-gray-900">
      <h2 className="text-xl font-semibold text-gray-700 mb-4"> User Logins (By Time)</h2>

      {/* Radio Buttons */}
      <div className="flex space-x-4 mb-4">
        {Object.keys(userLoginTimeData).map((tab) => (
          <label key={tab} className="flex items-center space-x-2">
            <input
              type="radio"
              name="time-filter"
              checked={selectedTab === tab}
              onChange={() => setSelectedTab(tab)}
              className="hidden"
            />
            <span
              className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all ${
                selectedTab === tab
                  ? "bg-green-600 text-white shadow-md"
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
        <LineChart data={userLoginTimeData[selectedTab]}>
          <XAxis dataKey="time" stroke="#555" />
          <YAxis stroke="#555" />
          <Tooltip />
          <Line type="monotone" dataKey="logins" stroke="#16A34A" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      {/* Years Mentioned */}
      <p className="text-center text-gray-500 mt-2">2023 - 2025</p>
    </div>
  );
};

