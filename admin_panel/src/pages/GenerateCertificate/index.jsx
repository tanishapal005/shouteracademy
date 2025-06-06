import React from "react";
import GenerateCerti from "../../components/GenerateCerti"
import "jspdf-autotable";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const GenerateCertificate = () => {
  
  return (
    <div>
      <Sidebar/>
      <Header/>

      <GenerateCerti/>
    </div>
  );
};

export default GenerateCertificate;
