import React from "react";
import img1 from "../../assets/images/Fullstackdigitalmarketerbg/img1.webp";

const FlutterDeveloperHighlights = () => {
  return (
    <div
      className="relative py-10 min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-8 text-white max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold">Flutter Development Course Highlights</h2>
        <p className="text-gray text-sm">
          Explore the key features of this comprehensive Flutter Development course.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 gap-6 relative z-10">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Master Flutter & Dart
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Master Flutter & Dart</h1>
            <p className="text-gray text-sm">
              Gain expertise in Flutter and Dart to build high-performance cross-platform mobile applications.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            UI/UX in Flutter
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">UI/UX in Flutter</h1>
            <p className="text-gray text-sm">
              Learn to design beautiful and responsive UI with Flutter widgets and Material Design principles.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            Firebase Integration
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">Firebase Integration</h1>
            <p className="text-gray text-sm">
              Implement real-time databases, authentication, and cloud functions with Firebase in Flutter apps.
            </p>
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="bg-white text-xs md:text-sm font-semibold border border-red border-b-4 px-3 py-1 rounded-md shadow w-fit">
            State Management
          </div>
          <div className="p-4 bg-white border border-black border-b-4 shadow-md rounded-xl flex-1 text-center md:text-left">
            <h1 className="text-base md:text-lg font-semibold">State Management</h1>
            <p className="text-gray text-sm">
              Master state management techniques in Flutter, including Provider, Riverpod, and Bloc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlutterDeveloperHighlights;
