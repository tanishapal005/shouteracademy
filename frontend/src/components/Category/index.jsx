import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CourseSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then((res) => {
        setCategories(res.data);
        if (res.data.length > 0) {
          setSelectedCategory(res.data[0].name);
        }
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch courses when selected category changes
  useEffect(() => {
    if (!selectedCategory) return;

    setLoading(true);
    axios.get(`http://localhost:5000/api/courses?category=${selectedCategory}`)
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch courses:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="p-6 bg-white mt-2 min-h-screen border-2 border-black rounded-lg">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        All the Skills You Need in One Place
      </h2>
      <p className="text-gray text-center mt-2">
        Explore courses designed for your professional development.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center mt-6 gap-2 overflow-x-auto whitespace-nowrap hide-scrollbar">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 text-sm rounded-full font-semibold transition duration-300 ${
              selectedCategory === cat.name
                ? "bg-red text-white"
                : "bg-gray-2 text-gray"
            }`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <p className="text-center text-gray mt-6">Loading courses...</p>
      )}

      {/* Courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {!loading && courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-lg border border-black overflow-hidden transform transition duration-300 hover:scale-105 w-full max-w-xs mx-auto"
          >
            <Link to={`/courses/${course.slug}`}>
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold">{course.title}</h2>
              <p className="text-gray text-xs md:text-sm">{course.instructor}</p>
              <div className="flex items-center text-sm mt-2">
                ⭐ <span className="text-red font-semibold ml-1">{course.rating}</span>
                <span className="text-gray ml-1">({course.reviews})</span>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link to={`/courses/${course.slug}?section=overview`}>
                  <button className="cursor-pointer bg-red text-white px-4 py-2 text-xs md:text-sm rounded-md font-semibold w-full border-0 border-b-4 border-black">
                    View Curriculum
                  </button>
                </Link>
                <Link to={`/courses/${course.slug}`}>
                  <button className="border-2 border-b-2 border-black px-4 py-2 text-xs md:text-sm rounded-md font-semibold w-full cursor-pointer">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
