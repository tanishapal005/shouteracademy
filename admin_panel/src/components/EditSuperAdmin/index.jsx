import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Mail, Phone, MapPin, CalendarDays, User,
  Book, Briefcase, BadgeCheck, UserCheck, Save, CornerUpLeft
} from "lucide-react";

const mockData = {
  admin: [
    {
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
    },
  ],
};

const EditPage = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const userData = mockData[type]?.find((user) => user.id === parseInt(id));
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Changes saved successfully! (Mocked)");
    navigate(`/users/staff/${type}`);
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-red-600">User Not Found 🚨</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6 ml-48 mt-11">
      <form
        onSubmit={handleSave}
        className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Edit Profile</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          {/* Name */}
          <div className="flex items-center gap-3">
            <UserCheck size={20} className="text-indigo-500" />
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-indigo-500" />
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={20} className="text-indigo-500" />
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-indigo-500" />
            <input
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Last Login (Date) */}
          <div className="flex items-center gap-3">
            <CalendarDays size={20} className="text-indigo-500" />
            <input
              name="lastLogin"
              type="date"
              value={formData.lastLogin || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Gender Dropdown */}
          <div className="flex items-center gap-3">
            <User size={20} className="text-indigo-500" />
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Course Dropdown */}
          <div className="flex items-center gap-3">
            <Book size={20} className="text-indigo-500" />
            <select
              name="course"
              value={formData.course || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Course</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BBA">BBA</option>
            </select>
          </div>

          {/* Department Dropdown */}
          <div className="flex items-center gap-3">
            <Briefcase size={20} className="text-indigo-500" />
            <select
              name="department"
              value={formData.department || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Department</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="flex items-center gap-3">
            <CalendarDays size={20} className="text-indigo-500" />
            <input
              name="dob"
              type="date"
              value={formData.dob || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex items-center gap-3">
            <BadgeCheck size={20} className="text-indigo-500" />
            <select
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium shadow-sm flex items-center gap-2"
          >
            <CornerUpLeft size={18} />
            Back
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;





