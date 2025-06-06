// src/components/Testimonials.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode } from "swiper/modules";

const Testimonials = () => {
  // 🔸 Cleaned dummy testimonials data
  const testimonials = [
    {
      name: "Ravi Sharma",
      description: "Shouters Academy transformed my career!",
      videoUrl: "https://www.youtube.com/embed/w2xW2Hn1LgQ",
      sourceType: "youtube",
    },
    {
      name: "Priya Verma",
      description: "Highly recommend their frontend courses!",
      videoUrl: "https://www.youtube.com/embed/8Bgkap9gT1A",
      sourceType: "youtube",
    },
    {
      name: "Ankit Singh",
      description: "The mentors are so helpful and encouraging.",
      videoUrl: "https://www.youtube.com/embed/BhC2RWID_2s",
      sourceType: "youtube",
    },
    {
      name: "Sneha Joshi",
      description: "Loved the hands-on project-based approach!",
      videoUrl: "https://www.youtube.com/embed/aDXmEB-TpBc",
      sourceType: "youtube",
    },
    {
      name: "Pushpendra",
      description: "Amazing platform to grow!",
      videoUrl: "https://www.youtube.com/embed/wtYFRDD_-hI",
      sourceType: "youtube",
    },
    {
      name: "Jigyasa",
      description: "Great content and friendly mentors!",
      videoUrl: "https://www.youtube.com/embed/jGNmHvpStSE",
      sourceType: "youtube",
    },
  ];

  return (
    <section className="w-full px-3 sm:px-6 md:px-10 py-10 bg-gray-200">
      <h2 className="text-xl sm:text-3xl font-bold text-black text-center">
        What Students Say About Us
      </h2>
      <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
        Shouters Academy Alumni Stories You Can’t Miss!
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        freeMode={true}
        modules={[Pagination, FreeMode]}
        className="mt-4"
        breakpoints={{
          360: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full max-w-[90%] sm:max-w-xs rounded-xl shadow-lg overflow-hidden bg-white">
              <div className="relative w-full pb-[140%]">
                <iframe
                  src={testimonial.videoUrl}
                  title={testimonial.name}
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3">
                <h3 className="text-md font-bold text-center">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 text-center">{testimonial.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
