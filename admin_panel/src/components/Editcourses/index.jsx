import React, { useState, useEffect } from "react";

const EditCourse = ({ existingCourse }) => {
  const [courseData, setCourseData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (existingCourse) {
      setCourseData(existingCourse);
    } else {
      const dummyCourse = {
        id: 1,
        instructor: "John Doe",
        title: "React Mastery",
        description: "Learn React from scratch",
        category: "Web Development",
        price: "4999",
        offerPrice: "2999",
        duration: "6 weeks",
        language: "English",
        visibility: "Published",
        thumbnail: null,
        thumbnailURL: null,
        modules: [
          {
            title: "Introduction",
            duration: "1 week",
            weeks: [
              {
                title: "Week 1",
                lessons: ["What is React?", "Setting up"],
              },
            ],
          },
        ],
      };
      setCourseData(dummyCourse);
    }
  }, [existingCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCourseData({
      ...courseData,
      thumbnail: file,
      thumbnailURL: URL.createObjectURL(file),
    });
  };

  const handleSave = () => {
    alert("✅ Changes saved successfully!");
    console.log("Updated Course:", courseData);
  };

  const handleCancel = () => setShowModal(true);
  const handleSaveAsDraft = () => {
    alert("💾 Course saved as draft.");
    setShowModal(false);
  };
  const handleDiscard = () => {
    alert("❌ Changes discarded.");
    setShowModal(false);
  };

  const handleModuleChange = (e, modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex][e.target.name] = e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleWeekChange = (e, modIndex, weekIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].title = e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleLessonChange = (e, modIndex, weekIndex, lessonIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].lessons[lessonIndex] =
      e.target.value;
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleAddLesson = (modIndex, weekIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks[weekIndex].lessons.push("");
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleAddWeek = (modIndex) => {
    const newModules = [...courseData.modules];
    newModules[modIndex].weeks.push({ title: "", lessons: [""] });
    setCourseData({ ...courseData, modules: newModules });
  };

  const handleAddModule = () => {
    setCourseData((prev) => ({
      ...prev,
      modules: [
        ...prev.modules,
        { title: "", duration: "", weeks: [{ title: "", lessons: [""] }] },
      ],
    }));
  };

  if (!courseData) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg mt-20 ml-64">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ✏️ Edit Course
      </h2>

      <div className="space-y-4">


        <div>
          <label className="block mb-1 font-medium">Course Title</label>
          <input
            name="title"
            value={courseData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Instructor Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Instructor</label>
          <select
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Instructor</option>
            <option value="John Doe (Web Development)">John Doe (Web Development)</option>
            <option value="Priya Sharma (Data Science)">Priya Sharma (Data Science)</option>
            <option value="Amit Patel (Programming)">Amit Patel (Programming)</option>
          </select>
        </div>


        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={courseData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={courseData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Offer Price</label>
            <input
              type="number"
              name="offerPrice"
              value={courseData.offerPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Duration</label>
          <input
            name="duration"
            value={courseData.duration}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Language</label>
          <select
            name="language"
            value={courseData.language}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Visibility</label>
          <select
            name="visibility"
            value={courseData.visibility}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Course Image</label>
          <input type="file" onChange={handleFileChange} className="w-full" />
          {courseData.thumbnailURL && (
            <img
              src={courseData.thumbnailURL}
              alt="Thumbnail"
              className="w-full h-40 object-cover mt-2 rounded"
            />
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Modules</h3>
          {courseData.modules.map((mod, modIndex) => (
            <div key={modIndex} className="border p-4 rounded mb-4 bg-gray-100">
              <label className="block mb-1 font-medium">Module Title</label>
              <input
                name="title"
                value={mod.title}
                onChange={(e) => handleModuleChange(e, modIndex)}
                className="w-full p-2 mb-2 border rounded"
              />
              <label className="block mb-1 font-medium">Module Duration</label>
              <input
                name="duration"
                value={mod.duration}
                onChange={(e) => handleModuleChange(e, modIndex)}
                className="w-full p-2 mb-2 border rounded"
              />
              {mod.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="mb-3 p-2 bg-white rounded shadow">
                  <label className="block mb-1 font-medium">Week Title</label>
                  <input
                    value={week.title}
                    onChange={(e) => handleWeekChange(e, modIndex, weekIndex)}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  {week.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex}>
                      <label className="block text-sm">Lesson {lessonIndex + 1}</label>
                      <input
                        value={lesson}
                        onChange={(e) =>
                          handleLessonChange(e, modIndex, weekIndex, lessonIndex)
                        }
                        className="w-full p-2 mb-1 border rounded"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddLesson(modIndex, weekIndex)}
                    className="text-blue-600 text-sm"
                  >
                    ➕ Add Lesson
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddWeek(modIndex)}
                className="text-green-600 text-sm"
              >
                ➕ Add Week
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddModule}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            ➕ Add Module
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Save as Draft?</h3>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveAsDraft}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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

export default EditCourse;

























