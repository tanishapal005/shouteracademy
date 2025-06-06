import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar/index";
import Hero from "../../components/Hero/index";
import Category from "../../components/Category/index";
import Clients from "../../components/Clients/index";
import Message from "../../components/Message/index";
import Mentors from "../../components/Mentors/index";
import Testimonial from "../../components/Testimonial/index";
import Footer from "../../components/Footer/index";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Category />
      <Clients />
      <Message />
      <Mentors />
      <Testimonial />
      <Footer />

    </div>
  );
};

export default Home;
