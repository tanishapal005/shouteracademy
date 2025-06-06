// Students.js
import React from "react";
// import TotalStudentsCard from "./TotalStudentsCard";

import StudentCard from "../../components/StudentCard";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Students = () => {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen overflow-hidden mt-14">

      <Sidebar/>
      <Header/>
      
      
      <StudentCard />
      
    </div>
  );
};
export default Students;
