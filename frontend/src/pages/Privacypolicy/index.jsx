import React, { useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb/policy"; 
 

import Privacypolicypage from "../../components/Privacypolicypage/index"
import Footer from "../../components/Footer";

const SEO = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
 <Breadcrumb/>
     <Privacypolicypage/>
      <Footer />
    </div>
  );
};

export default SEO;
