// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // ✅ Sample Data (Time-Based)
// const userRegistrationData = {
//   today: [
//     { time: "06:00 AM", users: 5 },
//     { time: "12:00 PM", users: 15 },
//     { time: "06:00 PM", users: 25 },
//     { time: "12:00 AM", users: 10 },
//   ],
//   yesterday: [
//     { time: "06:00 AM", users: 8 },
//     { time: "12:00 PM", users: 18 },
//     { time: "06:00 PM", users: 28 },
//     { time: "12:00 AM", users: 12 },
//   ],
//   last7Days: [
//     { time: "06:00 AM", users: 50 },
//     { time: "12:00 PM", users: 100 },
//     { time: "06:00 PM", users: 150 },
//     { time: "12:00 AM", users: 80 },
//   ],
//   last30Days: [
//     { time: "06:00 AM", users: 200 },
//     { time: "12:00 PM", users: 400 },
//     { time: "06:00 PM", users: 600 },
//     { time: "12:00 AM", users: 350 },
//   ],
// };

// const UserRegistrationChart = () => {
//   const [selectedRange, setSelectedRange] = useState("today");

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-xl">
//       {/* ✅ Improved Heading */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
//            <span className="text-blue-600 text-xl">User Registrations</span> 
//         </h2>

//         {/* ✅ Stylish Dropdown */}
//         <select
//           className="border rounded-lg px-3 py-2 text-gray-700 bg-gray-100 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={selectedRange}
//           onChange={(e) => setSelectedRange(e.target.value)}
//         >
//           <option value="today">📅 Today</option>
//           <option value="yesterday">📆 Yesterday</option>
//           <option value="last7Days">📊 Last 7 Days</option>
//           <option value="last30Days">📈 Last 30 Days</option>
//         </select>
//       </div>

//       {/* ✅ Bar Chart with Time on X-Axis */}
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={userRegistrationData[selectedRange]}>
//           <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//           <XAxis dataKey="time" tick={{ fill: "#4B5563", fontSize: 12 }} label={{ value: "Time", position: "insideBottom", offset: -5 }} />
//           <YAxis tick={{ fill: "#4B5563", fontSize: 12 }} />
//           <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "8px", padding: "10px" }} />
//           <Bar dataKey="users" fill="#3B82F6" barSize={40} radius={[6, 6, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default UserRegistrationChart;




















import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const userRegistrationData = {
  today: [
    { time: "06:00 AM", users: 5 },
    { time: "12:00 PM", users: 15 },
    { time: "06:00 PM", users: 25 },
    { time: "12:00 AM", users: 10 },
  ],
  yesterday: [
    { time: "06:00 AM", users: 8 },
    { time: "12:00 PM", users: 18 },
    { time: "06:00 PM", users: 28 },
    { time: "12:00 AM", users: 12 },
  ],
  last7Days: [
    { time: "06:00 AM", users: 50 },
    { time: "12:00 PM", users: 100 },
    { time: "06:00 PM", users: 150 },
    { time: "12:00 AM", users: 80 },
  ],
  last30Days: [
    { time: "06:00 AM", users: 200 },
    { time: "12:00 PM", users: 400 },
    { time: "06:00 PM", users: 600 },
    { time: "12:00 AM", users: 350 },
  ],
};

const UserRegistrationChart = () => {
  const [selectedRange, setSelectedRange] = useState("today");

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-xl border border-blue-200">
      {/* ✅ Improved Heading */}
      <div className="flex justify-between gap-1 items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-blue-700 text-xl"> User Registrations</span>
        </h2>

        {/* ✅ Stylish Dropdown */}
        <select
          className="border rounded-lg px-1 py-2 text-gray-700 bg-gray-100 shadow-sm cursor-pointer 
            focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-200 transition"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option value="today">📅 Today</option>
          <option value="yesterday">📆 Yesterday</option>
          <option value="last7Days">📊 Last 7 Days</option>
          <option value="last30Days">📈 Last 30 Days</option>
        </select>
      </div>

      {/* ✅ Bar Chart with Time on X-Axis */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={userRegistrationData[selectedRange]}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="time" 
            tick={{ fill: "#1E3A8A", fontSize: 12 }} 
            label={{ value: "Time", position: "insideBottom", offset: -5, fill: "#1E3A8A" }} 
          />
          <YAxis tick={{ fill: "#1E3A8A", fontSize: 12 }} />
          <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "8px", padding: "12px", borderColor: "#2563EB" }} />
          <Bar dataKey="users" fill="url(#colorUv)" barSize={40} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRegistrationChart;

