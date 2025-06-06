import React from "react";
import image from "../../assets/images/Aboutpage/img-1.jpg"; // Adjust path as needed

const WhatYouLearn = () => {
  return (
    <div className="flex flex-col w-full items-center bg-white py-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        What you’ll Learn?
      </h2>
      <p className="text-gray text-center max-w-2xl mb-6">
        WsCube is a Hybrid Upskilling Edtech, develops and disseminates
        Tech-powered Career Acceleration Programs and Job Oriented Professional
        Courses curated for Aspirants of Bharat, readying them for Global workforce opportunities.
      </p>

      {/* Main Container */}
      <div className="w-full max-w-8xl bg-white shadow-lg rounded-2xl border border-gray p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="overflow-hidden rounded-xl">
            <img src={image} alt="Learning" className="w-full rounded-xl" />
          </div>

          {/* Content Sections */}
          <div className="space-y-4">
            {/* Red Box */}
            <div className="bg-red-2 text-white h-44 p-4 rounded-xl relative">
              <h3 className="text-lg font-semibold">Upskilling Bharat</h3>
              <p className="text-sm">
                With its Tech-enabled hybrid delivery environment, the Company
                aims to disrupt Career Readiness at scale for over 100 Million
                Job Aspirants in deep demographic of "Bharat".
              </p>
              <div className="absolute top-0 right-0 w-12 h-12 bg-red rounded-tr-xl"></div>
            </div>
  
            {/* Black Box */}
            <div className="bg-black text-white h-44 p-4 rounded-xl relative">
              <h3 className="text-lg font-semibold">Bridging Opportunity Gap</h3>
              <p className="text-sm">
                Our career mentoring programs are tailored to cater specifically
                to learners from India's tier 2, 3, and 4 cities. We aim to help
                them unlock their true potential regardless of their
                geographical location or language proficiency.
              </p>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gray-5 rounded-tr-xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Red Border */}
        <div className="w-full border-t-[2px] border-red rounded-t-[50px] mt-6"></div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
