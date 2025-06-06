import React, { useState } from "react";

const CourseOverview = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-red text-white py-10 px-6 rounded-3xl flex flex-col items-center m-4 md:m-9">
      {/* Header Section */}
      <div className="max-w-4xl w-full text-center md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold">What Will You Learn</h2>
        <p className="text-white text-sm mt-2">
          A detailed overview of the course, including key topics, objectives, and module sequence.
        </p>
      </div>

      {/* Course Details Section */}
      <div className="bg-white text-black mt-6 p-4 rounded-lg shadow-lg flex flex-wrap justify-center md:flex-wrap w-full max-w-6xl">
        <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray p-3 min-w-[120px]">
          <h3 className="font-semibold text-lg">Duration</h3>
          <p className="text-sm">24 Weeks</p>
        </div>
        <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray p-3 min-w-[120px]">
          <h3 className="font-semibold text-lg">Mode</h3>
          <p className="text-sm">Online</p>
        </div>
        <div className="flex-1 text-center border-b md:border-b-0 md:border-r border-gray p-3 min-w-[120px]">
          <h3 className="font-semibold text-lg">Live Sessions</h3>
          <p className="text-sm">144+ Hrs</p>
        </div>
        <div className="flex-1 text-center p-3 min-w-[120px]">
          <h3 className="font-semibold text-lg">Projects</h3>
          <p className="text-sm">24+</p>
        </div>

        {/* Placement Support */}
        <div className="px-6 py-4 rounded-lg flex flex-col md:flex-row items-center mt-4 md:mt-0 md:ml-4 p-10 w-full md:w-auto justify-center gap-4">
          <button 
            onClick={togglePopup}
            className="bg-black text-white font-semibold px-4 py-2 rounded-lg"
          >
            Placement Support
          </button>

          <button className="bg-blue-5 text-white font-semibold px-4 py-2 rounded-lg">
            Download Curriculum
          </button>
        </div>
      </div>

      {/* Popup - Added this new section only */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Placement Support Details</h3>
              <button 
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <p><strong>Resume Building:</strong> We help create professional resumes.</p>
              <p><strong>Mock Interviews:</strong> Practice sessions with experts.</p>
              <p><strong>Job Portal:</strong> Access to exclusive job listings.</p>
              <p><strong>Career Guidance:</strong> Personalized counseling sessions.</p>
            </div>
            <button 
              onClick={togglePopup}
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;