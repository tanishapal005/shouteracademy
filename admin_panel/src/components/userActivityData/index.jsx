// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// const userActivityData = {
//   today: [
//     { time: "06:00 AM", users: 30 },
//     { time: "09:00 AM", users: 40 },
//     { time: "12:00 PM", users: 50 },
//     { time: "03:00 PM", users: 60 },
//     { time: "06:00 PM", users: 70 },
//     { time: "09:00 PM", users: 55 },
//     { time: "12:00 AM", users: 40 },
//   ],
//   yesterday: [
//     { time: "06:00 AM", users: 35 },
//     { time: "09:00 AM", users: 45 },
//     { time: "12:00 PM", users: 55 },
//     { time: "03:00 PM", users: 65 },
//     { time: "06:00 PM", users: 75 },
//     { time: "09:00 PM", users: 60 },
//     { time: "12:00 AM", users: 45 },
//   ],
//   last7Days: [
//     { time: "06:00 AM", users: 300 },
//     { time: "09:00 AM", users: 400 },
//     { time: "12:00 PM", users: 500 },
//     { time: "03:00 PM", users: 600 },
//     { time: "06:00 PM", users: 700 },
//     { time: "09:00 PM", users: 550 },
//     { time: "12:00 AM", users: 400 },
//   ],
//   last30Days: [
//     { time: "06:00 AM", users: 1200 },
//     { time: "09:00 AM", users: 1600 },
//     { time: "12:00 PM", users: 2000 },
//     { time: "03:00 PM", users: 2400 },
//     { time: "06:00 PM", users: 2800 },
//     { time: "09:00 PM", users: 2200 },
//     { time: "12:00 AM", users: 1600 },
//   ],
// };

// const UserActivityChart = () => {
//   const [selectedRange, setSelectedRange] = useState("today");

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-xl">
//       {/* ✅ Improved Heading */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//            <span className="text-blue-600 text-xl">User Activity</span>
//         </h2>
//         <select
//           className="border rounded-lg px-3 py-2 text-gray-700 bg-gray-100 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={selectedRange}
//           onChange={(e) => setSelectedRange(e.target.value)}
//         >
//           <option value="today">📅 Today</option>
//           <option value="yesterday">📅 Yesterday</option>
//           <option value="last7Days">📆 Last 7 Days</option>
//           <option value="last30Days">📆 Last 30 Days</option>
//         </select>
//       </div>

//       {/* ✅ Chart with Improved UI */}
//       <ResponsiveContainer width="100%" height={350}>
//         <LineChart data={userActivityData[selectedRange]}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//           <XAxis dataKey="time" tick={{ fill: "#4B5563", fontSize: 12 }} />
//           <YAxis tick={{ fill: "#4B5563", fontSize: 12 }} />
//           <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "8px", padding: "10px" }} />
//           <Line type="monotone" dataKey="users" stroke="#6366F1" strokeWidth={3} dot={{ r: 4, fill: "#6366F1" }} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default UserActivityChart;













import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const userActivityData = {
  today: [
    { time: "06:00 AM", users: 30 },
    { time: "09:00 AM", users: 40 },
    { time: "12:00 PM", users: 50 },
    { time: "03:00 PM", users: 60 },
    { time: "06:00 PM", users: 70 },
    { time: "09:00 PM", users: 55 },
    { time: "12:00 AM", users: 40 },
  ],
  yesterday: [
    { time: "06:00 AM", users: 35 },
    { time: "09:00 AM", users: 45 },
    { time: "12:00 PM", users: 55 },
    { time: "03:00 PM", users: 65 },
    { time: "06:00 PM", users: 75 },
    { time: "09:00 PM", users: 60 },
    { time: "12:00 AM", users: 45 },
  ],
  last7Days: [
    { time: "06:00 AM", users: 300 },
    { time: "09:00 AM", users: 400 },
    { time: "12:00 PM", users: 500 },
    { time: "03:00 PM", users: 600 },
    { time: "06:00 PM", users: 700 },
    { time: "09:00 PM", users: 550 },
    { time: "12:00 AM", users: 400 },
  ],
  last30Days: [
    { time: "06:00 AM", users: 1200 },
    { time: "09:00 AM", users: 1600 },
    { time: "12:00 PM", users: 2000 },
    { time: "03:00 PM", users: 2400 },
    { time: "06:00 PM", users: 2800 },
    { time: "09:00 PM", users: 2200 },
    { time: "12:00 AM", users: 1600 },
  ],
};

const UserActivityChart = () => {
  const [selectedRange, setSelectedRange] = useState("today");

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-2xl rounded-xl text-white">
      {/* ✅ Improved Heading */}
      <div className="flex justify-between gap-1 items-center mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
           <span className="text-blue-400">User Activity</span>
        </h2>
        <select
          className="border rounded-lg px-1 py-2 text-gray-200 bg-gray-700 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="today">📅 Today</option>
          <option value="yesterday">📅 Yesterday</option>
          <option value="last7Days">📆 Last 7 Days</option>
          <option value="last30Days">📆 Last 30 Days</option>
        </select>
      </div>

      {/* ✅ Chart with Cool UI */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={userActivityData[selectedRange]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="time" tick={{ fill: "#D1D5DB", fontSize: 12 }} />
          <YAxis tick={{ fill: "#D1D5DB", fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1F2937", color: "#F9FAFB", borderRadius: "8px", padding: "10px", border: "none" }} 
          />
          <Line 
            type="monotone" 
            dataKey="users" 
            stroke="#22D3EE" 
            strokeWidth={3} 
            dot={{ r: 5, fill: "#22D3EE", strokeWidth: 2, stroke: "#1E3A8A" }} 
            activeDot={{ r: 8, fill: "#FACC15" }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserActivityChart;

