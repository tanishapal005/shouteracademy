import React from "react";
import logo from "../../assets/images/Navbar/logo.png"; // Adjust path if needed
import bgImage from "../../assets/images/Hero/bgimg.png"; // Import your background image

const HeroSection = () => {
  return (
    <div
      className="w-full h-96 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Set the background dynamically
    >
      {/* Logo Section */}
      <div className="relative mb-4">
        <img src={logo} alt="Shouters Academy" className="w-40 sm:w-48 md:w-56" />
      </div>

      {/* Text Section */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-black leading-snug">
        Building digital <br />
        products, <span className="whitespace-nowrap">brands,</span> and <br />
        experience.
      </h1>
    </div>
  );
};

export default HeroSection;
