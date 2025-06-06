import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/appdev";
import Category from "../../components/Category/appdev";
import Chart from "../../components/Charts/appdev";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";

export default function AppDevPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Chart />
      <Mentors />
      <Testimonial />
      <Footer />
    </div>
  );
}
