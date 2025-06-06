import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { SiKalilinux, SiMetasploit, SiWireshark, SiBurpsuite } from "react-icons/si";
import { FaSkullCrossbones, FaShieldAlt, FaWifi, FaKey, FaNetworkWired, FaDatabase } from "react-icons/fa";

// Ethical Hacking Tools List
const hackingTools = [
  { name: "Kali Linux", icon: <SiKalilinux size={30} className="text-blue" /> },
  { name: "Metasploit", icon: <SiMetasploit size={30} className="text-red" /> },
  { name: "Nmap", icon: <FaNetworkWired size={30} className="text-green" /> },
  { name: "Wireshark", icon: <SiWireshark size={30} className="text-blue" /> },
  { name: "Burp Suite", icon: <SiBurpsuite size={30} className="text-orange" /> },
  { name: "SQLmap", icon: <FaDatabase size={30} className="text-black" /> },
  { name: "Aircrack-ng", icon: <FaWifi size={30} className="text-yellow" /> },
  { name: "John the Ripper", icon: <FaKey size={30} className="text-purple" /> },
  { name: "Hydra", icon: <FaSkullCrossbones size={30} className="text-red" /> },
  { name: "Nessus", icon: <FaShieldAlt size={30} className="text-blue" /> },
];

export default function EthicalHackingSlider() {
  return (
    <div className="bg-gray-1 py-10 mt-11 mb-10 px-4 md:px-6 lg:px-10">
      <h2 className="text-3xl font-bold text-center text-gray mb-6">
        Ethical Hacking Tools You Will Master
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
        {Array.from({ length: Math.ceil(hackingTools.length / 2) }, (_, rowIndex) => (
          <SwiperSlide key={rowIndex}>
            <div className="grid grid-cols-1 gap-y-6 mb-14 items-center justify-center">
              {hackingTools.slice(rowIndex * 2, rowIndex * 2 + 2).map((tool, index) => (
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
}
