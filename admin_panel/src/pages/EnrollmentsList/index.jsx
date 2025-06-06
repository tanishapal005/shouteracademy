import React from "react";
import AllEnrollmentsLists from "../../components/AllEndrollments";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";


const EnrollmentsList = () => {

  return (
    <div className="ml-64 mt-16">
      <Sidebar/>
      <Header/>
      <div>
        <AllEnrollmentsLists/>
      </div>
    
    </div>
  );
};

export default EnrollmentsList;
