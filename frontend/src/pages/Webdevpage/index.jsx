import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Charts from "../../components/Charts/webdev";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";
import Home from "../../components/Hero/webdev";
import Category from "../../components/Category/webdev";

export default function WebDevelopmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <Charts />
      <Mentors />
      <Testimonial />
      <Footer />
    </div>
  );
}
