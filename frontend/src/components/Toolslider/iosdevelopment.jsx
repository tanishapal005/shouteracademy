import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaGithub, FaApple } from "react-icons/fa";
import { SiSwift, SiFirebase, SiXcode, SiPostman, SiFigma, SiCocoapods } from "react-icons/si"; // ✅ Fixed CocoaPods
import { MdFlight } from "react-icons/md";

// Alternative for missing SwiftUI icon
import { RiFlutterFill } from "react-icons/ri"; // ❗ Replace this if SwiftUI icon is available in another package

// iOS Developer Tools List
const iosTools = [
  { name: "Xcode", icon: <SiXcode size={30} className="text-blue" /> },
  { name: "Swift", icon: <SiSwift size={30} className="text-orange" /> },
  { name: "SwiftUI", icon: <RiFlutterFill size={30} className="text-blue" /> }, // ❗ Placeholder for SwiftUI
  { name: "Firebase", icon: <SiFirebase size={30} className="text-yellow" /> },
  { name: "CocoaPods", icon: <SiCocoapods size={30} className="text-red" /> }, // ✅ Fixed CocoaPods
  { name: "TestFlight", icon: <MdFlight size={30} className="text-blue" /> },
  { name: "GitHub", icon: <FaGithub size={30} className="text-black" /> },
  { name: "Postman", icon: <SiPostman size={30} className="text-orange" /> },
  { name: "Figma", icon: <SiFigma size={30} className="text-purple" /> },
  { name: "App Store Connect", icon: <FaApple size={30} className="text-blue" /> },
];

const IosToolsSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        iOS Development Tools You Will Master
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
        {Array.from({ length: Math.ceil(iosTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {iosTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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

export default IosToolsSlider;
