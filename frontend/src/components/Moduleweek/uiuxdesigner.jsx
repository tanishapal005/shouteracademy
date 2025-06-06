import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">UI/UX Design Mastery</h2>
        <p className="text-gray mt-2">
          Learn the principles of user interface and experience design. Master wireframing, prototyping, usability testing, and design systems using industry-standard tools like Figma, Adobe XD, and Sketch.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Sessions
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Real-World Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> Cheat Sheets & Case Studies
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Fundamentals of UI/UX</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to UI & UX Design</li>
            <li>Understanding User Psychology</li>
            <li>Design Thinking Process</li>
            <li>Research & Competitive Analysis</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Wireframing & Prototyping</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Low-Fidelity vs High-Fidelity Wireframes</li>
            <li>Creating User Flows</li>
            <li>Prototyping with Figma & Adobe XD</li>
            <li>Usability Testing & Iterations</li>
          </ul>
        </div>

        {/* Week 4 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 4</h3>
          <h4 className="text-xl font-semibold mt-3">Design Systems & Accessibility</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Building Design Systems</li>
            <li>UI Components & Style Guides</li>
            <li>Responsive & Adaptive Design</li>
            <li>Accessibility & Inclusive Design</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdDesignServices className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Mobile App UI/UX Redesign</h3>
          <p className="text-gray text-sm">
            Work on a real-world UI/UX project by redesigning a mobile app. Conduct user research, create wireframes, build an interactive prototype, and perform usability testing to improve user experience.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">UX Strategy & Design Trends</h3>
        <p className="text-gray text-sm mt-2">
          In this session, we will analyze the latest UI/UX trends, review real-world case studies, and learn best practices to create user-friendly digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Module;