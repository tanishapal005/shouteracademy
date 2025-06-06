import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">Shopify Development Mastery</h2>
        <p className="text-gray mt-2">
          Learn to build, customize, and optimize Shopify stores. Master Shopify themes, Liquid programming, 
          app development, and SEO techniques to create high-converting eCommerce websites.
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
          <BsJournalBookmark /> Shopify Theme & App Development
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Shopify</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Setting up a Shopify Store</li>
            <li>Exploring Shopify Dashboard & Features</li>
            <li>Choosing & Customizing Themes</li>
            <li>Configuring Payment & Shipping Methods</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Shopify Theme Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Shopify Liquid Templating</li>
            <li>Modifying Shopify Theme Files</li>
            <li>Customizing Product & Collection Pages</li>
            <li>Adding Custom Sections & Dynamic Content</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Shopify App Development</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to Shopify Apps</li>
            <li>Developing Custom Shopify Apps</li>
            <li>Integrating APIs & Webhooks</li>
            <li>Extending Store Functionality</li>
          </ul>
        </div>

      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdShoppingCart className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Custom Shopify Store Project</h3>
          <p className="text-gray text-sm">
            Build a fully customized Shopify store, integrating custom themes and apps. Optimize for 
            conversions, SEO, and performance, ensuring a seamless eCommerce experience.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Shopify Growth Strategy</h3>
        <p className="text-gray text-sm mt-2">
          Learn advanced Shopify growth strategies, including product marketing, automation, 
          and scaling an online store for maximum revenue.
        </p>
      </div>
    </div>
  );
};

export default Module;
