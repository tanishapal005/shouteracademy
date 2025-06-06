import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const CourseCard = ({ title, totalCourses }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between w-full transform hover:scale-105 transition-transform duration-300">
      
      {/* 📚 Left - Icon */}
      <div className="bg-white bg-opacity-30 p-5 rounded-xl shadow-md">
        <FaBookOpen className="text-5xl text-black" />
      </div>

      {/* 📖 Right - Course Details */}
      <div className="text-right">
        <h2 className="text-3xl font-extrabold drop-shadow-md">{totalCourses}</h2>
        <p className="text-lg opacity-90 font-medium">{title}</p>
      </div>
    </div>
  );
};

export default CourseCard;

