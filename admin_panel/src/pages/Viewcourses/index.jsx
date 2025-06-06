import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ViewCourses from "../../components/Viewcourses";
import Viewtablecourses from "../../components/Viewtablecourses"

const ViewPage = () => {
  return (
    <div className="ml-64 mt-16" >
      
      <Header/>
      <Sidebar/>
      <div>
       <ViewCourses/>
       <Viewtablecourses/>
      </div>

    </div>
  );
};

export default ViewPage;