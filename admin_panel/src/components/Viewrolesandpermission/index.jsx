import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { 
  Mail, Phone, MapPin, CalendarDays, UserCheck, Book, 
  Briefcase, BadgeCheck, Pencil, Trash2 
} from "lucide-react";

// Table Component (Separate at Bottom)
const ManagerDashboardTable = () => {
  const data = [
    { id: 101, name: "John Doe", role: "Sales Associate", tasksCompleted: 18, pendingTasks: 2, attendance: "95%",  review: "2025-03-10", remarks: "Great performance" },
    { id: 102, name: "Jane Smith", role: "Senior Sales Rep", tasksCompleted: 22, pendingTasks: 3, attendance: "92%",  review: "2025-03-05", remarks: "Needs improvement" },
    { id: 103, name: "David Johnson", role: "Marketing Lead", tasksCompleted: 25, pendingTasks: 5, attendance: "88%",  review: "2025-02-20", remarks: "Good consistency" },
  ];

  return (
    <div className="mt-10 p-6 bg-white border border-gray-300 shadow-lg rounded-2xl w-full">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Team Overview</h3>
      
      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-scroll w-full">
        <table className="w-full table-auto border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 border whitespace-nowrap">Employee ID</th>
              <th className="py-3 px-4 border whitespace-nowrap">Name</th>
              <th className="py-3 px-4 border whitespace-nowrap">Role</th>
              <th className="py-3 px-4 border whitespace-nowrap">Tasks Completed</th>
              <th className="py-3 px-4 border whitespace-nowrap">Pending Tasks</th>
              <th className="py-3 px-4 border whitespace-nowrap">Attendance</th>
                      <th className="py-3 px-4 border whitespace-nowrap">Last Review</th>
              <th className="py-3 px-4 border whitespace-nowrap">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id} className="text-center">
                <td className="py-3 px-4 border">{person.id}</td>
                <td className="py-3 px-4 border">{person.name}</td>
                <td className="py-3 px-4 border">{person.role}</td>
                <td className="py-3 px-4 border">{person.tasksCompleted}</td>
                <td className="py-3 px-4 border">{person.pendingTasks}</td>
                <td className="py-3 px-4 border">{person.attendance}</td>
            
                <td className="py-3 px-4 border">{person.review}</td>
                <td className="py-3 px-4 border">{person.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


// Main Profile Page Component
const ViewPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (isConfirmed) {
      alert("Profile deleted successfully! (Mocked)");
      navigate(-1); // Navigate back to the previous page
    }
  };

  const handleEdit = () => {
    alert("Edit function triggered! (Mocked)");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 bg-gray-100 p-6">
      {/* Profile Section */}
      <motion.div
        className="w-full max-w-5xl bg-white p-10 flex flex-col md:flex-row gap-10 border border-gray-200 rounded-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left Section - Profile */}
        <div className="flex flex-col items-center w-full md:w-1/3 bg-white p-6 rounded-2xl border border-gray-300 shadow-md">
          <motion.img
            src="https://i.pravatar.cc/150?img=5"
            alt="Michael Scott"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white object-cover"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <h2 className="text-gray-800 text-2xl font-bold mt-4">Michael Scott</h2>
          <span className="mt-2 px-4 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-medium">
            Manager
          </span>
        </div>

        {/* Right Section - Profile Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">Profile Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
            <div className="flex items-center gap-3">
              <UserCheck size={20} className="text-indigo-500" />
              <span>Username: michael_s</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-blue-600" />
              <span>michael@dundermifflin.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-green-600" />
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-red-500" />
              <span>1725 Slough Ave, Scranton, PA</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="text-indigo-500" />
              <span>Last Login: 2025-03-28</span>
            </div>
            <div className="flex items-center gap-3">
              <Book size={20} className="text-yellow-600" />
              <span>Course: MBA</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={20} className="text-emerald-600" />
              <span>Department: Sales</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="text-purple-500" />
              <span>DOB: 1975-03-15</span>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck size={20} className="text-green-500" />
              <span>Status: Active</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t mt-6">
          <button
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition-all duration-300 flex items-center gap-2"
              onClick={() => navigate("/editrolesandpermission")}
            >
              <Pencil size={18} />
              Edit Profile
            </button>
            <button
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium shadow-md transition-all duration-300 flex items-center gap-2"
              onClick={handleDelete}
            >
              <Trash2 size={18} />
              Delete Profile
            </button>
          </div>
        </div>
      </motion.div>

    

      {/* Manager Dashboard Table (Separate at Bottom) */}
      <ManagerDashboardTable />
    </div>
  );
};

export default ViewPage;
