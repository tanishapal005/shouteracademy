import React, { useState } from "react";
import image from "../../assets/images/Course/registorimg.webp";
import bgimg from "../../assets/images/Hero/bgimg.webp";

const WhyJoinMasterclass = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src={bgimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center h-auto lg:h-[555px] justify-between w-full max-w-6xl mx-auto p-6 space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
            Why join this <br className="hidden sm:block" /> Masterclass
          </h2>
          <p className="text-gray mt-4 text-base sm:text-lg leading-relaxed">
            Join this masterclass to understand the importance of Meta Ads & to master
            industry-ready tips for building a high-paying career in Digital Marketing.
            Whether you’re a student, business leader, tech enthusiast, or seasoned
            professional, this session delivers invaluable insights and strategies to
            accelerate your marketing journey and grow your expertise.
          </p>
          <button onClick={togglePopup} className="mt-6 bg-red hover:bg-buttonred text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg">
            Register Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-2/3 lg:w-1/3 bg-white p-4 rounded-lg shadow-xl border border-gray relative overflow-hidden">
          <img src={image} alt="Expert Guidance" className="w-full h-auto rounded-md shadow-md" />
          <div className="mt-3 text-center lg:text-left">
            <h3 className="text-lg font-bold text-black">Expert Guidance</h3>
            <p className="text-gray text-sm mt-1">
              Gain proven strategies, insider tips, & techniques to master digital marketing.
            </p>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-md z-50" onClick={togglePopup}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-600 hover:text-black">&times;</button>
            <h2 className="text-xl font-bold mb-4">Register for the Masterclass</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="border p-2 rounded-md" required />
              <input type="email" placeholder="Email Address" className="border p-2 rounded-md" required />
              <input type="tel" placeholder="Phone Number" className="border p-2 rounded-md" required />
              <button type="submit" className="bg-red text-white px-4 py-2 rounded-md font-semibold">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyJoinMasterclass;