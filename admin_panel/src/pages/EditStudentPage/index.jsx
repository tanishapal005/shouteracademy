import React from "react";
import EditStudent from "../../components/EditStudent";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const EditStudentPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <EditStudent />
      </div>
    </div>
  );
};

export default EditStudentPage;
