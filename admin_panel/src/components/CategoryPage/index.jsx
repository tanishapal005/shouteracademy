import React, { useState, useEffect, useRef } from "react";
import { Pencil, Trash2, Plus, X, AlertCircle, CheckCircle, Loader } from "lucide-react";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const statusOptions = [
  { value: "Active", label: "Active", color: "bg-green-100 text-green-800" },
  { value: "Inactive", label: "Inactive", color: "bg-yellow-100 text-yellow-800" }
];

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Add request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      const message = error.response.data?.message || 'Server error occurred';
      throw new Error(message);
    } else if (error.request) {
      throw new Error('No response from server. Please check your connection.');
    } else {
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
);

const CategoryComponent = () => {
  const [courseItems, setCourseItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/categories")
      .then((res) => {
        console.log("Fetched categories:", res.data);
        setCourseItems(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err.message);
      })
      .finally(() => setLoading(false));
  }, []);
}
const CourseCard = ({ course, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlfGVufDB8fDB8fHww";
          }}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
          {course.rating} ★
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{course.name}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold">{course.students?.toLocaleString() || 0}+</span>
            <span className="text-sm text-gray-500">Students</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{course.mentors || 0}+</span>
            <span className="text-sm text-gray-500">Mentors</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-4">
          ({course.reviews?.toLocaleString() || 0} Reviews)
        </div>
        
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => onEdit(course)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(course._id)}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
          >
            Delete
          </button>
        </div>
        
        <div className="text-center">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            statusOptions.find(o => o.value === course.status)?.color || 'bg-gray-100 text-gray-800'
          }`}>
            {course.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <Loader className="animate-spin h-8 w-8 text-blue-600" />
    <span className="ml-2 text-gray-600">Loading...</span>
  </div>
);

const Alert = ({ type, message, onClose }) => {
  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const bgColor = type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700';
  
  return (
    <div className={`border rounded-lg p-4 mb-4 ${bgColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="h-5 w-5 mr-2" />
          <span>{message}</span>
        </div>
        <button onClick={onClose} className="ml-4">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default function DynamicCourseManager() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const [newCourse, setNewCourse] = useState({ 
    name: "", 
    description: "", 
    status: "Active",
    rating: 4.5,
    students: 10000,
    mentors: 5,
    reviews: 8500,
    image: ""
  });
  
  const [editId, setEditId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState({ 
    show: false, 
    id: null
  });
  const [viewMode, setViewMode] = useState("table");
  const [stats, setStats] = useState(null);

  const formRef = useRef(null);

  // Axios API calls
  const fetchCourses = async (params = {}) => {
    try {
      setLoading(true);
      const response = await api.get('/courses', { params });
      setCourses(response.data.data || []);
    } catch (error) {
      showAlert('error', 'Failed to fetch courses: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourseById = async (id) => {
    try {
      const response = await api.get(`/courses/${id}`);
      return response.data.data;
    } catch (error) {
      showAlert('error', 'Failed to fetch course: ' + error.message);
      throw error;
    }
  };

  const fetchStats = async () => {
    try {
      const response = await api.get('/courses/stats');
      setStats(response.data.data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const createCourse = async (courseData) => {
    try {
      setSubmitting(true);
      const response = await api.post('/courses', courseData);
      
      setCourses([response.data.data, ...courses]);
      resetCourseForm();
      showAlert('success', 'Course created successfully!');
      fetchStats();
    } catch (error) {
      showAlert('error', 'Failed to create course: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const updateCourse = async (id, courseData) => {
    try {
      setSubmitting(true);
      const response = await api.put(`/courses/${id}`, courseData);
      
      setCourses(courses.map(course => 
        course._id === id ? response.data.data : course
      ));
      resetCourseForm();
      showAlert('success', 'Course updated successfully!');
      fetchStats();
    } catch (error) {
      showAlert('error', 'Failed to update course: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await api.delete(`/courses/${id}`);
      
      setCourses(courses.filter(course => course._id !== id));
      setShowDeleteModal({ show: false, id: null });
      showAlert('success', 'Course deleted successfully!');
      fetchStats();
    } catch (error) {
      showAlert('error', 'Failed to delete course: ' + error.message);
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  useEffect(() => {
    fetchCourses();
    fetchStats();
  }, []);

  useEffect(() => {
    if (editId && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [editId]);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!newCourse.name.trim()) return;
    
    await createCourse(newCourse);
  };

  const handleEdit = (course) => {
    setNewCourse({
      name: course.name,
      description: course.description,
      status: course.status,
      rating: course.rating,
      students: course.students,
      mentors: course.mentors,
      reviews: course.reviews,
      image: course.image
    });
    setEditId(course._id);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    await updateCourse(editId, newCourse);
  };

  const resetCourseForm = () => {
    setNewCourse({ 
      name: "", 
      description: "", 
      status: "Active",
      rating: 4.5,
      students: 10000,
      mentors: 5,
      reviews: 8500,
      image: ""
    });
    setEditId(null);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Filter courses by status
  const handleFilterByStatus = async (status) => {
    const params = status ? { status } : {};
    await fetchCourses(params);
  };

  if (loading) {
    return (
      <div className="p-4 md:p-6 max-w-7xl mx-auto mt-16">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto mt-16">
      {alert && (
        <Alert 
          type={alert.type} 
          message={alert.message} 
          onClose={() => setAlert(null)} 
        />
      )}

      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Course Management</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === "table" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === "card" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => handleFilterByStatus('')}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          All Courses
        </button>
        <button
          onClick={() => handleFilterByStatus('Active')}
          className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors"
        >
          Active Only
        </button>
        <button
          onClick={() => handleFilterByStatus('Inactive')}
          className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg transition-colors"
        >
          Inactive Only
        </button>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Total Courses</h3>
            <p className="text-2xl font-bold text-gray-900">{stats.totalCourses}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Active Courses</h3>
            <p className="text-2xl font-bold text-green-600">{stats.activeCourses}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
            <p className="text-2xl font-bold text-blue-600">{stats.totalStudents?.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Average Rating</h3>
            <p className="text-2xl font-bold text-yellow-600">{stats.averageRating?.toFixed(1)} ★</p>
          </div>
        </div>
      )}

      {/* Course Form */}
      <div 
        ref={formRef}
        className="bg-white shadow rounded-xl overflow-hidden"
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">
            {editId ? "Edit Course" : "Add New Course Category"}
          </h2>
        </div>
        
        <form onSubmit={editId ? handleUpdate : handleAddCourse}>
          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name*</label>
                <input
                  placeholder="Course Name"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  placeholder="Course description"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  placeholder="Course image URL"
                  value={newCourse.image}
                  onChange={(e) => setNewCourse({...newCourse, image: e.target.value})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Rating (0-5)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="4.5"
                  value={newCourse.rating}
                  onChange={(e) => setNewCourse({...newCourse, rating: parseFloat(e.target.value) || 0})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Students</label>
                <input
                  type="number"
                  min="0"
                  placeholder="10000"
                  value={newCourse.students}
                  onChange={(e) => setNewCourse({...newCourse, students: parseInt(e.target.value) || 0})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mentors</label>
                <input
                  type="number"
                  min="0"
                  placeholder="5"
                  value={newCourse.mentors}
                  onChange={(e) => setNewCourse({...newCourse, mentors: parseInt(e.target.value) || 0})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Reviews</label>
                <input
                  type="number"
                  min="0"
                  placeholder="8500"
                  value={newCourse.reviews}
                  onChange={(e) => setNewCourse({...newCourse, reviews: parseInt(e.target.value) || 0})}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={submitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newCourse.status}
                  onChange={(e) => setNewCourse({...newCourse, status: e.target.value})}
                  disabled={submitting}
                >
                  {statusOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 border-t flex justify-end space-x-3">
            {editId && (
              <button
                type="button"
                onClick={resetCourseForm}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={submitting}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              disabled={submitting}
            >
              {submitting && <Loader className="animate-spin h-4 w-4 mr-2" />}
              {editId ? "Update" : "Save"} Course
            </button>
          </div>
        </form>
      </div>

      {/* View Toggle Content */}
      {viewMode === "table" ? (
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr 
                    key={course._id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img 
                          src={course.image} 
                          alt={course.name}
                          className="w-12 h-12 rounded-md object-cover mr-3"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlfGVufDB8fDB8fHww";
                          }}
                        />
                        <div>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500">{course.description}</div>
                          <div className="text-xs text-gray-400 mt-1">/{course.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div>⭐ {course.rating}</div>
                        <div>👥 {course.students?.toLocaleString()}</div>
                        <div>👨‍🏫 {course.mentors} mentors</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${statusOptions.find(o => o.value === course.status)?.color || 'bg-gray-100 text-gray-800'}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(course.updatedAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-3">
                        <button
                          onClick={() => handleEdit(course)}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
                          aria-label="Edit"
                        >
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => setShowDeleteModal({ 
                            show: true, 
                            id: course._id
                          })}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors"
                          aria-label="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {courses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No courses found. Add your first course above!</p>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id}>
              <CourseCard 
                course={course} 
                onEdit={handleEdit}
                onDelete={(id) => setShowDeleteModal({ show: true, id })}
              />
            </div>
          ))}
          
          {courses.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No courses found. Add your first course above!</p>
            </div>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-red-100 text-red-600">
                  <Trash2 size={24} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Confirm Deletion
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this course? This action cannot be undone.
              </p>
              
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal({ show: false, id: null })}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(showDeleteModal.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}