import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaUserTie,
  FaUser, FaCheckCircle, FaGift, FaCalendarAlt, FaVenusMars, FaArrowLeft
} from "react-icons/fa";

const mockAdmin = {
  id: 1,
  name: "Michael Scott",
  username: "michael_s",
  email: "michael@dundermifflin.com",
  phone: "123-456-7890",
  address: "1725 Slough Ave, Scranton, PA",
  profile: "https://i.pravatar.cc/150?img=5",
  role: "Manager",
  lastLogin: "2025-03-28",
  gender: "Male",
  course: "MBA",
  department: "Sales",
  dob: "1975-03-15",
  status: "Active",
};

const ViewAdmin = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/admin/edit/${mockAdmin.id}`, { state: { admin: mockAdmin } });
  };

  const handleDelete = () => {
    alert("Admin deleted successfully!");
  };

  return (
    <div className="ml-64 mt-20">
      
      {/* 🔙 Back Button - box ke upar */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-gray-700 hover:text-black font-semibold px-4 py-2 bg-white rounded-full shadow transition"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* 🔳 Profile Box */}
      <div className="max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Profile Picture & Name */}
          <div className="flex flex-col items-center">
            <img
              src={mockAdmin.profile}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
            />
            <h2 className="text-xl font-bold mt-4">{mockAdmin.name}</h2>
            <span className="mt-2 text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {mockAdmin.role}
            </span>
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
              <p><FaUser className="inline mr-2 text-purple-600" /> <strong>Username:</strong> {mockAdmin.username}</p>
              <p><FaEnvelope className="inline mr-2 text-blue-600" /> <strong>Email:</strong> {mockAdmin.email}</p>
              <p><FaPhone className="inline mr-2 text-green-600" /> {mockAdmin.phone}</p>
              <p><FaMapMarkerAlt className="inline mr-2 text-red-600" /> {mockAdmin.address}</p>
              <p><FaCalendarAlt className="inline mr-2 text-yellow-500" /> <strong>Last Login:</strong> {mockAdmin.lastLogin}</p>
              <p><FaVenusMars className="inline mr-2 text-pink-500" /> <strong>Gender:</strong> {mockAdmin.gender}</p>
              <p><FaGift className="inline mr-2 text-green-500" /> <strong>Department:</strong> {mockAdmin.department}</p>
              <p><FaUserTie className="inline mr-2 text-indigo-500" /> <strong>Course:</strong> {mockAdmin.course}</p>
              <p><FaBirthdayCake className="inline mr-2 text-pink-600" /> <strong>DOB:</strong> {mockAdmin.dob}</p>
              <p><FaCheckCircle className="inline mr-2 text-green-600" /> <strong>Status:</strong> {mockAdmin.status}</p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleEdit}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 flex items-center gap-2"
              >
                <i className="ri-edit-line"></i> Edit Profile
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 flex items-center gap-2"
              >
                <i className="ri-delete-bin-line"></i> Delete Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmin;
