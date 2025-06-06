import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", students: 200 },
  { month: "Feb", students: 400 },
  { month: "Mar", students: 600 },
  { month: "Apr", students: 900 },
  { month: "May", students: 1100 },
  { month: "Jun", students: 1400 },
  { month: "Jul", students: 1800 },
  { month: "Aug", students: 2200 },
  { month: "Sep", students: 2500 },
  { month: "Oct", students: 3000 },
  { month: "Nov", students: 3500 },
  { month: "Dec", students: 4000 },
];

const StudentGrowthChart = () => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg p-6 rounded-2xl w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        📈 Student Growth Chart
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
          <XAxis dataKey="month" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1E293B", borderRadius: "10px", color: "#fff" }}
            labelStyle={{ color: "#facc15" }}
          />
          <Line type="monotone" dataKey="students" stroke="#facc15" strokeWidth={3} dot={{ r: 5, fill: "#facc15" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentGrowthChart;
