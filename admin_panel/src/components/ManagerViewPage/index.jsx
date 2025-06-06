import React from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaBuilding,
  FaBookOpen,
  FaCheckCircle,
  FaCalendarAlt,
  FaVenusMars,
  FaArrowLeft,
  FaIdBadge,
  FaUsers,
  FaChartLine,
  FaFileAlt,
  FaDoorOpen,
  FaClock
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ManagerViewPage = () => {
  const navigate = useNavigate();

  const manager = {
    id: 1,
    name: "Michael Scott",
    username: "michael_s",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    address: "1725 Slough Ave, Scranton, PA",
    lastLogin: "2025-03-28",
    gender: "Male",
    department: "Sales",
    Qualification: "MBA",
    dob: "1975-03-15",
    status: "Active",
    role: "Manager",
    profile: "https://i.ibb.co/z7yWg8D/profile-demo.png",
    // New practical fields
    employeeId: "MGR-2020-001",
    hireDate: "2020-06-15",
   
    officeLocation: "Building A, Floor 2, Room 205",
    officeHours: "Mon-Fri 9AM-5PM",
    currentProjects: ["Sales Training Program", "Q3 Revenue Growth"],
  
    
  };

  const handleEdit = () => {
    navigate("/manager/edit/:id");
  };

  return (
    <div className="ml-64 mt-16 p-4">
      {/* 🔙 Back Button - Unchanged */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-gray-700 hover:text-black font-semibold px-4 py-2 bg-white rounded-full shadow transition"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* 📦 Original Manager Details Card - Completely Unchanged */}
      <div className="bg-white flex flex-col md:flex-row items-start shadow-md rounded-xl p-6 gap-8 max-w-5xl w-full">
        {/* Left Profile Section - Unchanged */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <img
            src={manager.profile}
            alt={manager.name}
            className="w-40 h-40 rounded-full object-cover shadow-lg border"
          />
          <h2 className="mt-4 text-2xl font-bold">{manager.name}</h2>
          <span className="mt-2 bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
            {manager.role}
          </span>
        </div>

        {/* Right Details Section - Unchanged */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm">
            <p><FaUser className="inline mr-2 text-purple-500" /> <strong>Username:</strong> {manager.username}</p>
            <p><FaEnvelope className="inline mr-2 text-blue-500" /> <strong>Email:</strong> {manager.email}</p>
            <p><FaPhone className="inline mr-2 text-green-500" /> <strong>Phone:</strong> {manager.phone}</p>
            <p><FaMapMarkerAlt className="inline mr-2 text-red-500" /> <strong>Address:</strong> {manager.address}</p>
            <p><FaCalendarAlt className="inline mr-2 text-yellow-500" /> <strong>Last Login:</strong> {manager.lastLogin}</p>
            <p><FaVenusMars className="inline mr-2 text-pink-500" /> <strong>Gender:</strong> {manager.gender}</p>
            <p><FaBuilding className="inline mr-2 text-green-700" /> <strong>Department:</strong> {manager.department}</p>
            <p><FaBookOpen className="inline mr-2 text-indigo-500" /> <strong>Qualification</strong> {manager.Qualification}</p>
            <p><FaBirthdayCake className="inline mr-2 text-pink-600" /> <strong>DOB:</strong> {manager.dob}</p>
            <p><FaCheckCircle className="inline mr-2 text-green-600" /> <strong>Status:</strong> {manager.status}</p>
          </div>

          {/* Action Buttons - Unchanged */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleEdit}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Edit Profile
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
              Delete Profile
            </button>
          </div>
        </div>
      </div>

      {/* NEW: Practical Information Table - Added Below */}
      <div className="bg-white shadow-md rounded-xl p-6 max-w-5xl w-full mt-6">
        <h3 className="text-xl font-semibold mb-4">Management Information</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Information</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <TableRow icon={<FaIdBadge className="text-blue-500" />} label="Employee ID" value={manager.employeeId} />
              <TableRow icon={<FaCalendarAlt className="text-green-500" />} label="Hire Date" value={manager.hireDate} />

              <TableRow icon={<FaDoorOpen className="text-gray-500" />} label="Office Location" value={manager.officeLocation} />
              <TableRow icon={<FaClock className="text-gray-500" />} label="Office Hours" value={manager.officeHours} />
            </tbody>
          </table>
        </div> 
      </div>
    </div>
  );
};

// Reusable table row component
const TableRow = ({ icon, label, value }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{label}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{value}</div>
    </td>
  </tr>
);

export default ManagerViewPage;