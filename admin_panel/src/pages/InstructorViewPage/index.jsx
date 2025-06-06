import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import InstructorView from '../../components/InstructorViewPage';

const InstructorViewPages = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          <InstructorView/> {/* Ye yahan nested route inject hoga */}
        </div>
      </div>
    </div>
  );
};

export default InstructorViewPages;
