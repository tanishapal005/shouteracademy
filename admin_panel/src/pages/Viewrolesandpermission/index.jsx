import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Viewrolesandpermission from "../../components/Viewrolesandpermission/index"

const ViewPage = () => {
  return (
    <div className="ml-64 mt-16" >
      
      <Header/>
      <Sidebar/>
      <div>
       <Viewrolesandpermission/>
      </div>

    </div>
  );
};

export default ViewPage;
