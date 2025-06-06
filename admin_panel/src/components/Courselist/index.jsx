import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Trash2 } from "lucide-react";
import Paths from "../../routes/Paths";

const dummyCourses = [
  { 
    id: 2022, 
    title: "Digital Marketing", 
    image: "https://picsum.photos/50?random=1", 
    category: "Marketing", 
    price: "$200", 
    students: 45, 
    status: "Published", 
    publishedDate: "2023-05-10", 
    active: true
  },
  { 
    id: 2010, 
    title: "Web Development", 
    image: "https://picsum.photos/50?random=2", 
    category: "Development", 
    price: "$300", 
    students: 120, 
    status: "Draft", 
    publishedDate: "2023-06-15", 
    active: false
  },
  { 
    id: 2008, 
    title: "Graphic Designing", 
    image: "https://picsum.photos/50?random=3", 
    category: "Design", 
    price: "$180", 
    students: 80, 
    status: "Published", 
    publishedDate: "2023-07-20", 
    active: true
  },
];

const CourseTable = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ 
    name: "", 
    id: "", 
    status: "All", 
    publishedDate: "", 
    active: "All" 
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const generatePrefix = (title) => 
    title.split(" ").map((word) => word[0]).join("").toUpperCase();
  
  const convertToINR = (usdPrice) => 
    `₹${(parseFloat(usdPrice.replace("$", "")) * 80).toLocaleString("en-IN")}`;

  const filteredCourses = dummyCourses.filter((course) =>
    (filters.name === "" || course.title.toLowerCase().includes(filters.name.toLowerCase())) &&
    (filters.id === "" || course.id.toString().includes(filters.id)) &&
    (filters.status === "All" || course.status === filters.status) &&
    (filters.publishedDate === "" || course.publishedDate === filters.publishedDate) &&
    (filters.active === "All" || 
     (filters.active === "Active" && course.active) || 
     (filters.active === "Inactive" && !course.active))
  );

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course List</h2>

      {/* Filter Bar */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <input 
            type="text" 
            name="name" 
            className="border rounded p-2 w-full" 
            onChange={handleFilterChange} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Course ID</label>
          <input 
            type="text" 
            name="id" 
            className="border rounded p-2 w-full" 
            onChange={handleFilterChange} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Published Date</label>
          <input 
            type="date" 
            name="publishedDate" 
            className="border rounded p-2 w-full" 
            onChange={handleFilterChange} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Active Status</label>
          <select 
            name="active" 
            className="border rounded p-2 w-full" 
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Scrollable Table with Sticky Header */}
      <div className="overflow-x-auto max-h-[500px]">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="sticky top-0 bg-gray-200 shadow-md">
            <tr className="text-gray-700 text-left">
              <th className="border p-3">Course ID</th>
              <th className="border p-3">Course Name</th>
              <th className="border p-3">Image</th>
              <th className="border p-3">Category</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Students</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Published Date</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course, index) => (
              <tr key={course.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="p-3 border font-bold">{`${generatePrefix(course.title)}_${course.id}`}</td>
                <td className="p-3 border font-semibold">{course.title}</td>
                <td className="p-3 border">
                  <img src={course.image} alt={course.title} className="w-10 h-10 rounded-md" />
                </td>
                <td className="p-3 border">{course.category}</td>
                <td className="p-3 border font-medium">{convertToINR(course.price)}</td>
                <td className="p-3 border">{course.students}</td>
                <td className={`p-3 border font-semibold ${course.status === "Published" ? "text-green-500" : "text-red-500"}`}>
                  {course.status}
                </td>
                <td className="p-3 border">{course.publishedDate}</td>
                <td className="p-3 border flex space-x-2">
                  <button 
                    onClick={() => navigate(Paths.VIEWCOURSES.replace(":id", course.id))} 
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 flex items-center">
                    <Trash2 className="w-4 h-4"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseTable;