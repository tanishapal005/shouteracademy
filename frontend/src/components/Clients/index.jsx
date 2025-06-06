import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import microsoft_logo from "../../assets/images/Clients/microsoft_logo.webp";
import google_logo from "../../assets/images/Clients/google_logo.webp";
import samsung_logo from "../../assets/images/Clients/samsung_logo.webp";
import cisco_logo from "../../assets/images/Clients/cisco_logo.webp";
import ericsoon_logo from "../../assets/images/Clients/ericsoon_logo.webp";
import volkswagen_logo from "../../assets/images/Clients/volkswagen_logo.webp";

const logos = [
  microsoft_logo,
  google_logo,
  samsung_logo,
  cisco_logo,
  ericsoon_logo,
  volkswagen_logo,
];

const TrustedSection = () => {
  return (
    <section className="py-16 border-0 w-full px-4 sm:px-6 md:px-10">
      {/* Content Wrapper */}
      <div className="mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray">
          Trusted by over 16,000 companies and millions of learners around the world
        </h2>

        {/* Swiper Logo Slider */}
        <div className="mt-10">
          <Swiper
            slidesPerView={4} // Default for small screens
            spaceBetween={20}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              768: { slidesPerView: 4, spaceBetween: 30 }, // Tablets (4 logos)
              1024: { slidesPerView: 4, spaceBetween: 35 }, // Desktops (4 logos)
            }}
          >

            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={logo}
                  alt="Client Logo"
                  className="w-28 sm:w-32 h-14 sm:h-16 object-contain mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
