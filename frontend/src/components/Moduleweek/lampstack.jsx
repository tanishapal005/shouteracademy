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
        <h2 className="text-2xl md:text-3xl font-bold">LAMP Stack Web Development</h2>
        <p className="text-gray mt-2">
          Learn to develop dynamic web applications using the LAMP stack (Linux, Apache, MySQL, PHP). Gain hands-on 
          experience in setting up servers, database management, backend scripting, and building full-stack web applications.
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
          <h4 className="text-xl font-semibold mt-3">Introduction to LAMP Stack</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Setting up a LAMP Stack Environment</li>
            <li>Understanding Linux Server Configurations</li>
            <li>Installing & Configuring Apache</li>
            <li>Introduction to MySQL Database</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">PHP & Backend Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>PHP Basics & Syntax</li>
            <li>Working with Forms & User Input</li>
            <li>Sessions, Cookies, and Authentication</li>
            <li>Object-Oriented PHP & MVC Architecture</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Database Management & API Integration</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>MySQL Database Queries & CRUD Operations</li>
            <li>Database Security & Optimization</li>
            <li>RESTful APIs with PHP</li>
            <li>Integrating External APIs (Payment, Authentication, etc.)</li>
          </ul>
        </div>


      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdCode className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">LAMP Stack Web Application</h3>
          <p className="text-gray text-sm">
            Build a full-stack web application using PHP and MySQL. Implement user authentication, database management, 
            and API integrations. Deploy the application to a live server and follow security best practices.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">LAMP Stack Development Strategy</h3>
        <p className="text-gray text-sm mt-2">
          Discuss best practices in LAMP stack development, database design strategies, and real-world case studies of 
          PHP-based applications.
        </p>
      </div>
    </div>
  );
};

export default Module;
