import React from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import CategoryPage from "../../components/CategoryPage";

const Course = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />

        {/* Course Stats and Course List */}
        <div className="p-6">
          <CategoryPage/>
        </div>
      </div>
    </div>
  );
};

export default Course;
