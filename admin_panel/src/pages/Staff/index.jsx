import React from "react";
import SearchBar from "../../components/SearchBar";
import RoleDropdown from "../../components/RoleDropdown";
import StaffTable from "../../components/StaffTable";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Staff = () => {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen mt-14">
        <Sidebar/>
       <Header/>
      {/* ✅ Only Calling Components */}
      <div className="flex items-center space-x-4 mb-4">
        <SearchBar />
        <RoleDropdown />
      </div>

      <StaffTable />
    </div>
  );
};

export default Staff;




