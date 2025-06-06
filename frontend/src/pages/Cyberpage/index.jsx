import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/cyber";
import Category from "../../components/Category/cyber";
import Chart from "../../components/Charts/cyber";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";

export default function CyberSecurityPage() {
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
