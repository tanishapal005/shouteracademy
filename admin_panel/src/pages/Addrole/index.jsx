import React from "react";
import Addrole from "../../components/Addrole"; // This is the Addrole component
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
      
          <Addrole />
      
      </div>
    </div>
  );
};

export default AddrolePage;