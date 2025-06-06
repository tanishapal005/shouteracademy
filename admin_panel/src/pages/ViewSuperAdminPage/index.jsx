import React from "react";
import ViewPages from "../../components/ViewPages"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";



const ViewPage = () => {
  return (
    <div className="ml-64 mt-16" >
      
      <Header/>
      <Sidebar/>
      <div>
        <ViewPages/> 
      </div>
 
    </div>
  );
};

export default ViewPage;


