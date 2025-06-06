import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaBook,
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarkerAlt,
  FaVenusMars,
  FaBuilding,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaIdBadge,
  FaUsers,
  FaClock,
  FaDoorOpen
} from "react-icons/fa";

const ViewInstructor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const instructor = {
    id: 1,
    name: "Michael Scott",
    username: "michael_s",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    gender: "Male",
    dob: "1975-03-15",
    course: "MBA",
    lastLogin: "2025-03-28 14:30:45",
    department: "Sales",
    status: "Active",
    address: "1725 Slough Ave, Scranton, PA",
    role: "Manager",
    image: "/assets/michael.jpg",
    // Additional practical fields
    employeeId: "FAC-2020-125",
    coursesTeaching: [
      { code: "BUS401", name: "Sales Management", schedule: "Mon/Wed 10-11:30", students: 45 },
      { code: "BUS305", name: "Business Ethics", schedule: "Tue/Thu 2-3:30", students: 32 }
    ],
    officeLocation: "Building A, Room 205",
    officeHours: "Mon/Wed 3-5 PM",
    hireDate: "2020-06-15",
    qualifications: "MBA (Cornell University), PhD (In Progress)",
    emergencyContact: "Jan Levinson (555-789-1234)"
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 ml-60 mt-14">
      {/* Back Button - Kept exactly the same */}
      <div className="max-w-6xl mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow inline-flex items-center"
        >
          ← Back
        </button>
      </div>

      {/* Profile Box - Kept exactly the same */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left Profile Card - Unchanged */}
          <div className="flex flex-col items-center w-full md:w-1/3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
            />
            <h2 className="text-xl font-bold mt-4">{instructor.name}</h2>
            <span className="text-sm mt-1 bg-purple-200 text-purple-700 px-3 py-1 rounded-full font-medium">
              {instructor.role}
            </span>
          </div>

          {/* Right Details Section - Unchanged */}
          <div className="w-full md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              Profile Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2"><FaUser className="text-purple-600" /><span className="font-medium">Username:</span> {instructor.username}</div>
              <div className="flex items-center gap-2"><FaEnvelope className="text-blue-600" /><span className="font-medium">Email:</span> {instructor.email}</div>
              <div className="flex items-center gap-2"><FaPhone className="text-green-600" /><span className="font-medium">Phone:</span> {instructor.phone}</div>
              <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /><span className="font-medium">Address:</span> {instructor.address}</div>
              <div className="flex items-center gap-2"><FaCalendarAlt className="text-indigo-600" /><span className="font-medium">Last Login:</span> {instructor.lastLogin}</div>
              <div className="flex items-center gap-2"><FaVenusMars className="text-pink-600" /><span className="font-medium">Gender:</span> {instructor.gender}</div>
              <div className="flex items-center gap-2"><FaBook className="text-yellow-600" /><span className="font-medium">Course:</span> {instructor.course}</div>
              <div className="flex items-center gap-2"><FaBuilding className="text-green-700" /><span className="font-medium">Department:</span> {instructor.department}</div>
              <div className="flex items-center gap-2"><FaBirthdayCake className="text-rose-500" /><span className="font-medium">DOB:</span> {instructor.dob}</div>
              <div className="flex items-center gap-2"><FaCheckCircle className="text-green-600" /><span className="font-medium">Status:</span> {instructor.status}</div>
            </div>

            {/* Buttons - Unchanged */}
            <div className="flex gap-4 mt-8">
              <Link
                to={`/users/instructors/edit/${instructor.id}`}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z"></path>
                </svg>
                Edit Profile
              </Link>
              <button
                onClick={() => alert("Are you sure you want to delete this profile?")}
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Delete Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Practical Information Table - Added below existing layout */}
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-2">
          Teaching Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Institutional Info */}
          <div className="space-y-4">
            <InfoRow icon={<FaIdBadge className="text-blue-500" />} label="Employee ID" value={instructor.employeeId} />
            <InfoRow icon={<FaCalendarAlt className="text-green-500" />} label="Hire Date" value={instructor.hireDate} />
            <InfoRow icon={<FaDoorOpen className="text-purple-500" />} label="Office Location" value={instructor.officeLocation} />
            <InfoRow icon={<FaClock className="text-orange-500" />} label="Office Hours" value={instructor.officeHours} />
            <InfoRow icon={<FaUser className="text-red-500" />} label="Emergency Contact" value={instructor.emergencyContact} />
          </div>
          
          {/* Right Column - Teaching Info */}
          <div>
            <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
              <FaChalkboardTeacher className="text-indigo-500" />
              Current Courses
            </h4>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Course Code</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {instructor.coursesTeaching.map((course, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.code}
                      </td>
                      <td>  <span className="text-gray-500 text-xs">{course.name}</span></td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{course.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4">
              <InfoRow icon={<FaBook className="text-yellow-500"/>} label="Qualifications" value={instructor.qualifications} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable component for info rows
const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1">{icon}</div>
    <div>
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="text-sm text-gray-800">{value}</div>
    </div>
  </div>
);

export default ViewInstructor;

