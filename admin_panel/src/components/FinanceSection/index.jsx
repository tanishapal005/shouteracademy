import React, { useState } from "react";
import {
  Search,
  Filter,
  Play,
  Clock,
  Users,
  Calendar,
  ChevronDown,
} from "lucide-react";

// Session data
const sessionData = [
  {
    id: 1,
    course: "Digital Marketing",
    instructor: "John Doe",
    type: "Live",
    date: "2023-06-15",
    duration: "2 hours",
    attendees: 45,
    status: "Completed",
  },
  {
    id: 2,
    course: "Full Stack Development",
    instructor: "Jane Smith",
    type: "Recorded",
    date: "2023-06-10",
    duration: "3.5 hours",
    views: 128,
    status: "Available",
  },
  {
    id: 3,
    course: "Data Science",
    instructor: "Mike Johnson",
    type: "Live",
    date: "2023-06-18",
    duration: "1.5 hours",
    attendees: 32,
    status: "Upcoming",
  },
  {
    id: 4,
    course: "Digital Marketing",
    instructor: "John Doe",
    type: "Recorded",
    date: "2023-05-28",
    duration: "2.5 hours",
    views: 215,
    status: "Available",
  },
  {
    id: 5,
    course: "UX/UI Design",
    instructor: "Sarah Williams",
    type: "Live",
    date: "2023-06-20",
    duration: "2 hours",
    attendees: 0,
    status: "Upcoming",
  },
  {
    id: 6,
    course: "Full Stack Development",
    instructor: "Jane Smith",
    type: "Recorded",
    date: "2023-05-15",
    duration: "4 hours",
    views: 187,
    status: "Available",
  },
];

const FinanceSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const courses = ["All", ...new Set(sessionData.map((s) => s.course))];
  const types = ["All", "Live", "Recorded"];
  const statuses = ["All", "Upcoming", "Completed", "Available"];

  const filteredSessions = sessionData.filter((session) => {
    const matchesSearch =
      session.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = courseFilter === "All" || session.course === courseFilter;
    const matchesType = typeFilter === "All" || session.type === typeFilter;
    const matchesStatus = statusFilter === "All" || session.status === statusFilter;
    return matchesSearch && matchesCourse && matchesType && matchesStatus;
  });

  return (
    <div className="rounded-lg p-6">
      {/* Session Header */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Course Sessions</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search sessions..."
                className="pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${showFilters ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                className="w-full border rounded-md px-3 py-2"
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
              >
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                className="w-full border rounded-md px-3 py-2"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                className="w-full border rounded-md px-3 py-2"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Sessions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance/Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSessions.length > 0 ? (
                filteredSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{session.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{session.instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          session.type === "Live"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {session.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-gray-400" />
                        {session.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-gray-400" />
                        {session.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-gray-400" />
                        {session.type === "Live"
                          ? `${session.attendees} attended`
                          : `${session.views} views`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          session.status === "Upcoming"
                            ? "bg-yellow-100 text-yellow-800"
                            : session.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {session.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                        <Play size={14} />
                        {session.type === "Live" ? "Join" : "Watch"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                    No sessions found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800">Total Live Sessions</h3>
            <p className="text-2xl font-bold text-blue-900">
              {sessionData.filter((s) => s.type === "Live").length}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-purple-800">Total Recorded Sessions</h3>
            <p className="text-2xl font-bold text-purple-900">
              {sessionData.filter((s) => s.type === "Recorded").length}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-800">Total Courses</h3>
            <p className="text-2xl font-bold text-gray-900">{courses.length - 1}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
