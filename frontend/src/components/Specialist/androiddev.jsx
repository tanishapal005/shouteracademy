import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaGoogle, FaJava } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import alexImage from "../../assets/images/Mentors/mentor1.webp";
import jessicaImage from "../../assets/images/Mentors/mentor2.webp";
import michaelImage from "../../assets/images/Mentors/mentor3.webp";
import emilyImage from "../../assets/images/Mentors/mentor4.webp";
import danielImage from "../../assets/images/Mentors/mentor5.webp";

const mentors = [
  { name: "Alex Turner", title: "Lead Android Developer", image: alexImage, companyLogo: <FaAndroid className="text-green text-3xl mx-auto" /> },
  { name: "Jessica Roberts", title: "Mobile App Engineer", image: jessicaImage, companyLogo: <FaGoogle className="text-red text-3xl mx-auto" /> },
  { name: "Michael Scott", title: "Kotlin Developer", image: michaelImage, companyLogo: <FaJava className="text-purple text-3xl mx-auto" /> },
  { name: "Emily Johnson", title: "Android UI Specialist", image: emilyImage, companyLogo: <FaAndroid className="text-green text-3xl mx-auto" /> },
  { name: "Daniel Wilson", title: "Senior Android Engineer", image: danielImage, companyLogo: <FaGoogle className="text-red text-3xl mx-auto" /> },
  { name: "Sophia Martinez", title: "Mobile UX Designer", image: alexImage, companyLogo: <FaJava className="text-purple text-3xl mx-auto" /> },
  { name: "Chris Evans", title: "Full-Stack Android Developer", image: jessicaImage, companyLogo: <FaAndroid className="text-green text-3xl mx-auto" /> },
  { name: "Olivia Brown", title: "Android Performance Engineer", image: michaelImage, companyLogo: <FaGoogle className="text-red text-3xl mx-auto" /> },
];

const TeamGrid = () => {
  const [index, setIndex] = useState(0);

  const getVisibleItems = () => {
    if (window.innerWidth >= 1024) return 4; // Large screens
    if (window.innerWidth >= 768) return 2;  // Tablets
    return 1; // Mobile
  };

  const visibleItems = getVisibleItems();

  const prevSlide = () => setIndex((prev) => (prev === 0 ? mentors.length - visibleItems : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % (mentors.length - visibleItems + 1));

  return (
    <div className="bg-gray-1">
      <motion.h2
        className="text-3xl text-center mt-6 pt-6 font-bold text-gray"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Experts
      </motion.h2>

      <motion.h3
        className="text-lg text-gray pb-5 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Learn from industry-leading professionals with hands-on experience
      </motion.h3>

      <div className="relative flex justify-center items-center py-10 w-full overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-6 z-10 p-2 bg-gray-2 rounded-full shadow-md hover:bg-buttongray transition-all duration-300"
        >
          <MdKeyboardArrowLeft size={40} />
        </button>

        <motion.div
          className={`grid gap-6 max-w-6xl
            ${visibleItems === 1 ? "grid-cols-1" : ""}
            ${visibleItems === 2 ? "grid-cols-2" : ""}
            ${visibleItems === 4 ? "grid-cols-4" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {mentors.slice(index, index + visibleItems).map((mentor, idx) => (
            <motion.div
              key={idx}
              className="pb-6 rounded-lg text-center bg-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="relative group w-60 h-40">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 rounded-lg border-2 border-gray transition-all duration-300 " />
              </div>
              <h3 className="text-xl font-semibold mt-4">{mentor.name}</h3>
              <p className="text-md text-gray">{mentor.title}</p>
              <div className="mt-4">{mentor.companyLogo}</div>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={nextSlide}
          className="absolute right-6 z-10 p-2 bg-gray-2 rounded-full shadow-md hover:bg-buttongray transition-all duration-300"
        >
          <MdKeyboardArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default TeamGrid;
