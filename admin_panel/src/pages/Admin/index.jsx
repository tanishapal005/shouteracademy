import React from "react";

import InstructorTable from "../../components/InstructorTable";
import InstructorCards from "../../components/InstructorCards"; // ✅ Import InstructorCards
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const Admin = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ml-64 mt-16">
      {/* Cards Section */}
      <Sidebar />
      <Header />
      <div >
        <InstructorCards />
      </div>
      <InstructorTable />
    </div>
  );
};

export default Admin;



