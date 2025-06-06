import { useState } from 'react';
import {
  FiPlay,
  FiCalendar,
  FiVideo,
  FiClock,
  FiUsers,
  FiBookmark,
  FiSearch,
  FiX
} from 'react-icons/fi';

const LiveSessions = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    instructor: '',
    date: '',
    time: ''
  });

  const liveClasses = [
    {
      id: 1,
      title: 'Advanced React Hooks',
      instructor: 'Amit Sharma',
      time: '10:30 AM - 12:00 PM',
      date: 'Today',
      attendees: 24,
      isLive: true
    },
    {
      id: 2,
      title: 'Node.js Microservices',
      instructor: 'Priya Patel',
      time: '2:00 PM - 3:30 PM',
      date: 'Tomorrow',
      attendees: 0,
      isLive: false
    }
  ];

  const recordedClasses = [
    {
      id: 101,
      title: 'JavaScript Fundamentals',
      instructor: 'Rahul Verma',
      duration: '45 min',
      date: '5 days ago',
      views: 124,
      progress: 65
    },
    {
      id: 102,
      title: 'CSS Tailwind Masterclass',
      instructor: 'Neha Gupta',
      duration: '1h 15min',
      date: '2 days ago',
      views: 89,
      progress: 100
    }
  ];

  const handleScheduleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    console.log('Scheduled Class:', formData);
    setShowSchedulePopup(false);
    setFormData({ title: '', instructor: '', date: '', time: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 ml-64 mt-16 relative">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Live Sessions</h2>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'live' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('live')}
          >
            Live Classes
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'recorded' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('recorded')}
          >
            Recorded
          </button>
        </div>
      </div>

      {/* Live Tab */}
      {activeTab === 'live' ? (
        <div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-gray-700">Upcoming Live Classes</h3>
              <button
                className="text-blue-600 text-sm flex items-center"
                onClick={() => setShowSchedulePopup(true)}
              >
                <FiCalendar className="mr-1" /> Schedule New
              </button>
            </div>

            <div className="space-y-3">
              {liveClasses.map((classItem) => (
                <div key={classItem.id} className={`p-4 border rounded-lg ${classItem.isLive ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{classItem.title}</h4>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <FiUsers className="mr-1" /> {classItem.instructor}
                      </p>
                    </div>
                    {classItem.isLive && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full h-6">
                        LIVE NOW
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <FiClock className="mr-1" />
                    <span>{classItem.date}, {classItem.time}</span>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {classItem.attendees} {classItem.attendees === 1 ? 'attendee' : 'attendees'}
                    </span>
                    <button className={`px-3 py-1 rounded text-sm ${classItem.isLive ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`}>
                      {classItem.isLive ? 'Join Now' : 'Set Reminder'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Recorded Classes */}
          <div className="mb-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search recordings..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            {recordedClasses.map((classItem) => (
              <div key={classItem.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{classItem.title}</h4>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <FiUsers className="mr-1" /> {classItem.instructor}
                    </p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiBookmark />
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <FiVideo className="mr-1" />
                  <span>{classItem.duration} • {classItem.date}</span>
                </div>
                {classItem.progress < 100 ? (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${classItem.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{classItem.progress}% completed</span>
                      <span>{classItem.views} views</span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-green-600 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Completed
                    </span>
                    <span className="text-xs text-gray-500">{classItem.views} views</span>
                  </div>
                )}
                <button className="mt-2 w-full py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm">
                  Watch {classItem.progress < 100 ? 'Continue' : 'Again'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Schedule New Popup Modal */}
      {showSchedulePopup && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={() => setShowSchedulePopup(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
      >
        <FiX size={24} />
      </button>

      <h3 className="text-2xl font-bold mb-6 text-gray-800">Schedule New Session</h3>

      <form onSubmit={handleScheduleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Session Title *</label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Advanced React Workshop"
              value={formData.title}
              onChange={handleScheduleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instructor *</label>
            <select
              name="instructor"
              value={formData.instructor}
              onChange={handleScheduleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Instructor</option>
              <option value="Amit Sharma">Amit Sharma</option>
              <option value="Priya Patel">Priya Patel</option>
              <option value="Rahul Verma">Rahul Verma</option>
              <option value="Neha Gupta">Neha Gupta</option>
              <option value="other">Other (specify below)</option>
            </select>
            {formData.instructor === 'other' && (
              <input
                type="text"
                name="customInstructor"
                placeholder="Enter instructor name"
                className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Session Type *</label>
            <div className="grid grid-cols-2 gap-2">
              {['Lecture', 'Workshop', 'Q&A', 'Demo'].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="sessionType"
                    value={type}
                    checked={formData.sessionType === type}
                    onChange={handleScheduleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleScheduleChange}
                min={new Date().toISOString().split('T')[0]}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleScheduleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration *</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleScheduleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Duration</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Participants</label>
            <input
              type="number"
              name="maxParticipants"
              min="1"
              max="100"
              value={formData.maxParticipants}
              onChange={handleScheduleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Full Width Fields */}
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Session Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Brief description of the session..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resources (Optional)</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500">PDF, PPT, DOCX (MAX. 10MB each)</p>
                </div>
                <input type="file" className="hidden" multiple />
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowSchedulePopup(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Schedule Session
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default LiveSessions;
