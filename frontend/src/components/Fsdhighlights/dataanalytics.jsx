import React from "react";

import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";



const DataAnalyticsHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">Data Analytics Course Highlights</h2>
        <p className="text-white text-sm">
          Learn to analyze and interpret data, create reports, and make data-driven decisions.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 - Data Analysis with Excel & SQL */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Excel & SQL Mastery
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Data Analysis with Excel & SQL</h1>
            <p className="text-gray text-sm">
              Learn how to manipulate, clean, and analyze datasets using Excel and SQL queries.
            </p>
          </div>
        </div>

        {/* Row 2 - Data Visualization with Power BI & Tableau */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Data Visualization
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Power BI & Tableau</h1>
            <p className="text-gray text-sm">
              Create interactive dashboards and reports using Power BI and Tableau.
            </p>
          </div>
        </div>

        {/* Row 3 - Python for Data Analysis */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Python for Data Science
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Python for Data Analysis</h1>
            <p className="text-gray text-sm">
              Use Python libraries like Pandas, NumPy, and Matplotlib to analyze and visualize data.
            </p>
          </div>
        </div>

        {/* Row 4 - Machine Learning Basics */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Machine Learning Basics
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Machine Learning Fundamentals</h1>
            <p className="text-gray text-sm">
              Get an introduction to machine learning concepts and predictive analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsHighlights;
