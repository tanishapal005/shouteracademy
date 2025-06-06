// src/pages/InstructorPage/InstructorPage.jsx

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import InstructorViewPage from "../../components/InstructorViewPage";

const InstructorPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="p-4 overflow-auto">
          <InstructorViewPage />
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
