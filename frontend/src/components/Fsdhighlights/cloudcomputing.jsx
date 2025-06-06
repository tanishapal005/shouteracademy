import React from "react";

import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const CloudComputingHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">Cloud Computing Course Highlights</h2>
        <p className="text-white text-sm">
          Learn to design, deploy, and manage cloud solutions using leading cloud platforms.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 - AWS & Azure Fundamentals */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            AWS & Azure Basics
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">AWS & Azure Fundamentals</h1>
            <p className="text-gray text-sm">
              Understand cloud computing concepts, AWS services, and Azure infrastructure.
            </p>
          </div>
        </div>

        {/* Row 2 - Cloud Security & Compliance */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Cloud Security
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Security & Compliance</h1>
            <p className="text-gray text-sm">
              Learn best practices for securing cloud environments and ensuring compliance.
            </p>
          </div>
        </div>

        {/* Row 3 - Kubernetes & Docker */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Cloud DevOps
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Kubernetes & Docker</h1>
            <p className="text-gray text-sm">
              Deploy and manage containerized applications using Kubernetes and Docker.
            </p>
          </div>
        </div>

        {/* Row 4 - Serverless Computing */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Serverless Architecture
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Serverless Computing</h1>
            <p className="text-gray text-sm">
              Build and deploy serverless applications using AWS Lambda and Google Cloud Functions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudComputingHighlights;
