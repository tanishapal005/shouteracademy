import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { SiGoogletagmanager, SiSemrush, SiHubspot, SiZoho, SiGoogleanalytics, SiGoogleads, SiGooglesearchconsole, SiMeta } from "react-icons/si";

// Performance Marketing Tools List
const performanceTools = [
  { name: "Google Ads", icon: <SiGoogleads size={30} className="text-red" /> },
  { name: "Facebook Ads", icon: <FaFacebook size={30} className="text-blue" /> },
  { name: "Google Analytics", icon: <SiGoogleanalytics size={30} className="text-yellow" /> },
  { name: "SEMrush", icon: <SiSemrush size={30} className="text-orange" /> },
  { name: "HubSpot CRM", icon: <SiHubspot size={30} className="text-orange" /> },
  { name: "Zoho CRM", icon: <SiZoho size={30} className="text-red" /> },
  { name: "Google Tag Manager", icon: <SiGoogletagmanager size={30} className="text-blue" /> },
  { name: "Google Search Console", icon: <SiGooglesearchconsole size={30} className="text-red" /> },
  { name: "Meta Business Suite", icon: <SiMeta size={30} className="text-blue" /> },
];

const PerformanceMarketerSlider = () => {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        Performance Marketing Tools
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
        {Array.from({ length: Math.ceil(performanceTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {performanceTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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

export default PerformanceMarketerSlider;