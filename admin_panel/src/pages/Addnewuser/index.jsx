import React from "react";
import Addnewuser from "../../components/Addnewuser"; // This is the Addrole component
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const AddrolePage = () => {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        <Header />
      
    <Addnewuser/>
      
      </div>
    </div>
  );
};

export default AddrolePage;