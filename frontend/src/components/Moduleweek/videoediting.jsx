import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { BsJournalBookmark, BsFillLightningFill } from "react-icons/bs";
import { MdMovie } from "react-icons/md";

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
        <h2 className="text-2xl md:text-3xl font-bold">Video Editing Mastery</h2>
        <p className="text-gray mt-2">
          Master the art of video editing! Learn cutting-edge techniques, transitions, color grading, and audio enhancement using industry-standard tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.
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
          <h3 className="text-lg font-bold bg-yellow-500 text-white py-1 px-3 w-fit rounded-md">Week 1</h3>
          <h4 className="text-xl font-semibold mt-3">Introduction to Video Editing</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Understanding Video Formats & Codecs</li>
            <li>Basic Editing Techniques</li>
            <li>Working with Timelines & Sequences</li>
            <li>Introduction to Adobe Premiere Pro & Final Cut Pro</li>
          </ul>
        </div>

        {/* Week 2 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow-500 text-white py-1 px-3 w-fit rounded-md">Week 2</h3>
          <h4 className="text-xl font-semibold mt-3">Advanced Editing & Transitions</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Creative Transitions & Effects</li>
            <li>Color Correction & Grading</li>
            <li>Slow Motion & Speed Ramping</li>
            <li>Multi-Cam Editing Techniques</li>
          </ul>
        </div>

        {/* Week 4 */}
        <div className="bg-gray-1 p-4 rounded-lg shadow">
          <h3 className="text-lg font-bold bg-yellow-500 text-white py-1 px-3 w-fit rounded-md">Week 4</h3>
          <h4 className="text-xl font-semibold mt-3">Sound Design & Final Export</h4>
          <ul className="text-gray mt-2 list-disc pl-5 text-sm">
            <li>Audio Mixing & Sound Effects</li>
            <li>Adding Background Music & Voiceovers</li>
            <li>Finalizing & Exporting for Different Platforms</li>
            <li>Project Workflow & Best Practices</li>
          </ul>
        </div>
      </div>

      {/* Project Section */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-8 flex items-center gap-4">
        <MdMovie className="text-red text-5xl" />
        <div>
          <h3 className="text-xl font-semibold">Short Film Editing Project</h3>
          <p className="text-gray text-sm">
            Work on a real-world video editing project by editing a short film. Apply transitions, sound design, color grading, and effects to enhance storytelling and deliver a professional-quality video.
          </p>
        </div>
      </div>

      {/* Jam Session */}
      <div className="bg-gray-1 p-5 rounded-lg shadow mt-6">
        <h3 className="text-xl font-semibold">Cinematic Storytelling Techniques</h3>
        <p className="text-gray text-sm mt-2">
          In this session, we will analyze famous film edits, discuss storytelling through video editing, and explore techniques to create visually compelling narratives.
        </p>
      </div>
    </div>
  );
};

export default Module;
