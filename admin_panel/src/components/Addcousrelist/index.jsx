import React, { useState } from "react";

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [courseData, setCourseData] = useState({
    instructor: [],
    title: "",
    description: "",
    category: "",
    price: "",
    offerPrice: "",
    duration: "",
    level: "",
    language: "",
    visibility: "",
    thumbnail: null,
    highlights: [
      { text: "" },
      { text: "" }
    ],
    whyJoin: [
      {
        title: "",
        description: ""
      }
    ],
    mentors: [
      {
        name: "",
        role: "",
        bio: "",
        image: null
      }
    ],
    tools: [],
    howItWorks: [
      {
        step: 1,
        title: "",
        description: ""
      }
    ],
    faqs: [
      {
        question: "",
        answer: ""
      }
    ],
    modules: [
      {
        title: "",
        duration: "",
        sessionType: "",
        weeks: [
          {
            title: "",
            units: [
              {
                title: "",
                lessons: [
                  {
                    title: "",
                    mediaType: "",
                    content: "",
                    duration: ""
                  }
                ]
              }
            ]
          }
        ],
        liveSessions: [
          {
            title: "Live Q&A Session",
            date: "",
            time: "",
            duration: "1 hour",
            meetingLink: ""
          }
        ],
        recordedSessions: [
          {
            title: "",
            videoUrl: "",
            duration: ""
          }
        ]
      }
    ]
  });

  const resetForm = () => {
    setCourseData({
      instructor: [],
      title: "",
      description: "",
      category: "Digital Marketing",
      price: "",
      offerPrice: "",
      duration: "",
      level: "",
      language: "",
      visibility: "Published",
      thumbnail: null,
      highlights: [
        { text: "" },
        { text: "" }
      ],
      whyJoin: [
        {
          title: "",
          description: ""
        }
      ],
      mentors: [
        {
          name: "",
          role: "",
          bio: "",
          image: null
        }
      ],
      tools: [],
      howItWorks: [
        {
          step: 1,
          title: "",
          description: ""
        }
      ],
      faqs: [
        {
          question: "",
          answer: ""
        }
      ],
      modules: [
        {
          title: "",
          duration: "",
          sessionType: "",
          weeks: [
            {
              title: "",
              units: [
                {
                  title: "",
                  lessons: [
                    {
                      title: "",
                      mediaType: "",
                      content: "",
                      duration: ""
                    }
                  ]
                }
              ]
            }
          ],
          liveSessions: [
            {
              title: "",
              date: "",
              time: "",
              duration: "",
              meetingLink: ""
            }
          ],
          recordedSessions: [
            {
              title: "",
              videoUrl: "",
              duration: ""
            }
          ]
        }
      ]
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      ...courseData,
      id: Date.now(),
      thumbnailURL: courseData.thumbnail
        ? URL.createObjectURL(courseData.thumbnail)
        : null,
    };
    setCourses([...courses, newCourse]);
    resetForm();
  };

  const handleCancel = () => {
    setShowModal(true);
  };

  const handleSaveAsDraft = () => {
    const draft = {
      ...courseData,
      id: Date.now(),
      thumbnailURL: courseData.thumbnail
        ? URL.createObjectURL(courseData.thumbnail)
        : null,
    };
    setDrafts([...drafts, draft]);
    resetForm();
    setShowModal(false);
  };

  const handleDiscard = () => {
    resetForm();
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileChange = (e) => {
    setCourseData({ ...courseData, thumbnail: e.target.files[0] });
  };

  // Handlers for additional sections
  const handleAddHighlight = () => {
    setCourseData(prev => ({
      ...prev,
      highlights: [...prev.highlights, { icon: "⭐", text: "" }]
    }));
  };

  const handleHighlightChange = (index, field, value) => {
    const newHighlights = [...courseData.highlights];
    newHighlights[index][field] = value;
    setCourseData({ ...courseData, highlights: newHighlights });
  };

  const handleRemoveHighlight = (index) => {
    const newHighlights = [...courseData.highlights];
    newHighlights.splice(index, 1);
    setCourseData({ ...courseData, highlights: newHighlights });
  };

  const handleAddWhyJoin = () => {
    setCourseData(prev => ({
      ...prev,
      whyJoin: [...prev.whyJoin, { title: "", description: "" }]
    }));
  };

  const handleWhyJoinChange = (index, field, value) => {
    const newWhyJoin = [...courseData.whyJoin];
    newWhyJoin[index][field] = value;
    setCourseData({ ...courseData, whyJoin: newWhyJoin });
  };

  const handleRemoveWhyJoin = (index) => {
    const newWhyJoin = [...courseData.whyJoin];
    newWhyJoin.splice(index, 1);
    setCourseData({ ...courseData, whyJoin: newWhyJoin });
  };

  const handleAddMentor = () => {
    setCourseData(prev => ({
      ...prev,
      mentors: [...prev.mentors, { name: "", role: "", bio: "", image: null }]
    }));
  };

  const handleMentorChange = (index, field, value) => {
    const newMentors = [...courseData.mentors];
    newMentors[index][field] = value;
    setCourseData({ ...courseData, mentors: newMentors });
  };

  const handleMentorImageChange = (index, file) => {
    const newMentors = [...courseData.mentors];
    newMentors[index].image = file;
    setCourseData({ ...courseData, mentors: newMentors });
  };

  const handleRemoveMentor = (index) => {
    const newMentors = [...courseData.mentors];
    newMentors.splice(index, 1);
    setCourseData({ ...courseData, mentors: newMentors });
  };

  const handleAddTool = () => {
    setCourseData(prev => ({
      ...prev,
      tools: [...prev.tools, ""]
    }));
  };

  const handleToolChange = (index, value) => {
    const newTools = [...courseData.tools];
    newTools[index] = value;
    setCourseData({ ...courseData, tools: newTools });
  };

  const handleRemoveTool = (index) => {
    const newTools = [...courseData.tools];
    newTools.splice(index, 1);
    setCourseData({ ...courseData, tools: newTools });
  };

  const handleAddHowItWorks = () => {
    setCourseData(prev => ({
      ...prev,
      howItWorks: [...prev.howItWorks, { step: prev.howItWorks.length + 1, title: "", description: "" }]
    }));
  };

  const handleHowItWorksChange = (index, field, value) => {
    const newHowItWorks = [...courseData.howItWorks];
    newHowItWorks[index][field] = value;
    setCourseData({ ...courseData, howItWorks: newHowItWorks });
  };

  const handleRemoveHowItWorks = (index) => {
    const newHowItWorks = [...courseData.howItWorks];
    newHowItWorks.splice(index, 1);
    const renumbered = newHowItWorks.map((item, idx) => ({
      ...item,
      step: idx + 1
    }));
    setCourseData({ ...courseData, howItWorks: renumbered });
  };

  const handleAddFaq = () => {
    setCourseData(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }]
    }));
  };

  const handleFaqChange = (index, field, value) => {
    const newFaqs = [...courseData.faqs];
    newFaqs[index][field] = value;
    setCourseData({ ...courseData, faqs: newFaqs });
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = [...courseData.faqs];
    newFaqs.splice(index, 1);
    setCourseData({ ...courseData, faqs: newFaqs });
  };

  // Module Handlers
  const handleAddModule = () => {
    setCourseData((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        {
          title: "",
          duration: "",
          sessionType: "live",
          weeks: [
            {
              title: "",
              units: [
                {
                  title: "",
                  lessons: [
                    {
                      title: "",
                      mediaType: "text",
                      content: "",
                      duration: "",
                    },
                  ],
                },
              ],
            },
          ],
          liveSessions: [
            {
              title: "",
              date: "",
              time: "",
              duration: "",
              meetingLink: "",
            },
          ],
          recordedSessions: [
            {
              title: "",
              videoUrl: "",
              duration: "",
            },
          ],
        },
      ],
    }));
  };

  const handleModuleChange = (e, modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex][e.target.name] = e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleModuleSessionTypeChange = (modIndex, type) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].sessionType = type;
    setCourseData({ ...courseData, modules: newModules });
  };

  // Week Handlers
  const handleAddWeek = (modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks.push({
      title: "",
      units: [
        {
          title: "",
          lessons: [
            {
              title: "",
              mediaType: "text",
              content: "",
              duration: "",
            },
          ],
        },
      ],
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleWeekChange = (e, modIndex, weekIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].title = e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  // Unit Handlers
  const handleAddUnit = (modIndex, weekIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].units.push({
      title: "",
      lessons: [
        {
          title: "",
          mediaType: "text",
          content: "",
          duration: "",
        },
      ],
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleUnitChange = (e, modIndex, weekIndex, unitIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].units[unitIndex].title =
      e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  // Lesson Handlers
  const handleAddLesson = (modIndex, weekIndex, unitIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].units[unitIndex].lessons.push({
      title: "",
      mediaType: "text",
      content: "",
      duration: "",
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleLessonChange = (e, modIndex, weekIndex, unitIndex, lessonIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].units[unitIndex].lessons[
      lessonIndex
    ][e.target.name] = e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleLessonMediaTypeChange = (
    modIndex,
    weekIndex,
    unitIndex,
    lessonIndex,
    type
  ) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].units[unitIndex].lessons[
      lessonIndex
    ].mediaType = type;
    // Reset content when media type changes
    newModules[modIndex].weeks[weekIndex].units[unitIndex].lessons[
      lessonIndex
    ].content = "";
    setCourseData({ ...courseData, modules: newModules });
  };

  // Live Sessions Handlers (module-specific)
  const handleAddLiveSession = (modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].liveSessions.push({
      title: "",
      date: "",
      time: "",
      duration: "",
      meetingLink: "",
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleLiveSessionChange = (e, modIndex, sessionIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].liveSessions[sessionIndex][e.target.name] =
      e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleRemoveLiveSession = (modIndex, sessionIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].liveSessions.splice(sessionIndex, 1);
    setCourseData({ ...courseData, modules: newModules });
  };

  // Recorded Sessions Handlers (module-specific)
  const handleAddRecordedSession = (modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].recordedSessions.push({
      title: "",
      videoUrl: "",
      duration: "",
    });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleRecordedSessionChange = (e, modIndex, sessionIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].recordedSessions[sessionIndex][e.target.name] =
      e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleRemoveRecordedSession = (modIndex, sessionIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].recordedSessions.splice(sessionIndex, 1);
    setCourseData({ ...courseData, modules: newModules });
  };


  const handleToolImageChange = (index, file) => {
    if (!file) return;
    const newTools = [...courseData.tools];
    newTools[index].image = file;
    setCourseData({ ...courseData, tools: newTools });
  };

  // Handler for removing tool image
  const handleRemoveToolImage = (index) => {
    const newTools = [...courseData.tools];
    newTools[index].image = null;
    setCourseData({ ...courseData, tools: newTools });
  };

  return (
    <div className="max-w-5xl p-6 bg-white shadow-md rounded-lg mt-20 ml-64">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add New Digital Marketing Course
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        {/* Basic Course Info Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Title*</label>
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
            <select
              name="category"
              value={courseData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              autoComplete="off"
            >
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="App development">App development</option>
              <option value="Cyber security">Cyber security</option>
              <option value="Designing courses">Designing courses</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instructors</label>
          <div className="border p-2 rounded bg-white">
            <div className="space-y-1 max-h-40 overflow-y-auto">
              {[
                "John Doe (Web Development)",
                "Priya Sharma (Data Science)",
                "Amit Patel (Programming)",
                "Sarah Khan (UI/UX Design)",
                "Rajesh Kumar (Mobile Development)"
              ].map((instructor) => (
                <div
                  key={instructor}
                  onClick={() => {
                    const alreadySelected = courseData.instructor.includes(instructor);
                    setCourseData((prev) => ({
                      ...prev,
                      instructor: alreadySelected
                        ? prev.instructor.filter((i) => i !== instructor)
                        : [...prev.instructor, instructor]
                    }));
                  }}
                  className={`cursor-pointer px-2 py-1 rounded ${courseData.instructor.includes(instructor)
                    ? "bg-blue-100 text-blue-800 font-medium"
                    : "hover:bg-gray-100"
                    }`}
                >
                  {instructor}
                </div>
              ))}
            </div>
          </div>

          {courseData.instructor.length > 0 && (
            <div className="mt-3">
              <span className="font-medium">Selected Instructors:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {courseData.instructor.map((inst) => (
                  <span
                    key={inst}
                    className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded flex items-center"
                  >
                    {inst}
                    <button
                      type="button"
                      onClick={() =>
                        setCourseData((prev) => ({
                          ...prev,
                          instructor: prev.instructor.filter((i) => i !== inst)
                        }))
                      }
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-2 border rounded"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Offer Price</label>
            <input
              type="number"
              name="offerPrice"
              value={courseData.offerPrice}
              onChange={handleChange}
              placeholder="Offer Price"
              className="w-full p-2 border rounded"
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
          <select
            name="language"
            value={courseData.language}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
            autoComplete="off"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Visibility</label>
          <select
            name="visibility"
            value={courseData.visibility}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            autoComplete="off"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            autoComplete="off"
          />
        </div>

        {/* Highlights Section */}
        <div className="border p-4 rounded-lg bg-yellow-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Course Highlights</h3>
          {courseData.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3 mb-3">
              <input
                type="text"
                value={highlight.text}
                onChange={(e) => handleHighlightChange(index, "text", e.target.value)}
                placeholder="Highlight text"
                className="flex-1 p-2 border rounded"
                autoComplete="new-password"  // <--- change from "off" to "new-password"
                name={`highlight-${index}`}   // <--- add unique name
              />

              <button
                type="button"
                onClick={() => handleRemoveHighlight(index)}
                className="text-red-500 p-2"
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddHighlight}
            className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
          >
            ➕ Add Highlight
          </button>
        </div>

        {/* Why Join Section */}
        <div className="border p-4 rounded-lg bg-blue-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Why Join This Course?</h3>
          {courseData.whyJoin.map((item, index) => (
            <div key={index} className="mb-4 p-3 bg-white rounded border">
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleWhyJoinChange(index, "title", e.target.value)}
                placeholder="Reason title"
                className="w-full p-2 border rounded mb-2 font-medium"
                autoComplete="off"
              />
              <textarea
                value={item.description}
                onChange={(e) => handleWhyJoinChange(index, "description", e.target.value)}
                placeholder="Detailed description"
                className="w-full p-2 border rounded"
                rows="3"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => handleRemoveWhyJoin(index)}
                className="text-red-500 text-sm mt-1"
              >
                ❌ Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddWhyJoin}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          >
            ➕ Add Reason
          </button>
        </div>

        {/* Mentors Section */}
        <div className="border p-4 rounded-lg bg-purple-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700"> Meet Our Mentors</h3>
          {courseData.mentors.map((mentor, index) => (
            <div key={index} className="mb-4 p-3 bg-white rounded border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-1">Mentor Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleMentorImageChange(index, e.target.files[0])}
                    className="w-full"
                    autoComplete="off"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    value={mentor.name}
                    onChange={(e) => handleMentorChange(index, "name", e.target.value)}
                    placeholder="Mentor name"
                    className="w-full p-2 border rounded mb-2"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    value={mentor.role}
                    onChange={(e) => handleMentorChange(index, "role", e.target.value)}
                    placeholder="Mentor role"
                    className="w-full p-2 border rounded mb-2"
                    autoComplete="off"
                  />
                  <textarea
                    value={mentor.bio}
                    onChange={(e) => handleMentorChange(index, "bio", e.target.value)}
                    placeholder="Mentor bio"
                    className="w-full p-2 border rounded"
                    rows="2"
                    autoComplete="off"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveMentor(index)}
                className="text-red-500 text-sm mt-2"
              >
                ❌ Remove Mentor
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMentor}
            className="bg-purple-500 text-white px-3 py-1 rounded text-sm"
          >
            ➕ Add Mentor
          </button>
        </div>

        {/* Tools Section */}
        <div className="border p-4 rounded-lg bg-green-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700"> Tools You'll Master</h3>
          <div className="space-y-4">
            {courseData.tools.map((tool, index) => (
              <div key={index} className="border p-3 rounded-lg bg-white">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Tool Image Upload */}
                  <div className="flex-shrink-0">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tool Logo</label>
                    <div className="flex items-center gap-3">
                      {tool.image ? (
                        <div className="relative">
                          <img
                            src={typeof tool.image === 'string' ? tool.image : URL.createObjectURL(tool.image)}
                            alt={tool.name}
                            className="w-16 h-16 object-contain border rounded"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveToolImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                      )}
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleToolImageChange(index, e.target.files?.[0])}
                          className="hidden"
                          id={`tool-image-${index}`}
                        />
                        <label
                          htmlFor={`tool-image-${index}`}
                          className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded cursor-pointer hover:bg-green-200"
                        >
                          {tool.image ? 'Change' : 'Upload'}
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Tool Name Input */}
                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tool Name*</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={tool.name}
                        onChange={(e) => handleToolChange(index, e.target.value, 'name')}
                        placeholder="Tool name"
                        className="flex-1 p-2 border rounded"
                        autoComplete="off"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveTool(index)}
                        className="text-red-500 p-2 hover:bg-red-50 rounded"
                        title="Remove tool"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddTool}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm mt-3 flex items-center gap-1"
          >
            ➕ Add Tool
          </button>
        </div>

        {/* How It Works Section */}
        <div className="border p-4 rounded-lg bg-red-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700">How This Course Works</h3>
          {courseData.howItWorks.map((step, index) => (
            <div key={index} className="mb-4 p-3 bg-white rounded border">
              <div className="flex items-center mb-2">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  {step.step}
                </span>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => handleHowItWorksChange(index, "title", e.target.value)}
                  placeholder="Step title"
                  className="flex-1 p-2 border rounded font-medium"
                  autoComplete="off"
                />
              </div>
              <textarea
                value={step.description}
                onChange={(e) => handleHowItWorksChange(index, "description", e.target.value)}
                placeholder="Step description"
                className="w-full p-2 border rounded"
                rows="2"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => handleRemoveHowItWorks(index)}
                className="text-red-500 text-sm mt-1"
              >
                ❌ Remove Step
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddHowItWorks}
            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          >
            ➕ Add Step
          </button>
        </div>

        {/* FAQ Section */}
        <div className="border p-4 rounded-lg bg-indigo-50">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Frequently Asked Questions</h3>
          {courseData.faqs.map((faq, index) => (
            <div key={index} className="mb-4 p-3 bg-white rounded border">
              <input
                type="text"
                value={faq.question}
                onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                placeholder="Question"
                className="w-full p-2 border rounded mb-2 font-medium"
                autoComplete="off"
              />
              <textarea
                value={faq.answer}
                onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                placeholder="Answer"
                className="w-full p-2 border rounded"
                rows="2"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => handleRemoveFaq(index)}
                className="text-red-500 text-sm mt-1"
              >
                ❌ Remove FAQ
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFaq}
            className="bg-indigo-500 text-white px-3 py-1 rounded text-sm"
          >
            ➕ Add FAQ
          </button>
        </div>

        {/* Modules Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Course Modules</h3>
          {courseData.modules.map((mod, modIndex) => (
            <div key={modIndex} className="border p-4 rounded-lg mb-6 bg-gray-50 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Module {modIndex + 1}</h4>
                {courseData.modules.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const newModules = [...courseData.modules];
                      newModules.splice(modIndex, 1);
                      setCourseData({ ...courseData, modules: newModules });
                    }}
                    className="text-red-500 text-sm"
                  >
                    ❌ Remove
                  </button>
                )}
              </div>

              <input
                type="text"
                name="title"
                value={mod.title}
                onChange={(e) => handleModuleChange(e, modIndex)}
                placeholder="Module Title"
                className="w-full p-2 border rounded"
                autoComplete="off"
              />

              <input
                type="text"
                name="duration"
                value={mod.duration}
                onChange={(e) => handleModuleChange(e, modIndex)}
                placeholder="Duration (e.g. 2 weeks)"
                className="w-full p-2 border rounded"
                autoComplete="off"
              />

              {/* Module Session Type */}
              <div className="mt-3">
                <label className="block mb-1 font-medium">Session Type for this Module</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleModuleSessionTypeChange(modIndex, "live")}
                    className={`px-3 py-1 rounded ${mod.sessionType === "live" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    Live
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModuleSessionTypeChange(modIndex, "recorded")}
                    className={`px-3 py-1 rounded ${mod.sessionType === "recorded" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    Recorded
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModuleSessionTypeChange(modIndex, "both")}
                    className={`px-3 py-1 rounded ${mod.sessionType === "both" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
                  >
                    Both
                  </button>
                </div>
              </div>

              {/* Live Sessions for this Module */}
              {(mod.sessionType === "live" || mod.sessionType === "both") && (
                <div className="mt-4 bg-blue-50 p-3 rounded">
                  <h5 className="font-medium mb-2">🎥 Live Sessions</h5>
                  {mod.liveSessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border p-3 rounded bg-white mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span>Session {sessionIndex + 1}</span>
                        {mod.liveSessions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveLiveSession(modIndex, sessionIndex)}
                            className="text-red-500 text-sm"
                          >
                            ❌ Remove
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={session.title}
                        onChange={(e) => handleLiveSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Session Title"
                        className="w-full p-2 border rounded mb-2"
                        autoComplete="off"
                      />
                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <input
                          type="date"
                          name="date"
                          value={session.date}
                          onChange={(e) => handleLiveSessionChange(e, modIndex, sessionIndex)}
                          className="w-full p-2 border rounded"
                          autoComplete="off"
                        />
                        <input
                          type="time"
                          name="time"
                          value={session.time}
                          onChange={(e) => handleLiveSessionChange(e, modIndex, sessionIndex)}
                          className="w-full p-2 border rounded"
                          autoComplete="off"
                        />
                      </div>
                      <input
                        type="text"
                        name="duration"
                        value={session.duration}
                        onChange={(e) => handleLiveSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Duration (e.g. 2 hours)"
                        className="w-full p-2 border rounded mb-2"
                        autoComplete="off"
                      />
                      <input
                        type="url"
                        name="meetingLink"
                        value={session.meetingLink}
                        onChange={(e) => handleLiveSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Meeting Link"
                        className="w-full p-2 border rounded"
                        autoComplete="off"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddLiveSession(modIndex)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                  >
                    ➕ Add Live Session
                  </button>
                </div>
              )}

              {/* Recorded Sessions for this Module */}
              {(mod.sessionType === "recorded" || mod.sessionType === "both") && (
                <div className="mt-4 bg-green-50 p-3 rounded">
                  <h5 className="font-medium mb-2"> Recorded Sessions</h5>
                  {mod.recordedSessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border p-3 rounded bg-white mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span>Session {sessionIndex + 1}</span>
                        {mod.recordedSessions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveRecordedSession(modIndex, sessionIndex)}
                            className="text-red-500 text-sm"
                          >
                            ❌ Remove
                          </button>
                        )}
                      </div>
                      <input
                        type="text"
                        name="title"
                        value={session.title}
                        onChange={(e) => handleRecordedSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Session Title"
                        className="w-full p-2 border rounded mb-2"
                        autoComplete="off"
                      />
                      <input
                        type="url"
                        name="videoUrl"
                        value={session.videoUrl}
                        onChange={(e) => handleRecordedSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Video URL"
                        className="w-full p-2 border rounded mb-2"
                        autoComplete="off"
                      />
                      <input
                        type="text"
                        name="duration"
                        value={session.duration}
                        onChange={(e) => handleRecordedSessionChange(e, modIndex, sessionIndex)}
                        placeholder="Duration (e.g. 45 mins)"
                        className="w-full p-2 border rounded"
                        autoComplete="off"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddRecordedSession(modIndex)}
                    className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                  >
                    ➕ Add Recorded Session
                  </button>
                </div>
              )}

              {/* Weeks Structure */}
              <div className="mt-4">
                <h5 className="font-medium mb-2"> Weeks Structure</h5>
                {mod.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="border p-3 rounded bg-white mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span>Week {weekIndex + 1}</span>
                      {mod.weeks.length > 1 && (
                        <button
                          type="button"
                          onClick={() => {
                            const newModules = [...courseData.modules];
                            newModules[modIndex].weeks.splice(weekIndex, 1);
                            setCourseData({ ...courseData, modules: newModules });
                          }}
                          className="text-red-500 text-sm"
                        >
                          ❌ Remove
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={week.title}
                      onChange={(e) => handleWeekChange(e, modIndex, weekIndex)}
                      placeholder="Week Title"
                      className="w-full p-2 border rounded mb-3"
                      autoComplete="off"
                    />

                    {/* Units */}
                    <div className="space-y-3">
                      {week.units.map((unit, unitIndex) => (
                        <div key={unitIndex} className="border p-2 rounded bg-gray-50">
                          <div className="flex justify-between items-center mb-2">
                            <span>Unit {unitIndex + 1}</span>
                            {week.units.length > 1 && (
                              <button
                                type="button"
                                onClick={() => {
                                  const newModules = [...courseData.modules];
                                  newModules[modIndex].weeks[weekIndex].units.splice(unitIndex, 1);
                                  setCourseData({ ...courseData, modules: newModules });
                                }}
                                className="text-red-500 text-sm"
                              >
                                ❌ Remove
                              </button>
                            )}
                          </div>

                          <input
                            type="text"
                            value={unit.title}
                            onChange={(e) => handleUnitChange(e, modIndex, weekIndex, unitIndex)}
                            placeholder="Unit Title"
                            className="w-full p-2 border rounded mb-2"
                            autoComplete="off"
                          />

                          {/* Lessons */}
                          <div className="space-y-2">
                            {unit.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="border p-2 rounded bg-white">
                                <div className="flex justify-between items-center mb-2">
                                  <span>Lesson {lessonIndex + 1}</span>
                                  {unit.lessons.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newModules = [...courseData.modules];
                                        newModules[modIndex].weeks[weekIndex].units[
                                          unitIndex
                                        ].lessons.splice(lessonIndex, 1);
                                        setCourseData({ ...courseData, modules: newModules });
                                      }}
                                      className="text-red-500 text-sm"
                                    >
                                      ❌ Remove
                                    </button>
                                  )}
                                </div>

                                <input
                                  type="text"
                                  name="title"
                                  value={lesson.title}
                                  onChange={(e) =>
                                    handleLessonChange(e, modIndex, weekIndex, unitIndex, lessonIndex)
                                  }
                                  placeholder="Lesson Title"
                                  className="w-full p-2 border rounded mb-2"
                                  autoComplete="off"
                                />

                                <div className="mb-2">
                                  <label className="block text-sm mb-1">Media Type</label>
                                  <div className="flex space-x-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleLessonMediaTypeChange(
                                          modIndex,
                                          weekIndex,
                                          unitIndex,
                                          lessonIndex,
                                          "text"
                                        )
                                      }
                                      className={`px-2 py-1 text-xs rounded ${lesson.mediaType === "text"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                      Text
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleLessonMediaTypeChange(
                                          modIndex,
                                          weekIndex,
                                          unitIndex,
                                          lessonIndex,
                                          "video"
                                        )
                                      }
                                      className={`px-2 py-1 text-xs rounded ${lesson.mediaType === "video"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                      Video
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleLessonMediaTypeChange(
                                          modIndex,
                                          weekIndex,
                                          unitIndex,
                                          lessonIndex,
                                          "pdf"
                                        )
                                      }
                                      className={`px-2 py-1 text-xs rounded ${lesson.mediaType === "pdf"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                      PDF
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleLessonMediaTypeChange(
                                          modIndex,
                                          weekIndex,
                                          unitIndex,
                                          lessonIndex,
                                          "quiz"
                                        )
                                      }
                                      className={`px-2 py-1 text-xs rounded ${lesson.mediaType === "quiz"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800"
                                        }`}
                                    >
                                      Quiz
                                    </button>
                                  </div>
                                </div>

                                {lesson.mediaType === "text" && (
                                  <textarea
                                    name="content"
                                    value={lesson.content}
                                    onChange={(e) =>
                                      handleLessonChange(e, modIndex, weekIndex, unitIndex, lessonIndex)
                                    }
                                    placeholder="Lesson Content"
                                    className="w-full p-2 border rounded"
                                    rows="3"
                                    autoComplete="off"
                                  />
                                )}

                                {(lesson.mediaType === "video" || lesson.mediaType === "pdf") && (
                                  <input
                                    type="url"
                                    name="content"
                                    value={lesson.content}
                                    onChange={(e) =>
                                      handleLessonChange(e, modIndex, weekIndex, unitIndex, lessonIndex)
                                    }
                                    placeholder={lesson.mediaType === "video" ? "Video URL" : "PDF URL"}
                                    className="w-full p-2 border rounded"
                                    autoComplete="off"
                                  />
                                )}

                                {lesson.mediaType === "quiz" && (
                                  <input
                                    type="text"
                                    name="content"
                                    value={lesson.content}
                                    onChange={(e) =>
                                      handleLessonChange(e, modIndex, weekIndex, unitIndex, lessonIndex)
                                    }
                                    placeholder="Quiz ID or Title"
                                    className="w-full p-2 border rounded"
                                    autoComplete="off"
                                  />
                                )}

                                <input
                                  type="text"
                                  name="duration"
                                  value={lesson.duration}
                                  onChange={(e) =>
                                    handleLessonChange(e, modIndex, weekIndex, unitIndex, lessonIndex)
                                  }
                                  placeholder="Duration (e.g. 30 mins)"
                                  className="w-full p-2 border rounded mt-2"
                                  autoComplete="off"
                                />
                              </div>
                            ))}

                            <button
                              type="button"
                              onClick={() => handleAddLesson(modIndex, weekIndex, unitIndex)}
                              className="text-blue-600 text-sm"
                            >
                              ➕ Add Lesson
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddUnit(modIndex, weekIndex)}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm"
                      >
                        ➕ Add Unit
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => handleAddWeek(modIndex)}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm"
                >
                  ➕ Add Week
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddModule}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            ➕ Add Module
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Do you want to save as draft?
            </h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveAsDraft}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Save as Draft
              </button>
              <button
                onClick={handleDiscard}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCourse;