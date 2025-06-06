import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import EditInstructor from "../../components/EditInstructor";

const EditInstructorPage = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6 ml-64 mt-16">
          <EditInstructor />
        </div>
      </div>
    </div>
  );
};

export default EditInstructorPage;
