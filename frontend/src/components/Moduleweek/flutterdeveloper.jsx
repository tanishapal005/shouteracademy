import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";

const Module = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-semibold bg-black text-white px-3 py-2 rounded-lg w-fit">
        <FaRegCalendarAlt className="text-yellow" />
        <span>Module 1 - Duration: 4 Weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-gray">
        <h2 className="text-2xl md:text-3xl font-bold">Flutter Development Mastery</h2>
        <p className="text-gray mt-2">
          Learn to build high-performance cross-platform mobile applications with **Flutter**. 
          Master UI design, state management, animations, and backend integration for scalable and modern mobile apps.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Workshops
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Hands-on Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> State Management & UI Frameworks
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Flutter & Dart</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Flutter & Dart Basics</li>
            <li>Setting Up Flutter Development Environment</li>
            <li>Building Your First Flutter App</li>
            <li>Widgets & UI Fundamentals</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">State Management & Navigation</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Stateful & Stateless Widgets</li>
            <li>Provider, Riverpod & Bloc for State Management</li>
            <li>Navigation & Routing in Flutter</li>
            <li>Handling User Inputs & Forms</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">API Integration & Backend Services</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Fetching Data with REST APIs</li>
            <li>Using Firebase for Authentication & Storage</li>
            <li>Managing Local Storage with Shared Preferences & Hive</li>
            <li>Optimizing Performance & Debugging</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdMobileFriendly className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Full-Stack Flutter Mobile App</h3>
          <p className="text-gray text-sm">
            Build a fully functional **Flutter mobile app** integrating Firebase backend, state management,
            and advanced UI components for a real-world application.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Advanced Flutter Techniques</h3>
        <p className="text-gray text-sm mt-2">
          Explore best practices for Flutter animations, performance optimizations, and
          implementing **beautiful and efficient** mobile applications.
        </p>
      </div>
    </div>
  );
};

export default Module;
