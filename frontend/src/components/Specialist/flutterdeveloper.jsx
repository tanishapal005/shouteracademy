import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Import images
import kushagraImage from "../../assets/images/Message/founderimg.webp";
import prajiwalImage from "../../assets/images/Mentors/tanisha.jpg";
import naveenImage from "../../assets/images/Mentors/kavita.jpg";
import himanshuImage from "../../assets/images/Mentors/nisha.jpg";
import pawanImage from "../../assets/images/Mentors/tanisha.jpg";

const mentors = [
  {
    name: "Tanisha Pal",
    title: "Mern Stack Expert",
    image: prajiwalImage,
    description: "10+ years helping brands grow through digital strategies."
  },
  {
    name: "Kavita Suthar",
    title: "Web Development Expert",
    image: naveenImage,
    description: "Expert in driving organic traffic through SEO."
  },
  {
    name: "Nisha Dadhich",
    title: "CMS Based Expert",
    image: himanshuImage,
    description: "Creates viral campaigns that boost engagement."
  },
  {
    name: "Tanisha Pal",
    title: "Mern Stack Expert",
    image: prajiwalImage,
    description: "10+ years helping brands grow through digital strategies."
  },
];

const founder = {
  name: "Harish Archarya",
  title: "Founder, ShoutersAcademy",
  image: kushagraImage,
  description: "Visionary leader with 10+ years in digital transformation and tech education."
};

const TeamGrid = () => {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isFounderHovered, setIsFounderHovered] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? mentors.length - visibleItems : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % (mentors.length - visibleItems + 1));

  const handleViewProfile = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closePopup = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Popup Modal */}
        {selectedMentor && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-100 mb-4">
                  <img
                    src={selectedMentor.image}
                    alt={selectedMentor.name}
                    className="w-full  object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{selectedMentor.name}</h3>
                <p className="text-red-800 font-medium">{selectedMentor.title}</p>
                <p className="text-gray-600 mt-4 text-center">{selectedMentor.description}</p>
              </div>
            </motion.div>
          </div>
        )}
        <motion.h2
          className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Flutter Experts


        </motion.h2>

        <motion.h3
          className="text-base md:text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >Learn from top Flutter professionals with hands-on experience
        </motion.h3>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* ===== HIGHLIGHTED FOUNDER SECTION ===== */}
          <motion.div
            className="relative w-full lg:w-auto flex-shrink-0 mb-12 lg:mb-0"
            onHoverStart={() => setIsFounderHovered(true)}
            onHoverEnd={() => setIsFounderHovered(false)}
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600 to-red-900 p-1"
                animate={{
                  scale: isFounderHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-full bg-white p-1 h-full w-full">
                  <motion.div
                    className="rounded-full overflow-hidden h-full w-full relative"
                    animate={{
                      scale: isFounderHovered ? 1.02 : 1,
                    }}
                  >
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full object-cover"
                      style={{ filter: 'none' }}
                    />
                    {/* Overlay */}
                    {isFounderHovered && (
                      <motion.div
                        className="absolute inset-0 bg-black/20 flex items-end justify-center pb-6"
                      >
                        <motion.div
                          className="bg-white rounded-lg p-4 shadow-lg w-4/5 text-center"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                        >
                          <h3 className="text-xl font-bold text-gray-800">{founder.name}</h3>
                          <p className="text-red-800 font-medium text-sm">{founder.title}</p>
                          <p className="text-xs text-gray-600 mt-2">{founder.description}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-800 text-white px-4 py-2 rounded-full shadow-lg"
                animate={{
                  y: isFounderHovered ? -10 : 0,
                  scale: isFounderHovered ? 1.05 : 1,
                }}
              >
                <span className="font-bold">FOUNDER</span>
              </motion.div>
            </div>
          </motion.div>

          {/* ===== MENTORS CAROUSEL ===== */}
          <div className="relative w-full lg:w-auto lg:flex-1">
            <div className="relative overflow-hidden px-2">
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <MdKeyboardArrowLeft size={30} className="text-gray-700" />
              </button>

              <motion.div
                className="grid gap-6 mx-auto"
                style={{
                  gridTemplateColumns: `repeat(${visibleItems}, minmax(0, 1fr))`,
                  width: '100%'
                }}
              >
                {mentors.slice(index, index + visibleItems).map((mentor, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mb-4 group-hover:border-red-800 transition-colors duration-300">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-md font-bold text-gray-800 text-center">{mentor.name}</h3>
                    <p className="text-gray-600 text-xs text-center">{mentor.title}</p>
                    <motion.button
                      className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleViewProfile(mentor)}
                    >
                      View Profile
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                <MdKeyboardArrowRight size={30} className="text-gray-700" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: mentors.length - visibleItems + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full ${i === index ? 'bg-red-800' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;