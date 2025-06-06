import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, CalendarDays, User,
  Book, Pencil, Trash2, Briefcase, BadgeCheck, UserCheck, ArrowLeft
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

const ViewPage = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const item = mockData[type]?.find((user) => user.id === parseInt(id));

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h2 className="text-3xl font-bold text-gray-700">🚨 No Data Found!</h2>
      </div>
    );
  }

  const handleDelete = () => {
    alert("User deleted successfully! (Mocked)");
    navigate(`/users/staff/${type}`);
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 md:left-10 flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold px-4 py-2 bg-white rounded-full shadow transition"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <motion.div
        className="w-full max-w-6xl bg-white p-10 flex flex-col md:flex-row gap-10 rounded-2xl shadow-lg border"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left: Profile Info */}
        <div className="flex flex-col items-center w-full md:w-1/3 border-r md:border-r-2 border-gray-200 pr-6">
          <motion.img
            src={item.profile}
            alt={item.name}
            className="w-44 h-44 rounded-full shadow-lg border-4 border-white object-cover"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{item.name}</h2>
          <span className="mt-2 px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-700">
            {item.role}
          </span>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-6">Profile Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-gray-700">
            <Detail label="Username" icon={<UserCheck size={18} />} value={item.username} />
            <Detail label="Email" icon={<Mail size={18} />} value={item.email} />
            <Detail label="Phone" icon={<Phone size={18} />} value={item.phone} />
            <Detail label="Address" icon={<MapPin size={18} />} value={item.address} />
            <Detail label="Last Login" icon={<CalendarDays size={18} />} value={item.lastLogin} />
            <Detail label="Gender" icon={<User size={18} />} value={item.gender} />
            <Detail label="Course" icon={<Book size={18} />} value={item.course} />
            <Detail label="Department" icon={<Briefcase size={18} />} value={item.department} />
            <Detail label="DOB" icon={<CalendarDays size={18} />} value={item.dob} />
            <Detail label="Status" icon={<BadgeCheck size={18} />} value={item.status} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <button
              onClick={() => navigate(`/users/staff/${type}/edit/${item.id}`)}
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow transition flex items-center gap-2"
            >
              <Pencil size={18} />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow transition flex items-center gap-2"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Reusable Detail Component
const Detail = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    {icon}
    <span>
      <strong>{label}:</strong> {value}
    </span>
  </div>
);

export default ViewPage;
