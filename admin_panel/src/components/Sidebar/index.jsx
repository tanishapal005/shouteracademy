import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaClipboardList,
  FaMoneyBillWave,
  FaHistory,
  FaCertificate,
  FaCog,
  FaTools,
  FaQuestionCircle, 
  FaInfoCircle, 
  FaFileContract, 
  FaEnvelope,
  FaUserSecret
} from "react-icons/fa";
import Logo from "../../assets/Shouter Academy Black Vertical Logo Final.png";
import Paths from "../../routes/Paths";

const Sidebar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Keep dropdown open if current path matches any of its children
  React.useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith(Paths.SUPERADMIN) || 
        path.startsWith(Paths.ADMIN) ||
        path.startsWith(Paths.MANAGERS) ||
        path.startsWith(Paths.INSTRUCTORS) ||
        path.startsWith(Paths.STUDENTS) ||
        path.startsWith(Paths.ROLESANDPERMISSION)) {
      setOpenDropdown('users');
    }
    else if (path.startsWith(Paths.COURSE_LIST) || 
             path.startsWith(Paths.ADD_COURSE) ||
             path.startsWith(Paths.CATEGORY_LIST) ||
             path.startsWith(Paths.LIVE_SESSION)) {
      setOpenDropdown('courses');
    }
    else if (path.startsWith(Paths.ENROLLMENTS)) {
      setOpenDropdown('enrollments');
    }
    else if (path.startsWith(Paths.VERIFY_CERTIFICATE) || 
             path.startsWith(Paths.GENERATE_CERTIFICATE)) {
      setOpenDropdown('certificates');
    }
    else if (path.startsWith(Paths.PAYMENT_HISTORY)) {
      setOpenDropdown('payments');
    }
    else if (path.startsWith(Paths.HOMEPAGE_SETTINGS) || 
             path.startsWith(Paths.ABOUT_US) ||
             path.startsWith(Paths.TERMS_AND_CONDITIONS) ||
             path.startsWith(Paths.CONTACT_US) ||
              path.startsWith(Paths.Meet_Your_mentor)||
                      path.startsWith(Paths.Testimonial)||
             path.startsWith(Paths.PRIVACY_POLICY)) {
      setOpenDropdown('settings');
    }
  }, [location.pathname]);

  const dropdownLinkStyle = "no-underline px-3 py-2 rounded-md bg-blue-50 text-blue-800 font-medium hover:bg-blue-100 transition-all ";
  const paymentDropdownLinkStyle = "flex items-center space-x-2 p-2 rounded-lg bg-blue-50 text-blue-800 font-medium hover:bg-blue-100 transition-all";

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white text-gray-800 shadow-xl flex flex-col py-6 border-r border-gray-300 rounded-r-xl transition-all overflow-y-auto">
      {/* Logo */}
      <div className="flex justify-center items-center mb-6">
        <img src={Logo} alt="Shouter Academy Logo" className="h-16 object-contain" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 px-4">
        {/* Dashboard */}
        <Link 
          to={Paths.DASHBOARD} 
          className="no-underline group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r from-blue-300 to-blue-500 hover:text-white transition-all duration-300 text-black font-medium shadow-md"
        >
          <FaTachometerAlt className="text-blue-500 group-hover:text-white" />
          <span>Dashboard</span>
        </Link>

        {/* Users */}
        <div>
          <button 
            onClick={() => toggleDropdown('users')} 
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-green-300 to-green-500 hover:text-white transition-all duration-300 text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaUsers className="text-green-500 group-hover:text-white" />
              <span>Users</span>
            </span>
            {openDropdown === 'users' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === 'users' && (
            <div className="ml-4 flex flex-col space-y-2 p-2 bg-gray-100 rounded-lg">
              <Link to={Paths.SUPERADMIN} className={dropdownLinkStyle}>Super Admin</Link>
              <Link to={Paths.ADMIN} className={dropdownLinkStyle}>Admin</Link>
              <Link to={Paths.MANAGERS} className={dropdownLinkStyle}>Manager</Link>
              <Link to={Paths.INSTRUCTORS} className={dropdownLinkStyle}>Instructor</Link>
              <Link to={Paths.STUDENTS} className={dropdownLinkStyle}>Students</Link>
              <Link to={Paths.ROLESANDPERMISSION} className={dropdownLinkStyle}>Role & Permissions</Link>
            </div>
          )}
        </div>

        {/* Courses */}
        <div>
          <button
            onClick={() => toggleDropdown('courses')}
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-yellow-300 to-yellow-500 hover:text-white transition-all duration-300 text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaBook className="text-yellow-500 group-hover:text-white" />
              <span>Courses</span>
            </span>
            {openDropdown === 'courses' ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openDropdown === 'courses' && (
            <div className="ml-4 flex flex-col space-y-2 p-2 bg-gray-100 rounded-lg">
              <Link to={Paths.COURSE_LIST} className={dropdownLinkStyle}>Course List</Link>
              <Link to={Paths.ADD_COURSE} className={dropdownLinkStyle}>Add Course</Link>
              <Link to={Paths.CATEGORY_LIST} className={dropdownLinkStyle}>Course Category</Link>
              <Link to={Paths.LIVE_SESSION} className={dropdownLinkStyle}>Live Sessions</Link>
            </div>
          )}
        </div>

        {/* Enrollments */}
        <div>
          <button 
            onClick={() => toggleDropdown('enrollments')} 
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-purple-300 to-purple-500 hover:text-white transition-all  text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaClipboardList className="text-purple-500 group-hover:text-white" />
              <span>Enrollments</span>
            </span>
            {openDropdown === 'enrollments' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === 'enrollments' && (
            <div className="ml-4 flex flex-col space-y-2 p-2 bg-gray-100 rounded-lg">
              <Link to={Paths.ENROLLMENTS} className={dropdownLinkStyle}>All Enrollments</Link>
            </div>
          )}
        </div>

        {/* Certificates */}
        <div>
          <button 
            onClick={() => toggleDropdown('certificates')} 
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-teal-300 to-teal-500 hover:text-white transition-all  text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaCertificate className="text-teal-500 group-hover:text-white" />
              <span>Certificates</span>
            </span>
            {openDropdown === 'certificates' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === 'certificates' && (
            <div className="ml-4 flex flex-col space-y-2 p-2 bg-gray-100 rounded-lg">
              <Link to={Paths.VERIFY_CERTIFICATE} className={dropdownLinkStyle}>Verify Certificate</Link>
              <Link to={Paths.GENERATE_CERTIFICATE} className={dropdownLinkStyle}>Generate Certificate</Link>
            </div>
          )}
        </div>

        {/* Payments */}
        <div>
          <button 
            onClick={() => toggleDropdown('payments')} 
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-pink-300 to-pink-500 hover:text-white transition-all duration-300 text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaMoneyBillWave className="text-pink-500 group-hover:text-white" />
              <span>Payments</span>
            </span>
            {openDropdown === 'payments' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === 'payments' && (
            <div className="ml-4 flex flex-col space-y-2 bg-gray-100 rounded-lg p-2 transition-all  shadow-md">
              <Link to={Paths.PAYMENT_HISTORY} className={paymentDropdownLinkStyle}>
                <FaHistory /> <span>Payment History</span>
              </Link>
            </div>
          )}
        </div>

        {/* Settings */}
        <div>
          <button
            onClick={() => toggleDropdown('settings')}
            className="w-full flex justify-between items-center p-3 rounded-lg hover:bg-gradient-to-r from-gray-300 to-gray-500 hover:text-white transition-all  text-black font-medium shadow-md"
          >
            <span className="flex items-center space-x-3">
              <FaCog className="text-gray-500 group-hover:text-white" />
              <span>Settings</span>
            </span>
            {openDropdown === 'settings' ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openDropdown === 'settings' && (
            <div className="ml-4 flex flex-col space-y-2 p-2 bg-gray-100 rounded-lg">
              <Link to={Paths.HOMEPAGE_SETTINGS} className={dropdownLinkStyle}>
                <FaTools className="inline mr-2" />
                Page-setup
              </Link>
              <Link to={Paths.ABOUT_US} className={dropdownLinkStyle}>
                <FaInfoCircle className="inline mr-2" />
                About Us
              </Link>
              <Link to={Paths.TERMS_AND_CONDITIONS} className={dropdownLinkStyle}>
                <FaFileContract className="inline mr-2" />
                Terms & Conditions
              </Link>
              <Link to={Paths.CONTACT_US} className={dropdownLinkStyle}>
                <FaEnvelope className="inline mr-2" />
                Contact Us
              </Link>
              <Link to={Paths.PRIVACY_POLICY} className={dropdownLinkStyle}>
                <FaUserSecret className="inline mr-2" />
                Privacy Policy
              </Link>
                      <Link to={Paths.Meet_Your_mentor} className={dropdownLinkStyle}>
                <FaUserSecret className="inline mr-2" />
             Meet The Mentor
              </Link>
               <Link to={Paths.Testimonial} className={dropdownLinkStyle}>
                <FaUserSecret className="inline mr-2" />
            Testimonial 
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;