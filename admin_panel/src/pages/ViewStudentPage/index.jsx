// src/layouts/DashboardLayout.jsx
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


import StudentViewPage from "../../components/StudentViewPage";

const ViewStudentPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1">
        <Header />
    <StudentViewPage/>
    
      </div>
    </div>
  );
};

export default ViewStudentPage;
