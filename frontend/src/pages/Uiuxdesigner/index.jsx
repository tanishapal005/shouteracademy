import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/uiuxdesignerpage";
import Whyjoinfsdm from "../../components/Whyjoinfullsdm/uiuxdeisgner"
import Fsdmhighlights from "../../components/Fsdhighlights/uiuxdesigner";
import Fsdmroadmap from "../../components/Fsdmroadmap/uiuxdesigner"
import Specialist from "../../components/Specialist/uiuxdesigner"
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview"
import ToolsSlider from "../../components/Toolslider/uiuxdesigner";
import Moduleweek from "../../components/Moduleweek/uiuxdesigner";
import Fsdmfaq from "../../components/Fsdmfaq/uiuxdesigner"
import Footer from "../../components/Footer";

import { useLocation } from "react-router-dom";

const Performancemarketer = () => {
  const location = useLocation();
    // Refs for different sections
    const overview = useRef(null);
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const section = params.get("section");
  
      const sectionRefs = {
        overview: overview,
      };
  
      if (sectionRefs[section]?.current) {
        setTimeout(() => {
          sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
        }, 100); // Adding a short delay
      }
    }, [location.search]); // ✅ Only track query params change
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Whyjoinfsdm />
      <Specialist/>
      <Fsdmhighlights/>
      <ToolsSlider/>
      <Fsdmroadmap/>
      <section ref={overview}>
        <Fsdigitalmarketeroverview />
      </section>
      <Moduleweek/>
      <Fsdmfaq/>
      <Footer />
    </div>
  );
};

export default Performancemarketer;
