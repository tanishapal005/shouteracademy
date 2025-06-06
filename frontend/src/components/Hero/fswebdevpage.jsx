import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Fullstackdigitalmarketer from "../../assets/images/Hero/Fullstackdigitalmarketer.webp"; // Using same image
import homepage from "../../assets/images/Hero/joinus.webp";
import { motion } from "framer-motion";

const FSWebDevelopment = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-6 gap-8">
            {/* Left Section */}
            <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Full Stack Web Development Program
                </h1>
                <p className="text-lg text-gray mb-4">
                    Master front-end and back-end technologies, frameworks, and databases to build scalable web applications.
                </p>

                {/* Statistics */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                    <div className="text-center">
                        <span className="text-2xl md:text-3xl font-bold">4.8 ⭐</span>
                        <p className="text-sm text-gray">(15,324 Reviews)</p>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl md:text-3xl font-bold">25,000+</span>
                        <p className="text-sm text-gray">Aspirants Mentored</p>
                    </div>
                    <div className="text-center">
                        <span className="text-2xl md:text-3xl font-bold">15+</span>
                        <p className="text-sm text-gray">Industry Mentors</p>
                    </div>
                </div>
            </div>
      {/* Right Image Grid - Responsive */}
  <div
          className="relative p-4 rounded-xl w-full sm:w-[400px] md:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] mt-10 md:mt-0 mx-auto md:mx-0"
        >
          <img
            src={homepage}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg mix-blend-multiply"
          />
        </div>
        </div>
    );
};


export default FSWebDevelopment;
