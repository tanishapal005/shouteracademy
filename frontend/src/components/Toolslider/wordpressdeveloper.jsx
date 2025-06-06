import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaWordpress, FaPhp, FaGithub, FaGoogle } from "react-icons/fa";
import { SiElementor, SiWoocommerce, SiYoast, SiMysql, SiCpanel, SiPostman } from "react-icons/si";

// WordPress Developer Tools List
const wordpressTools = [
  { name: "WordPress", icon: <FaWordpress size={30} className="text-blue" /> },
  { name: "Elementor", icon: <SiElementor size={30} className="text-pink" /> },
  { name: "WooCommerce", icon: <SiWoocommerce size={30} className="text-purple" /> },
  { name: "Yoast SEO", icon: <SiYoast size={30} className="text-green" /> },
  { name: "PHP", icon: <FaPhp size={30} className="text-blue" /> },
  { name: "MySQL", icon: <SiMysql size={30} className="text-blue" /> },
  { name: "cPanel", icon: <SiCpanel size={30} className="text-orange" /> },
  { name: "GitHub", icon: <FaGithub size={30} className="text-gray" /> },
  { name: "Postman", icon: <SiPostman size={30} className="text-orange" /> },
  { name: "Google Analytics", icon: <FaGoogle size={30} className="text-yellow" /> },
];

const WordPressToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        WordPress Development Tools You Will Master
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
        {Array.from({ length: Math.ceil(wordpressTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {wordpressTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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

export default WordPressToolsSlider;
