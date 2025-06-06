import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdCode } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">Full Stack Web Development</h2>
        <p className="text-gray mt-2">
          Learn to build powerful web applications from scratch! This module covers frontend and backend development, 
          database management, API integration, authentication, and deployment.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Coding Sessions
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Hands-on Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> Code Cheatsheets & Best Practices
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Frontend Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>HTML, CSS & Responsive Design</li>
            <li>JavaScript & Modern ES6+ Features</li>
            <li>React Basics & Component Architecture</li>
            <li>State Management with Hooks</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Backend Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Node.js & Express.js Basics</li>
            <li>Building RESTful APIs</li>
            <li>Authentication with JWT</li>
            <li>Middleware & Error Handling</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Database & API Integration</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>MongoDB & Mongoose</li>
            <li>SQL vs NoSQL Databases</li>
            <li>Connecting Backend with Frontend</li>
            <li>Using Third-party APIs</li>
          </ul>
        </div>


      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdCode className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Full Stack Web App Project</h3>
          <p className="text-gray text-sm">
            Build a fully functional web application using React, Node.js, Express, and MongoDB. 
            Implement authentication, CRUD operations, and deploy the app live.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-100 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Full Stack Development Strategy Session</h3>
        <p className="text-gray text-sm mt-2">
          Discuss best practices in full stack development, common pitfalls, and how to structure large-scale projects for maintainability.
        </p>
      </div>
    </div>
  );
};

export default Module;