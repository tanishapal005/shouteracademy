import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiGraphql, SiFirebase, SiPostman } from "react-icons/si";

// MERN Stack Tools List
const mernTools = [
  { name: "MongoDB", icon: <SiMongodb size={30} className="text-green" /> },
  { name: "Express.js", icon: <SiExpress size={30} className="text-gray" /> },
  { name: "React.js", icon: <FaReact size={30} className="text-blue" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} className="text-green" /> },
  { name: "Redux", icon: <SiRedux size={30} className="text-purple" /> },
  { name: "GraphQL", icon: <SiGraphql size={30} className="text-pink" /> },
  { name: "Firebase", icon: <SiFirebase size={30} className="text-yellow" /> },
  { name: "GitHub", icon: <FaGithub size={30} className="text-gray" /> },
  { name: "Postman", icon: <SiPostman size={30} className="text-orange" /> },
  { name: "Docker", icon: <FaDocker size={30} className="text-blue" /> },
];

const MernStackToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        MERN Stack Development Tools You Will Master
      </h2>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {Array.from({ length: Math.ceil(mernTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {mernTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-40 h-24 border border-gray rounded-lg shadow-md bg-white p-4 mx-auto"
                >
                  {tool.icon}
                  <p className="font-semibold text-gray mt-2 text-center text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MernStackToolsSlider;
