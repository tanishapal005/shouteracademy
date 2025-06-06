import React from "react";
import AdminCards from "../../components/AdminCards"
import AdminTable from "../../components/AdminTable";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const SuperAdmin = () => {
  return (
    <div >
      <div className="w-full min-h-full">


        <Sidebar />


        <Header />
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>
        <div className="lg:ml-[17.5rem]  ">
          <AdminCards />
        
          <AdminTable />
        </div>

      </div>



    </div>
  );
};

export default SuperAdmin;




