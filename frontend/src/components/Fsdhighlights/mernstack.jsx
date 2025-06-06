import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const MernStackHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">MERN Stack Development Course Highlights</h2>
        <p className="text-gray text-sm">
          Explore what this online MERN stack course has to offer.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Hands-on MERN Projects
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Hands-on MERN Projects</h1>
            <p className="text-gray text-sm">
              Build real-world applications using MongoDB, Express.js, React, and Node.js to master the full-stack workflow.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Job-Ready Training
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Job-Ready Training</h1>
            <p className="text-gray text-sm">
              Learn industry-standard best practices, optimize performance, and prepare for tech interviews with expert guidance.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            API & Database Mastery
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">API & Database Mastery</h1>
            <p className="text-gray text-sm">
              Build RESTful APIs with Express.js, integrate with MongoDB, and develop scalable and secure backend solutions.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            React & Frontend Excellence
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">React & Frontend Excellence</h1>
            <p className="text-gray text-sm">
              Master front-end development with React, Redux, and component-based architecture for seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernStackHighlights;
