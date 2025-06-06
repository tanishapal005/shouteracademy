import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdCampaign } from "react-icons/md";

const Module = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray-200 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-semibold bg-black text-white px-3 py-2 rounded-lg w-fit">
        <FaRegCalendarAlt className="text-yellow" />
        <span>Module 1 - Duration: 3 Weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-black">
        <h2 className="text-2xl md:text-3xl font-bold">Performance Marketing Essentials</h2>
        <p className="text-gray mt-2">
          Unlock the power of data-driven marketing! Learn how to create high-performing ad campaigns, optimize landing pages, 
          track conversions, and maximize ROI using tools like Google Ads, Facebook Ads, and SEO strategies. 
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
          <h4 className="text-xl font-semibold mt-3">Introduction to Performance Marketing</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Digital Marketing Channels</li>
            <li>Overview of Performance Marketing</li>
            <li>Setting up Google Ads & Facebook Ads</li>
            <li>Tracking & Analytics Tools</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Search Engine & Social Media Ads</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Google Ads & PPC Campaigns</li>
            <li>Facebook & Instagram Ads</li>
            <li>Audience Targeting & Retargeting</li>
            <li>A/B Testing Strategies</li>
          </ul>
        </div>



        {/* Week 4 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 4</h3>
          <h4 className="text-xl font-semibold mt-3">Email & Influencer Marketing</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Building Email Campaigns</li>
            <li>Using Automation Tools</li>
            <li>Influencer Marketing Strategies</li>
            <li>Measuring ROI from Marketing Campaigns</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdCampaign className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Google Ads Campaign Analysis</h3>
          <p className="text-gray text-sm">
            As a Performance Marketer, you will run a Google Ads campaign, analyze key metrics (CTR, CPC, ROAS), and optimize ads for 
            maximum conversions. Create a detailed performance report and recommendations.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Marketing Campaign Strategy Session</h3>
        <p className="text-gray text-sm mt-2">
          This session will cover real-world case studies on successful performance marketing strategies, analyzing 
          competitor campaigns, and fine-tuning ad copies for maximum impact.
        </p>
      </div>
    </div>
  );
};

export default Module;
