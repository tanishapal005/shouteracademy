import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const IOSDevelopmentHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">iOS Development Course Highlights</h2>
        <p className="text-gray text-sm">
          Learn Swift and build professional iOS applications with real-world projects.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 - Swift Programming */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Master Swift Programming
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Swift Programming</h1>
            <p className="text-gray text-sm">
              Learn the fundamentals of Swift, Apple's powerful programming language for iOS development.
            </p>
          </div>
        </div>

        {/* Row 2 - UIKit & SwiftUI */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            UIKit & SwiftUI
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">UIKit & SwiftUI</h1>
            <p className="text-gray text-sm">
              Build modern iOS apps using UIKit and SwiftUI for beautiful and responsive interfaces.
            </p>
          </div>
        </div>

        {/* Row 3 - Core Data & Firebase */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Core Data & Firebase
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Core Data & Firebase</h1>
            <p className="text-gray text-sm">
              Manage app data efficiently using Core Data and integrate real-time databases with Firebase.
            </p>
          </div>
        </div>

        {/* Row 4 - App Deployment */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            App Store Deployment
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">App Store Deployment</h1>
            <p className="text-gray text-sm">
              Learn how to test, optimize, and publish iOS apps on the App Store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSDevelopmentHighlights;
