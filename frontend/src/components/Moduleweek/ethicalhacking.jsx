import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">Ethical Hacking Mastery</h2>
        <p className="text-gray mt-2">
          Learn the fundamentals of **Ethical Hacking**, including penetration testing, network security, and vulnerability assessment. 
          Master cybersecurity techniques to secure systems and prevent cyber threats.
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
          <BsJournalBookmark /> Network Security & Penetration Testing
        </span>
      </div>

      {/* Weeks Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Week 1 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Ethical Hacking</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Cybersecurity & Ethical Hacking</li>
            <li>Types of Hackers & Ethical Hacking Roles</li>
            <li>Footprinting & Reconnaissance Techniques</li>
            <li>Setting Up a Hacking Lab with Kali Linux</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Penetration Testing & Network Security</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Scanning Networks & Identifying Vulnerabilities</li>
            <li>Exploiting Weaknesses in Web Applications</li>
            <li>Social Engineering & Phishing Attacks</li>
            <li>Wireless Network Hacking & Defense</li>
          </ul>
        </div>

        {/* Week 3 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow text-white py-1 px-3 w-fit rounded-md">Week 3</h3>
          <h4 className="text-xl font-semibold mt-3">Advanced Cybersecurity Techniques</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Privilege Escalation & Post Exploitation</li>
            <li>Reverse Engineering & Malware Analysis</li>
            <li>Security Hardening & Defensive Strategies</li>
            <li>Incident Response & Cyber Threat Intelligence</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdSecurity className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Penetration Testing Project</h3>
          <p className="text-gray text-sm">
            Conduct a **penetration test** on a simulated network, identifying vulnerabilities, exploiting weaknesses, and 
            implementing security measures to protect systems.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Advanced Ethical Hacking Techniques</h3>
        <p className="text-gray text-sm mt-2">
          Explore the latest cybersecurity trends, ethical hacking methodologies, and red teaming strategies to 
          stay ahead in the field of cybersecurity.
        </p>
      </div>
    </div>
  );
};

export default Module;