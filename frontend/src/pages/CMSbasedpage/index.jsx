import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/cmsbased";
import Category from "../../components/Category/cmsbased";
import Charts from "../../components/Charts/cmsbased";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";

export default function CMSBasedPage() {
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
