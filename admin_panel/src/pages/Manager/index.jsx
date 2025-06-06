import React from "react";
import StatsOverview from "../../components/StatsOverview";
import PerformanceChart from "../../components/PerformanceChart";
import ManagerTable from "../../components/ManagerTable";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const ManagerDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ml-64 mt-16">
      <Sidebar/>
      <Header/>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Manager Dashboard</h2>
      <StatsOverview />
      <PerformanceChart />
      <ManagerTable />
    </div>
  );
};

export default ManagerDashboard;

