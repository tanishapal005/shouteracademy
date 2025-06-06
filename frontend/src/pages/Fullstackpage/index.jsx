import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/fswebdevpage";
import Whyjoinfullsdm from "../../components/Whyjoinfullsdm/fswebdev";
import Fsdhighlights from "../../components/Fsdhighlights/fswebdev";
import Fsdmroadmap from "../../components/Fsdmroadmap/fswebdev";
import Specialist from "../../components/Specialist/fullstack";
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview/index";
import ToolsSlider from "../../components/Toolslider/fullstackdeveloper";
import Modulemeet from "../../components/Moduleweek/fullstackdeveloper"

import Fsdmfaq from "../../components/Fsdmfaq/fswebdev";
import Footer from "../../components/Footer/index";


import { useLocation } from "react-router-dom";

export default function FullStackWebDevPage() {
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      
      <Whyjoinfullsdm />
      <Specialist/>
      <Fsdhighlights />
      <ToolsSlider/>
      <Fsdmroadmap />
      <section ref={overview}>
        <Fsdigitalmarketeroverview />
      </section>
      <Modulemeet/>
      <Fsdmfaq />
      <Footer />
    </div>
  );
}
