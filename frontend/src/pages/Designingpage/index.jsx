import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/design";
import Category from "../../components/Category/design";
import Charts from "../../components/Charts/design";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";

export default function DesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Charts />
      <Mentors />
      <Testimonial />
      <Footer />
    </div>
  );
}
