import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import axios from "../../axios";

import heroslider1 from "../../assets/images/Heroslider/img-2.png";

import heroslider3 from "../../assets/images/Heroslider/img-3.png";


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slides, setSlides] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    education: "",
    course: "",
  });
  const [errors, setErrors] = useState({});

  // Dummy data (replace this with API data if needed)
  const dummySlides = [
    {
      title: "Learn from Experts, Excel in Your Career",
      description: "Practical mentorship programs designed by top industry professionals & real-world projects to make you job-ready.",
      image: heroslider1,
      primaryButtonText: "Explore Programs",
      secondaryButtonText: "Book your Mentor Session",
    },
  
    {
      title: "Master Skills, Land Your Dream Job, Get Hired",
      description: "Master Skills, Land Your Dream Job, Get Hired",
      image: heroslider3,
    primaryButtonText: "Explore Programs",
      secondaryButtonText: "Book your Mentor Session",
    },  {
      title: "Upskill, Stand Out, Get Hired ,Get Career-ready",
      description: "Top Mentorship Programs in Tech ,Hands-on learning & real-world projects to make you   b-ready.",
      image: heroslider1,
    primaryButtonText: "Explore Programs",
      secondaryButtonText: "Book your Mentor Session",
    },
  ];

  useEffect(() => {
    // Simulating API fetch with dummy data
    setSlides(dummySlides);
  }, []);

  useEffect(() => {
    if (!isHovered && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentSlide, slides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim().match(/^[A-Za-z\s]+$/)) {
      newErrors.name = "Only alphabets allowed";
    }
    if (!formData.phone.trim().match(/^\d{10}$/)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.education) {
      newErrors.education = "Please select education";
    }
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      name: formData.name,
      mobile: formData.phone,
      education: formData.education,
      course: formData.course,
    };

    toast
      .promise(axios.post("http://localhost:5000/api/users", userData), {
        loading: "Submitting...",
        success: "Form submitted successfully! 🎉",
        error: "Submission failed. ❌",
      })
      .then(() => {
        setFormData({ name: "", phone: "", education: "", course: "" });
        setIsModalOpen(false);
      });
  };

  if (!slides || slides.length === 0) {
    return <div className="text-center p-10">No slides available.</div>;
  }

  const slide = slides[currentSlide];

  return (
    <div
      className="relative flex flex-col lg:flex-row h-auto lg:h-screen bg-transparent justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Section */}
      <div className="w-full lg:w-1/2 order-1 lg:order-1 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-black">
          {slide.title}
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg mb-6">{slide.description}</p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-red-800 text-white px-6 py-3 rounded-full border-0 border-r-4 border-b-4 border-black">
            {slide.primaryButtonText}
          </button>
          <button
            className="border border-black px-6 py-3 rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            {slide.secondaryButtonText}
          </button>
        </div>
      </div>

      {/* Right Section - Mapped Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0 order-2 lg:order-2">
        <img
          src={slide.image}
          alt="Slide"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Navigation Arrows */}
      <div
        className="hidden sm:block absolute top-60 left-5 p-2 cursor-pointer"
        onClick={prevSlide}
      >
        <ArrowLeft size={30} />
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={nextSlide}
      >
        <ArrowRight size={30} />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-40 px-4 sm:px-6 md:px-8"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold mb-4">Book Your Mentor Session</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red text-sm">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold">Mobile Number</label>
                <input
                  type="text"
                  className="mt-1 block w-full border rounded-md p-2"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Education</label>
                <select
                  className="w-full border p-2 rounded-md"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                >
                  <option value="">Select Education</option>
                  <option>High School</option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                </select>
                {errors.education && <p className="text-red text-sm">{errors.education}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium">Course</label>
                <select
                  className="w-full border p-2 rounded-md"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="">Select Course</option>
                  <option>Data Science</option>
                  <option>Full Stack Development</option>
                  <option>Cloud Computing</option>
                </select>
                {errors.course && <p className="text-red text-sm">{errors.course}</p>}
              </div>
              <motion.button
                type="submit"
                className="w-full bg-red text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.05 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}