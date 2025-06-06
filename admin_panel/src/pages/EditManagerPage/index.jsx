// src/pages/EditManagerPage.js
import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import EditManager from "../../components/EditManagerPage";

const EditManagerPage = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Left sidebar */}
      <div className="flex-1 flex flex-col">
        <Header /> {/* Top header */}
        <main className="p-6 bg-gray-100 min-h-screen">
          <EditManager />
        </main>
      </div>
    </div>
  );
};

export default EditManagerPage;
