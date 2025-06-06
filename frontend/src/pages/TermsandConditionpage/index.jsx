import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Breadcrumb from "../../components/Breadcrumb/termscondition";
import TCcontent from "../../components/T&Ccontent/index";
import Footer from "../../components/Footer/index";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
     <Breadcrumb/>
      <TCcontent />
      <Footer />
    </div>
  );
}
