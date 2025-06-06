import React, { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb/about";
import Footer from "../../components/Footer";
import Storysection from "../../components/Storysection/index";
import Visionsection from "../../components/Visionsection/index";
import AboutOverview from "../../components/AboutOverview/index";
import Message from "../../components/Message/index";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <Storysection />
      <Visionsection />
      <AboutOverview />
      <Message />
      <Footer />
    </div>
  );
}