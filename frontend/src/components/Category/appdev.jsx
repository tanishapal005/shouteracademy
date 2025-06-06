import React, { useState } from "react";
import { Link } from "react-router-dom";
import category1 from "../../assets/images/Category/category1.webp";

const CourseSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Digital Marketing");

  const allCourses = {
    "Digital Marketing": [
      {
        id: 1,
        title: "Flutter Developer",
        instructor: "Jose Portilla",
        rating: 4.6,
        reviews: "120,432",
        price: "₹499",
        originalPrice: "₹3,999",
        img: category1,
        link: "/flutterdeveloper",
      },
      {
        id: 2,
        title: "Android Development with Kotlin",
        instructor: "Jose Portilla",
        rating: 4.6,
        reviews: "120,432",
        price: "₹499",
        originalPrice: "₹3,999",
        img: category1,
        link: "/andriodprogram",
      },
      {
        id: 3,
        title: "iOS Development with Swift",
        instructor: "Jose Portilla",
        rating: 4.6,
        reviews: "120,432",
        price: "₹499",
        originalPrice: "₹3,999",
        img: category1,
        link: "/iosprogram",
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white border-2 border-b-4 border-black rounded-lg h-full">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        App Developer Program
      </h2>
      <p className="text-gray text-center mt-2 text-sm sm:text-base">
        Explore courses designed for your professional development.
      </p>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {allCourses[selectedCategory]?.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg border border-black overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-xs mx-auto">
            <Link to={course.link}>
              <img src={course.img} alt={course.title} className="w-full h-48 object-cover rounded-t-xl" />
            </Link>
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold">{course.title}</h2>
              <p className="text-gray text-xs md:text-sm">{course.instructor}</p>
              <div className="flex items-center  text-sm mt-2">
                ⭐ <span className="text-red font-semibold ml-1">{course.rating}</span>
                <span className="text-gray ml-1">({course.reviews})</span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <button className="bg-red text-white px-4 py-2 text-xs md:text-sm rounded-md font-semibold w-full border-0 border-b-4 cursor-pointer  border-black">View Curriculum</button>
                <Link to={course.link}><button className="border-2 border-b-2 border-black px-4 py-2 text-xs md:text-sm rounded-md font-semibold cursor-pointer w-full">Learn More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
