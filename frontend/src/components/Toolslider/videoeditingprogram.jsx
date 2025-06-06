import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaApple, FaVideo } from "react-icons/fa";
import { SiAdobe, SiDavinciresolve, SiAdobeaftereffects, SiWondershare } from "react-icons/si";

// Video Editing Tools List
const videoEditingTools = [
  { name: "Premiere Pro", icon: <SiAdobe size={30} className="text-purple" /> },
  { name: "Final Cut Pro", icon: <FaApple size={30} className="text-gray" /> },
  { name: "DaVinci Resolve", icon: <SiDavinciresolve size={30} className="text-black" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects size={30} className="text-blue" /> },
  { name: "Filmora", icon: <SiWondershare size={30} className="text-green" /> },
  { name: "Camtasia", icon: <FaVideo size={30} className="text-yellow" /> },
  { name: "iMovie", icon: <FaApple size={30} className="text-violet" /> },
  { name: "CapCut", icon: <FaVideo size={30} className="text-black" /> },
  { name: "HitFilm Express", icon: <FaVideo size={30} className="text-red" /> },
  { name: "Vegas Pro", icon: <FaVideo size={30} className="text-blue" /> },
];

const VideoEditingToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        Video Editing Tools You Will Master
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
        {Array.from({ length: Math.ceil(videoEditingTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {videoEditingTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-40 h-24 border border-gray rounded-lg shadow-md bg-white p-4 mx-auto hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
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

export default VideoEditingToolsSlider;
