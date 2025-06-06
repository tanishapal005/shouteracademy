import React from "react";
import ViewAdmin from "../../components/ViewAdmin"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";


const ViewAdminPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4 bg-gray-100">
          <ViewAdmin />
        </main>
       
      </div>
    </div>
  );
};

export default ViewAdminPage;
