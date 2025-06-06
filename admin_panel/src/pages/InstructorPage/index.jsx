// src/pages/InstructorPage.jsx
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Instructor from '../../components/Instructor'; // Capital I & correct path

const InstructorPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <Instructor />
        </div>
      </div>
    </div>
  );
};

export default InstructorPage;
