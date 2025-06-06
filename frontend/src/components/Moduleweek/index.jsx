import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
// import { SiMicrosoftExcel } from "react-icons/si";

import { MdFastfood } from "react-icons/md";

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
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
  {/* Get started with Excel <SiMicrosoftExcel className="text-green-600 text-3xl" /> */}
</h2>

        <p className="text-gray mt-2">
          Kickstart your Data Analytics journey with Excel! From pivot tables to essential functions and from charts
          to dashboards, learn every essential to become a Data Analyst. Excel isn’t just a tool, It’s your new superpower!
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-blue-1 text-blue px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsFillLightningFill /> Live Sessions
        </span>
        <span className="bg-yellow-1 text-yellow px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <AiOutlineProject /> Projects
        </span>
        <span className="bg-green-1 text-green px-3 py-1 rounded-md text-sm flex items-center gap-2">
          <BsJournalBookmark /> Cheat Sheets
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Overview of Excel</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to Data Analytics</li>
            <li>Basic Features in Excel</li>
            <li>Formatting in Excel</li>
            <li>Dealing with Raw Data</li>
            <li>Functions in Excel</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Deep Dive with Excel - II</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Data Connectors in Excel</li>
            <li>Cleaning in Power Query Editor</li>
            <li>Adding Conditional Columns using Power Query</li>
            <li>Data Modelling & Its Importance</li>
            <li>Cardinality & Filter Direction in Power Pivot</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Master Advanced Excel - III</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Pivot Tables in Excel</li>
            <li>Charts in Excel</li>
            <li>Slicers in Excel</li>
            <li>Measures in Excel</li>
            <li>Creating a Dashboard in Excel</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdFastfood className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">McDonald's Restaurant Sales Analysis</h3>
          <p className="text-gray text-sm">
            As a data analyst at McDonald's, you have been tasked with Excel proficiency, developing a comprehensive
            dashboard. Analyze sales data to optimize staff management, identify peak days, best-selling dishes, and popular cuisines.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Excel Jam Session</h3>
        <p className="text-gray text-sm mt-2">
          In this session, you'll master Excel for data analytics interviews. Learn insider tips on using Excel effectively,
          tackling real-world scenarios, and impressing interviewers with your data manipulation skills.
        </p>
      </div>
    </div>
  );
};

export default Module;
