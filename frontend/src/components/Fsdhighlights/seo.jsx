import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const SEOProgramHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">SEO Program Highlights</h2>
        <p className="text-gray text-sm">
          Master Search Engine Optimization strategies to drive organic traffic and boost rankings.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            On-Page & Off-Page SEO
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">On-Page & Off-Page SEO</h1>
            <p className="text-gray text-sm">
              Learn the best practices for optimizing website content, structure, and backlinks to improve search rankings.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Keyword Research & Strategy
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Keyword Research & Strategy</h1>
            <p className="text-gray text-sm">
              Master the art of keyword research to target high-ranking and high-converting search queries.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Technical SEO & Site Performance
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Technical SEO & Site Performance</h1>
            <p className="text-gray text-sm">
              Optimize website speed, mobile-friendliness, and crawlability to enhance SEO performance.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            SEO Analytics & Reporting
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">SEO Analytics & Reporting</h1>
            <p className="text-gray text-sm">
              Use Google Analytics, Search Console, and SEO tools to measure, analyze, and improve website performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOProgramHighlights;