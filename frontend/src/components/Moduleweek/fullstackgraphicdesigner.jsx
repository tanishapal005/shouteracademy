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
        <span>Module 1 - Duration: 3 weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">Full Stack Graphic Design Mastery</h2>
        <p className="text-gray mt-2">
          Elevate your creative skills and become a **Full Stack Graphic Designer**. From mastering design fundamentals 
          to creating high-quality branding, UI/UX, and motion graphics, this course provides everything you need to 
          build stunning visuals for digital and print media.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Sessions
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Hands-on Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> Design Cheat Sheets
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Fundamentals of Graphic Design</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to Graphic Design Principles</li>
            <li>Understanding Colors, Typography & Layout</li>
            <li>Adobe Photoshop & Illustrator Basics</li>
            <li>Image Manipulation & Retouching</li>
            <li>Working with Vector Graphics</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Advanced Design & Branding</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Logo & Brand Identity Design</li>
            <li>Creating Social Media Graphics</li>
            <li>Typography Design & Poster Creation</li>
            <li>Illustration & Icon Design</li>
            <li>Adobe InDesign for Print & Digital Media</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">UI/UX & Motion Graphics</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to UI/UX & Figma Basics</li>
            <li>Wireframing & Prototyping</li>
            <li>Website & Mobile App Design</li>
            <li>Adobe After Effects & Motion Graphics</li>
            <li>Creating Animated UI Elements</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdDesignServices className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Brand Identity & UI/UX Case Study</h3>
          <p className="text-gray text-sm">
            As a full-stack designer, you’ll work on creating a complete brand identity, including a logo, color scheme, typography, 
            and social media kit. You’ll also design a UI/UX case study, building an interactive prototype for a web or mobile app.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Graphic Design Jam Session</h3>
        <p className="text-gray text-sm mt-2">
          In this session, you’ll learn **industry secrets** on how to design high-quality visuals efficiently, 
          improve workflow, and create portfolios that attract clients and job opportunities.
        </p>
      </div>
    </div>
  );
};

export default Module;
