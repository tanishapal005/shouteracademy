import React from "react";
import teamPhoto from "../../assets/images/Aboutpage/img-1.jpg"; // Adjust the path as needed

const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 sm:px-12 md:px-20 py-12 bg-white">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">What do we do?</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Job-Ready Mentorship Programs</h3>
          <p className="text-gray text-sm md:text-base">
            WsCube Mentorship Programs are designed and developed for Gen-Z career aspirants with
            absolute focus on job-readiness. The programs aim to equip the learners with industry-ready,
            hands-on skills and facilitate a confident career kick-off.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-lg">Project & Scenario based Learning</h3>
          <p className="text-gray text-sm md:text-base">
            WsCube ensures that Aspirants are exposed to real-world Projects & scenario-based problems.
            Our programs are designed to build problem-solving skills.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Together till Last Mile</h3>
          <p className="text-gray text-sm md:text-base">
            We believe our goal is incomplete until our Aspirants land their dream job role. To enable
            the same, a dedicated Pre-Placement Program is curated to sharpen essential skills needed
            to crack the interviews and grab top job opportunities!
          </p>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-full md:w-[500px] h-64 md:h-80 flex justify-center mt-6 md:mt-0">
        <img 
          src={teamPhoto} 
          alt="Team Photo" 
          className="w-full h-full bg-gray-2 rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
