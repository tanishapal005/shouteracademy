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
        <h2 className="text-2xl md:text-3xl font-bold">MERN Stack Web Development</h2>
        <p className="text-gray mt-2">
          Master the MERN (MongoDB, Express.js, React, Node.js) stack and build scalable, full-stack applications from scratch. 
          Learn how to create RESTful APIs, manage databases, implement authentication, and deploy applications efficiently.
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
          <h4 className="text-xl font-semibold mt-3">Frontend with React</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to React.js & JSX</li>
            <li>State & Props Management</li>
            <li>React Hooks (useState, useEffect, useContext)</li>
            <li>Component-Based Architecture & Routing</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Backend with Node.js & Express.js</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to Node.js & Express.js</li>
            <li>Building RESTful APIs</li>
            <li>Middleware & Error Handling</li>
            <li>Authentication with JWT & Bcrypt</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Database & API Integration</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>MongoDB & Mongoose ORM</li>
            <li>CRUD Operations with MongoDB</li>
            <li>Connecting Backend & Frontend</li>
            <li>Third-party API Integration</li>
          </ul>
        </div>


      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdCode className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">MERN Stack Web Application</h3>
          <p className="text-gray text-sm">
            Build a full-stack application with authentication, database integration, and API handling. Deploy the 
            project and implement best coding practices.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">MERN Stack Development Strategy</h3>
        <p className="text-gray text-sm mt-2">
          Discuss best practices in MERN stack development, common debugging techniques, and project structuring for scalability.
        </p>
      </div>
    </div>
  );
};

export default Module;
