import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero/course";
import Courselearning from "../../components/Courselearning/index";
import Registorclass from "../../components/Registorclass/index";
import Upcomingclasses from "../../components/Upcomingclasses/index";

export default function CoursePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Courselearning />
      <Registorclass />
      <Upcomingclasses />
      <Footer />
    </div>
  );
}
