import React, { useEffect,useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/videoeditingpage";
import Whyjoinfsdm from "../../components/Whyjoinfullsdm/videoediting"
import Fsdmhighlights from "../../components/Fsdhighlights/videoediting";
import Fsdmroadmap from "../../components/Fsdmroadmap/videoediting"
import Specailist from "../../components/Specialist/videodesigner"
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview"
import ToolsSlider from "../../components/Toolslider/videoeditingprogram";
import Moduleweek from "../../components/Moduleweek/videoediting";
import Fsdmfaq from "../../components/Fsdmfaq/videoedting"
import Footer from "../../components/Footer";

import { useLocation } from "react-router-dom";

const SEO = () => {
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
      <Specailist/>
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

export default SEO;
