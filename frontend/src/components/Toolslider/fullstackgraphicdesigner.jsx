import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFigma } from "react-icons/fa";
import { SiCanva, SiSketch, SiCoreldraw, SiAdobeaftereffects, SiAdobeillustrator } from "react-icons/si"; 

// Graphic Designer Tools List
const designTools = [
  { name: "Adobe Photoshop", icon: <SiAdobeillustrator size={30} className="text-blue" /> },
  { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={30} className="text-orange" /> },
  { name: "Figma", icon: <FaFigma size={30} className="text-purple" /> },
  { name: "Canva", icon: <SiCanva size={30} className="text-blue" /> },
  { name: "Adobe XD", icon: <SiAdobeillustrator size={30} className="text-pink" /> },
  { name: "CorelDRAW", icon: <SiCoreldraw size={30} className="text-green" /> },
  { name: "Sketch", icon: <SiSketch size={30} className="text-yellow" /> },
  { name: "Canva", icon: <SiCanva size={30} className="text-blue" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects size={30} className="text-blue" /> },
  { name: "Adobe Photoshop", icon: <SiAdobeillustrator size={30} className="text-blue" /> },
];

const GraphicDesignToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        Graphic Design Tools You Will Master
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
        {Array.from({ length: Math.ceil(designTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {designTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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

export default GraphicDesignToolsSlider;
