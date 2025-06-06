import React from "react";
import PayHistory from "../../components/PayHistory"
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const PaymentHistory = () => {

  return (
    <div className="ml-64 mt-16" >
      <Sidebar/>
      <Header/>
      <div>
        <PayHistory/>
      </div>
    
    </div>
  );
};

export default PaymentHistory;