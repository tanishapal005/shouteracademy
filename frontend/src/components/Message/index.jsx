import React from "react";
import { motion } from "framer-motion";
import founderImage from "../../assets/images/Message/founderimg.webp";

const FounderMessage = () => {
  return (
    <motion.div
      className="w-full bg-white shadow-lg border border-gray py-12 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Inner Container for Centering */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-12 ">
        
        {/* Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            <span className="text-red">Founder</span> Message
          </h2>
          <p className="text-gray text-base md:text-lg leading-relaxed mt-4">
            Welcome to <span className="font-semibold text-black">Shouters Academy</span>! 
            Our mission is to equip you with the skills and confidence to excel in your journey. 
            We believe in the transformative power of education and are dedicated to helping you 
            unlock your full potential. Together, let's shape a brighter, more successful future.
          </p>
          <p className="text-red font-semibold mt-6 text-xl md:text-2xl">— Harish Acharya</p>
          <p className="text-gray text-sm md:text-base">Founder, Shouters Academy</p>
        </div>

        {/* Image Section - Scales Beautifully */}
        <div className="md:w-1/2 flex justify-center ">
          <motion.img
            src={founderImage}
            alt="Founder"
            className="w-full max-w-xs md:max-w-xs h-[450px] object-cover rounded-lg border border-black border-b-3 pr-12 md:pr-8 border-l-3 shadow-md transform scale-x-[-1] "
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FounderMessage;