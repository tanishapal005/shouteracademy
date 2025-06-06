import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGooglePlay, FaGithub, FaJava } from "react-icons/fa";
import { SiKotlin, SiFirebase, SiAndroidstudio, SiGradle, SiPostman, SiFigma } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

// Android Developer Tools List
const androidTools = [
  { name: "Android Studio", icon: <SiAndroidstudio size={30} className="text-green" /> },
  { name: "Java", icon: <FaJava size={30} className="text-red" /> },
  { name: "Kotlin", icon: <SiKotlin size={30} className="text-blue" /> },
  { name: "Firebase", icon: <SiFirebase size={30} className="text-yellow" /> },
  { name: "Gradle", icon: <SiGradle size={30} className="text-green" /> },
  { name: "GitHub", icon: <FaGithub size={30} className="text-black" /> },
  { name: "Postman", icon: <SiPostman size={30} className="text-orange" /> },
  { name: "Figma", icon: <SiFigma size={30} className="text-purple" /> },
  { name: "Google Play Store", icon: <FaGooglePlay size={30} className="text-green" /> },
  { name: "XML (UI Design)", icon: <BiCodeAlt size={30} className="text-blue" /> },
];

const AndroidToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        Android Development Tools You Will Master
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
        {Array.from({ length: Math.ceil(androidTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {androidTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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

export default AndroidToolsSlider;
