

import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// ✅ Data for Different Time Ranges
const courseDataSets = {
  today: [
    { name: "Web Dev", value: 40 },
    { name: "Data Science", value: 30 },
    { name: "AI & ML", value: 20 },
    { name: "Cyber Security", value: 10 },
  ],
  yesterday: [
    { name: "Web Dev", value: 60 },
    { name: "Data Science", value: 50 },
    { name: "AI & ML", value: 35 },
    { name: "Cyber Security", value: 15 },
  ],
  last7Days: [
    { name: "Web Dev", value: 200 },
    { name: "Data Science", value: 150 },
    { name: "AI & ML", value: 100 },
    { name: "Cyber Security", value: 80 },
  ],
  last30Days: [
    { name: "Web Dev", value: 400 },
    { name: "Data Science", value: 300 },
    { name: "AI & ML", value: 200 },
    { name: "Cyber Security", value: 100 },
  ],
};

// ✅ Colors for Pie Chart
const COLORS = ["#F87171", "#60A5FA", "#FACC15", "#34D399"];

const CourseEnrollmentChart = () => {
  const [selectedRange, setSelectedRange] = useState("today");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-lg rounded-xl border border-blue-200">
      {/* ✅ Heading & Dropdown */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-blue-700">Course Enrollments</span>
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

      {/* ✅ Pie Chart with No Movement on Hover */}
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={courseDataSets[selectedRange]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            labelStyle={{ fill: "#1E3A8A", fontSize: "14px", fontWeight: "bold" }}
            onMouseEnter={(_, index) => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {courseDataSets[selectedRange].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
                stroke={hoveredIndex === index ? "white" : "none"}
                strokeWidth={hoveredIndex === index ? 2 : 0}
              />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "8px", padding: "12px", borderColor: "#2563EB" }} />
          <Legend iconSize={12} layout="horizontal" verticalAlign="bottom" wrapperStyle={{ paddingTop: "10px" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseEnrollmentChart;

