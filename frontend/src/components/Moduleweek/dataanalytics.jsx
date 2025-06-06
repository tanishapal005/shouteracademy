import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";

const Module = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg border border-gray max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 text-xl font-semibold bg-black text-white px-3 py-2 rounded-lg w-fit">
        <FaRegCalendarAlt className="text-yellow" />
        <span>Module 1 - Duration: 4 Weeks</span>
      </div>

      {/* Title */}
      <div className="mt-5 text-gray">
        <h2 className="text-2xl md:text-3xl font-bold">Data Analytics Mastery</h2>
        <p className="text-gray mt-2">
          Learn to analyze and interpret data using **Python**, **SQL**, and **Power BI**. 
          Master data visualization, statistical analysis, and predictive modeling to drive 
          business insights and decision-making.
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
          <BsJournalBookmark /> Data Visualization & Reporting
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Data Analytics</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Data Analytics & Its Importance</li>
            <li>Working with Data in Python & Pandas</li>
            <li>Exploratory Data Analysis (EDA) Techniques</li>
            <li>Data Cleaning & Preprocessing</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Data Visualization & SQL</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Creating Interactive Dashboards with Power BI</li>
            <li>SQL for Data Extraction & Manipulation</li>
            <li>Building Charts & Reports with Matplotlib & Seaborn</li>
            <li>Data Storytelling & Presentation Techniques</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Predictive Analytics & Machine Learning</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Introduction to Machine Learning & AI</li>
            <li>Building Regression & Classification Models</li>
            <li>Using Python Libraries like Scikit-Learn</li>
            <li>Evaluating Model Performance & Optimization</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdAnalytics className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Real-World Data Analysis Project</h3>
          <p className="text-gray text-sm">
            Work on a **real-world dataset** to derive meaningful insights using Python, 
            SQL, and Power BI, applying statistical and predictive analytics techniques.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Advanced Data Analytics Techniques</h3>
        <p className="text-gray text-sm mt-2">
          Dive deeper into data mining, big data technologies, and 
          best practices to extract valuable business insights efficiently.
        </p>
      </div>
    </div>
  );
};

export default Module;
