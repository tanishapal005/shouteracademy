import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

const Module = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-semibold bg-black text-white px-3 py-2 rounded-lg w-fit">
        <FaRegCalendarAlt className="text-yellow" />
        <span>Module 1 - Duration: 4 Weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">Framer Development Mastery</h2>
        <p className="text-gray mt-2">
          Learn to design and develop stunning interactive web experiences with **Framer**. 
          Master animations, responsive layouts, prototyping, and real-world production-ready 
          components for modern web applications.
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
          <BsJournalBookmark /> Framer Motion & Advanced Animations
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Framer</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>What is Framer? Overview & Capabilities</li>
            <li>Setting up a Framer Project</li>
            <li>Understanding Framer Interface & Components</li>
            <li>Basic Animations & Page Transitions</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Framer Motion & Animation Essentials</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Motion Components</li>
            <li>Gestures & Interactive Elements</li>
            <li>Keyframe & Spring Animations</li>
            <li>Scroll-based & Parallax Effects</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Advanced Prototyping & UI Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Building Interactive UI Components</li>
            <li>State Management in Framer</li>
            <li>Reusable Components & Variants</li>
            <li>Responsive Design & Adaptive Layouts</li>
          </ul>
        </div>

      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdAnimation className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Interactive Portfolio Website</h3>
          <p className="text-gray text-sm">
            Build a fully interactive portfolio website with **Framer Motion**, using advanced animations, 
            custom UI components, and seamless transitions to enhance user experience.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Framer Advanced Techniques</h3>
        <p className="text-gray text-sm mt-2">
          Learn how to use advanced Framer features, motion patterns, and 
          best practices to create **visually stunning** and highly **engaging** web experiences.
        </p>
      </div>
    </div>
  );
};

export default Module;
