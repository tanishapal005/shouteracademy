import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/Navbar/Logo.webp";
import bgimg from "../../assets/images/Hero/bgimg.webp";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseItems, setCourseItems] = useState([]);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "#", dropdown: true },
    { name: "About Us", path: "/aboutpage" },
    { name: "Contact Us", path: "/contactpage" },
  ];
useEffect(() => {
  axios.get("http://localhost:5000/api/categories")
    .then((res) => {
      console.log("Fetched categories:", res.data);
      // You received an array of categories, convert it to object format expected by your buttons
      const formatted = {};
      res.data.forEach((cat) => {
        formatted[cat.name] = []; // You can later fill with courses by category
      });
      setAllCourses(formatted);
      setSelectedCategory(Object.keys(formatted)[0]); // Auto-select first category
    })
    .catch((err) => console.error("Failed to fetch categories:", err));
}, []);


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={mobileMenuRef}>
      <img src={bgimg} alt="Background" className="absolute inset-0 w-full h-[1080px] object-cover -z-10" />
      <nav className="flex items-center justify-between px-6 py-3 relative w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Shouters" className="h-16 mr-6 cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-black text-center">
          {menuItems.map((item, index) => (
            <li key={index} className="relative cursor-pointer">
              {item.dropdown ? (
                <div
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center space-x-2 hover:text-red-2">
                    <span>{item.name}</span> {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {dropdownOpen && (
                    <ul className="absolute top-full left-1/2 transform -translate-x-1/2 z-20 w-56 bg-white shadow-lg border rounded-md overflow-hidden text-center">
                      {courseItems.map((course, idx) => (
                        <li key={idx} className="px-4 py-2 hover:bg-buttongray">
                          <Link to={`/courses/${course.slug}`} onClick={() => setDropdownOpen(false)}>
                            {course.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link to={item.path} className="block hover:text-red-2">{item.name}</Link>
              )}
            </li>
          ))}
        </ul>

        <Link to="/login" className="hidden md:block">
          <button className="bg-red text-white px-4 py-2 rounded-md hover:scale-105">Login</button>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-black text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
          <div className="w-3/4 max-w-sm h-full bg-white shadow-lg fixed left-0 top-0 p-6 overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <img src={logo} alt="Shouters" className="h-14 mb-6" />

            <ul className="text-black text-lg space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="w-full flex justify-between items-center py-2"
                      >
                        <span>{item.name}</span> {mobileDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      {mobileDropdownOpen && (
                        <ul className="bg-gray border-l pl-4">
                          {courseItems.map((course, idx) => (
                            <li key={idx} className="py-2 text-sm hover:text-red">
                              <Link to={`/courses/${course.slug}`} onClick={() => setMobileDropdownOpen(false)}>
                                {course.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link to="/login">
                <button className="w-full bg-red text-white py-2 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
