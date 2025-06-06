import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">WordPress Development Mastery</h2>
        <p className="text-gray mt-2">
          Master the art of building dynamic websites with WordPress. Learn theme development, plugin customization, 
          website optimization, and best security practices to create professional and scalable WordPress websites.
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
          <BsJournalBookmark /> Theme & Plugin Development
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">WordPress Basics & Setup</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Installing & Configuring WordPress</li>
            <li>Understanding the WordPress Dashboard</li>
            <li>Choosing & Customizing Themes</li>
            <li>Essential Plugins & Their Uses</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Theme Development & Customization</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>WordPress Theme Structure & Templates</li>
            <li>Creating & Editing Child Themes</li>
            <li>Customizing Themes Using PHP & CSS</li>
            <li>Adding Widgets & Menus</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Plugin Development & Functionality</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding WordPress Plugins</li>
            <li>Creating Custom Plugins</li>
            <li>Integrating APIs & Third-Party Services</li>
            <li>Optimizing Performance & Security</li>
          </ul>
        </div>

      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdWeb className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Custom WordPress Website Project</h3>
          <p className="text-gray text-sm">
            Build a fully functional WordPress website with a custom theme and plugins. Implement best SEO and security practices, 
            and deploy the site to a live server.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">WordPress Development Strategy</h3>
        <p className="text-gray text-sm mt-2">
          Learn expert strategies for building scalable WordPress websites, optimizing themes, and leveraging 
          plugins to enhance functionality and performance.
        </p>
      </div>
    </div>
  );
};

export default Module;
