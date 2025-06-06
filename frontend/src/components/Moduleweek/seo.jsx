import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdTrendingUp } from "react-icons/md";

const Module = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-semibold bg-black text-white px-3 py-2 rounded-lg w-fit">
        <FaRegCalendarAlt className="text-yellow" />
        <span>Module 1 - Duration: 3 Weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">SEO Fundamentals & Strategies</h2>
        <p className="text-gray mt-2">
          Master the art of Search Engine Optimization! Learn how to rank websites higher on Google, optimize content for keywords, 
          build high-quality backlinks, and implement technical SEO strategies for long-term success.
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Sessions
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Hands-on SEO Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> SEO Cheat Sheets & Case Studies
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to SEO</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>What is SEO & Why It Matters?</li>
            <li>Understanding Search Engine Algorithms</li>
            <li>Keyword Research & Selection</li>
            <li>Competitor SEO Analysis</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">On-Page & Technical SEO</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Optimizing Meta Tags & Headers</li>
            <li>Content Optimization & Internal Linking</li>
            <li>Site Speed & Mobile Friendliness</li>
            <li>Schema Markup & Structured Data</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Off-Page SEO & Link Building</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Building High-Quality Backlinks</li>
            <li>Guest Posting & Outreach Strategies</li>
            <li>Local SEO & Google My Business</li>
            <li>Tracking SEO Performance & Analytics</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdTrendingUp className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">SEO Optimization Project</h3>
          <p className="text-gray text-sm">
            Conduct keyword research, optimize website content, and build a backlink strategy to improve search rankings. 
            Track performance using SEO tools like Google Analytics and Search Console.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">SEO Strategy & Implementation Session</h3>
        <p className="text-gray text-sm mt-2">
          Learn how to develop an effective SEO strategy, analyze competitors, and use advanced tools to monitor 
          performance and adapt to algorithm changes.
        </p>
      </div>
    </div>
  );
};

export default Module;
