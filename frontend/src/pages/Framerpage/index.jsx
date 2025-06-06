import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/framerpage";
import Whyjoinfullsdm from "../../components/Whyjoinfullsdm/framer";
import Fsdhighlights from "../../components/Fsdhighlights/framer";
import Fsdmroadmap from "../../components/Fsdmroadmap/framer";
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview/index";
import ToolsSlider from "../../components/Toolslider/framer";
import Specialist from "../../components/Specialist/framer"
import Moduleweek from "../../components/Moduleweek/framer"
import Fsdmfaq from "../../components/Fsdmfaq/framer";
import Footer from "../../components/Footer/index";

import { useLocation } from "react-router-dom";

export default function FramerPage() {
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
      <Moduleweek/> 
      <Fsdmfaq />
      <Footer />
    </div>
  );
}
