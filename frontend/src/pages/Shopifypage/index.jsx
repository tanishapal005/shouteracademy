import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero/shopifypage";
import Whyjoinfullsdm from "../../components/Whyjoinfullsdm/shopify";
import Fsdhighlights from "../../components/Fsdhighlights/shopify";
import Fsdmroadmap from "../../components/Fsdmroadmap/shopify";
import Fsdigitalmarketeroverview from "../../components/Fsdigitalmarketeroverview/index";
import Specailist from "../../components/Specialist/shopify"
import ToolsSlider from "../../components/Toolslider/shopifydevleloper";
import Moduleweek from "../../components/Moduleweek/shopify"
import Fsdmfaq from "../../components/Fsdmfaq/shopify";
import Footer from "../../components/Footer/index";

import { useLocation } from "react-router-dom";


export default function ShopifyPage() {
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
      <Specailist />
      <Fsdhighlights />
      <ToolsSlider />
      <Fsdmroadmap />
      <section ref={overview}>
        <Fsdigitalmarketeroverview />
      </section>
      <Moduleweek />
      <Fsdmfaq />
      <Footer />
    </div>
  );
}
