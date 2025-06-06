import React, { useState } from "react";
import { FaPhone, FaUser, FaBirthdayCake, FaBook, FaRupeeSign } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdWork, MdSchool, MdHistory, MdPayment } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { BsGenderMale, BsCheckCircle, BsCash } from "react-icons/bs";
import { SiPaytm, SiPhonepe } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const ViewStudentPage = () => {
  const navigate = useNavigate();
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    enrollmentDate: new Date().toISOString().split('T')[0],
    paymentMethod: "cash",
    amount: "",
    status: "Not Started",
    progress: "0%",
    grade: "-"
  });

  // Original student data (unchanged)
  const student = {
    id: 1,
    name: "Michael Scott",
    role: "Student",
    username: "michael_s",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    address: "1725 Slough Ave, Scranton",
    lastLogin: "2025-03-28",
    gender: "Male",
    course: "MBA",
    dob: "1975-03-15",
    status: "Active",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  };

  // Original enrolled courses with added payment info
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 101,
      courseName: "Digital Marketing Fundamentals",
      enrollmentDate: "2025-01-15",
      paymentMethod: "UPI",
      amount: "₹1999",
      completionDate: "2025-03-20",
      status: "Completed",
      progress: "100%",
      grade: "A"
    },
    {
      id: 102,
      courseName: "Advanced SEO Techniques",
      enrollmentDate: "2025-02-10",
      paymentMethod: "cash",
      amount: "₹2499",
      completionDate: "-",
      status: "In Progress",
      progress: "65%",
      grade: "-"
    },
    {
      id: 103,
      courseName: "Social Media Marketing",
      enrollmentDate: "2025-03-01",
      paymentMethod: "UPI",
      amount: "₹1799",
      completionDate: "-",
      status: "Not Started",
      progress: "0%",
      grade: "-"
    }
  ]);

  // Original student history with enhanced payment info
  const [studentHistory, setStudentHistory] = useState([
    {
      id: 1,
      activity: "Course Enrollment",
      description: "Enrolled in Digital Marketing Fundamentals (UPI payment ₹1999)",
      date: "2025-01-15",
      time: "10:30 AM"
    },
    {
      id: 2,
      activity: "Payment",
      description: "Paid ₹1999 via UPI for Digital Marketing course",
      date: "2025-01-15",
      time: "10:35 AM"
    },
    {
      id: 3,
      activity: "Course Completion",
      description: "Completed Digital Marketing Fundamentals with grade A",
      date: "2025-03-20",
      time: "03:45 PM"
    },
    {
      id: 4,
      activity: "Course Enrollment",
      description: "Enrolled in Advanced SEO Techniques (Cash payment ₹2499)",
      date: "2025-02-10",
      time: "11:20 AM"
    },
    {
      id: 5,
      activity: "Course Enrollment",
      description: "Enrolled in Social Media Marketing (UPI payment ₹1799)",
      date: "2025-03-01",
      time: "02:15 PM"
    }
  ]);

  const availableCourses = [
    "Web Development Bootcamp",
    "Data Science Fundamentals",
    "Graphic Design Masterclass",
    "Business Analytics",
    "Mobile App Development"
  ];

  const handleAddCourse = () => {
    const newCourseEntry = {
      id: Math.max(...enrolledCourses.map(c => c.id), 0) + 1,
      courseName: newCourse.courseName,
      enrollmentDate: newCourse.enrollmentDate,
      paymentMethod: newCourse.paymentMethod,
      amount: `₹${newCourse.amount}`,
      completionDate: "-",
      status: newCourse.status,
      progress: newCourse.progress,
      grade: newCourse.grade
    };

    setEnrolledCourses([...enrolledCourses, newCourseEntry]);
    
    // Add to history
    const newHistoryEntry = {
      id: Math.max(...studentHistory.map(h => h.id), 0) + 1,
      activity: "Course Enrollment",
      description: `Enrolled in ${newCourse.courseName} (${newCourse.paymentMethod === 'cash' ? 'Cash' : 'UPI'} payment ₹${newCourse.amount})`,
      date: newCourse.enrollmentDate,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setStudentHistory([newHistoryEntry, ...studentHistory]);
    setShowAddCourseModal(false);
    setNewCourse({
      courseName: "",
      enrollmentDate: new Date().toISOString().split('T')[0],
      paymentMethod: "cash",
      amount: "",
      status: "Not Started",
      progress: "0%",
      grade: "-"
    });
  };

  const handleEdit = () => {
    navigate(`/students/edit/${student.id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-6xl mt-20 p-6 bg-white rounded-xl shadow-lg ml-72">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
      >
        ← Back
      </button>

      {/* Student Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img
            src={student.image}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-md object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">{student.name}</h2>
          <span className="text-sm bg-purple-100 text-purple-700 px-4 py-1 rounded-full mt-2 font-semibold">
            {student.role}
          </span>
        </div>

        <div className="flex-1 w-full">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-600" />
              <strong>Username:</strong> {student.username}
            </div>

            <div className="flex items-center gap-2">
              <MdEmail className="text-gray-600" />
              <strong>Email:</strong> {student.email}
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-600" />
              <strong>Phone:</strong> {student.phone}
            </div>

            <div className="flex items-center gap-2">
              <MdLocationOn className="text-gray-600" />
              <strong>Address:</strong> {student.address}
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineLogin className="text-gray-600" />
              <strong>Last Login:</strong> {student.lastLogin}
            </div>

            <div className="flex items-center gap-2">
              <BsGenderMale className="text-gray-600" />
              <strong>Gender:</strong> {student.gender}
            </div>

            <div className="flex items-center gap-2">
              <MdSchool className="text-gray-600" />
              <strong>Course:</strong> {student.course}
            </div>

            <div className="flex items-center gap-2">
              <FaBirthdayCake className="text-gray-600" />
              <strong>DOB:</strong> {student.dob}
            </div>

            <div className="flex items-center gap-2">
              <BsCheckCircle className="text-green-600" />
              <strong>Status:</strong> {student.status}
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleEdit}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
            >
              Edit Profile
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md">
              Delete Profile
            </button>
          </div>
        </div>
      </div>

      {/* Enrolled Courses Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaBook className="text-blue-600" />
            <h3 className="text-xl font-semibold">Enrolled Courses</h3>
          </div>
          <button
            onClick={() => setShowAddCourseModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <span>+</span> Add Course
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Course Name</th>
                <th className="py-2 px-4 border-b text-left">Enrollment Date</th>
                <th className="py-2 px-4 border-b text-left">Payment</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Progress</th>
                <th className="py-2 px-4 border-b text-left">Grade</th>
              </tr>
            </thead>
            <tbody>
              {enrolledCourses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{course.courseName}</td>
                  <td className="py-2 px-4 border-b">{course.enrollmentDate}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center gap-2">
                      {course.paymentMethod === "cash" ? (
                        <BsCash className="text-green-600" />
                      ) : (
                        <SiPaytm className="text-blue-600" />
                      )}
                      <div>
                        <div className="font-medium">{course.amount}</div>
                        <div className="text-xs text-gray-500">{course.paymentMethod}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      course.status === "Completed" ? "bg-green-100 text-green-800" :
                      course.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          course.progress === "100%" ? "bg-green-600" :
                          course.progress === "0%" ? "bg-gray-400" :
                          "bg-blue-600"
                        }`} 
                        style={{width: course.progress}}
                      ></div>
                    </div>
                    <span className="text-xs mt-1 block">{course.progress}</span>
                  </td>
                  <td className="py-2 px-4 border-b">{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal with outside click handler */}
      {showAddCourseModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowAddCourseModal(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add New Course</h3>
              <button 
                onClick={() => setShowAddCourseModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Course Name*</label>
                <select
                  value={newCourse.courseName}
                  onChange={(e) => setNewCourse({...newCourse, courseName: e.target.value})}
                  className="w-full border rounded-lg p-2"
                  required
                >
                  <option value="">Select a course</option>
                  {availableCourses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Enrollment Date</label>
                <input
                  type="date"
                  value={newCourse.enrollmentDate}
                  onChange={(e) => setNewCourse({...newCourse, enrollmentDate: e.target.value})}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Payment Method*</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={newCourse.paymentMethod === "cash"}
                      onChange={() => setNewCourse({...newCourse, paymentMethod: "cash"})}
                    />
                    <BsCash className="text-green-600" />
                    Cash
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="UPI"
                      checked={newCourse.paymentMethod === "UPI"}
                      onChange={() => setNewCourse({...newCourse, paymentMethod: "UPI"})}
                    />
                    <SiPhonepe className="text-blue-600" />
                    UPI
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Amount (₹)*</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={newCourse.amount}
                  onChange={(e) => setNewCourse({...newCourse, amount: e.target.value})}
                  className="w-full border rounded-lg p-2"
                  required
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAddCourseModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddCourse}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                disabled={!newCourse.courseName || !newCourse.amount}
              >
                Add Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student History Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <MdHistory className="text-purple-600" />
          <h3 className="text-xl font-semibold">Student History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Activity</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {studentHistory.map((history) => (
                <tr key={history.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{history.activity}</td>
                  <td className="py-2 px-4 border-b">{history.description}</td>
                  <td className="py-2 px-4 border-b">{history.date}</td>
                  <td className="py-2 px-4 border-b">{history.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewStudentPage;