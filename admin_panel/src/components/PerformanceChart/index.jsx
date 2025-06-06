import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const performanceData = [
  { month: "Jan", TasksCompleted: 50, AvgCompletionTime: 5, ProductivityScore: 70 },
  { month: "Feb", TasksCompleted: 75, AvgCompletionTime: 4, ProductivityScore: 75 },
  { month: "Mar", TasksCompleted: 100, AvgCompletionTime: 3.5, ProductivityScore: 80 },
  { month: "Apr", TasksCompleted: 85, AvgCompletionTime: 3, ProductivityScore: 78 },
  { month: "May", TasksCompleted: 120, AvgCompletionTime: 2.8, ProductivityScore: 85 },
];

const PerformanceChart = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg mb-6">
      <h3 className="text-lg font-semibold mb-4 text-center">Team Performance Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="TasksCompleted" stroke="#4CAF50" strokeWidth={2} />
          <Line type="monotone" dataKey="AvgCompletionTime" stroke="#673AB7" strokeWidth={2} />
          <Line type="monotone" dataKey="ProductivityScore" stroke="#009688" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
