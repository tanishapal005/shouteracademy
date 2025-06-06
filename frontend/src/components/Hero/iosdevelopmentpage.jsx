import { motion } from "framer-motion";
import homepage from "../../assets/images/Hero/joinus.webp";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row justify-between px-6 md:px-16 pt-10 overflow-hidden">
      {/* Left Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center md:text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Become an Expert in iOS Development with Swift
        </h1>
        <p className="text-base md:text-lg mb-8">
          Learn Swift programming, build high-performance iOS apps, and master Apple’s development ecosystem with hands-on projects.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8">
          {[
            { count: "1.5 Lakh+", label: "Students Trained" },
            { count: "2000+", label: "Live iOS Projects Delivered" },
            { count: "50+", label: "Expert Apple Developers" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col text-center md:text-left mt-4 md:mt-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <span className="text-2xl md:text-3xl font-bold">{stat.count}</span>
              <p className="text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

     
      </motion.div>
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

export default Hero;
