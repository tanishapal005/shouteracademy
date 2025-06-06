import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const UIUXCourseHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">UI/UX Design Course Highlights</h2>
        <p className="text-gray text-sm">
          Explore what this online UI/UX design course has to offer.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Master UI/UX Principles
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Master UI/UX Principles</h1>
            <p className="text-gray text-sm">
              Learn the core principles of user interface and user experience design, focusing on usability, accessibility, and aesthetics.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Prototyping & Wireframing
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Prototyping & Wireframing</h1>
            <p className="text-gray text-sm">
              Gain hands-on experience in creating wireframes and prototypes using industry-standard tools like Figma, Adobe XD, and Sketch.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            User Research & Testing
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">User Research & Testing</h1>
            <p className="text-gray text-sm">
              Understand user behavior through research and usability testing to create user-centric design solutions.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            UI Design & Interaction
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">UI Design & Interaction</h1>
            <p className="text-gray text-sm">
              Learn to craft visually appealing and interactive UI elements to enhance user engagement and experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIUXCourseHighlights;