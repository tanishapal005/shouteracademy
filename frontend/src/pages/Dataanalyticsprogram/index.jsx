import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/dataanalyticspage";
import Whyjoinfsdm from "../../components/Whyjoinfullsdm/dataanalytics"
import Fsdmhighlights from "../../components/Fsdhighlights/dataanalytics";
import Fsdmroadmap from "../../components/Fsdmroadmap/dataanalytics"
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview/index"
import Specialist from "../../components/Specialist/datascience"
import ToolsSlider from "../../components/Toolslider/dataanlaytics";
import Moduleweek from "../../components/Moduleweek/dataanalytics";
import Fsdmfaq from "../../components/Fsdmfaq/dataanalytics"
import Footer from "../../components/Footer";

import { useLocation } from "react-router-dom";

const Fsdigitalmarketer = () => {
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

export default Fsdigitalmarketer;
