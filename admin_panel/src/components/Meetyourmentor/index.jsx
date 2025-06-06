import React, { useState } from "react";

const AdminMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    description: "",
    image: null,
    imagePreview: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update existing mentor
      const updatedMentors = mentors.map((mentor) =>
        mentor.id === editingId
          ? {
              ...mentor,
              name: formData.name,
              role: formData.role,
              description: formData.description,
              imagePreview: formData.imagePreview,
            }
          : mentor
      );
      setMentors(updatedMentors);
      setIsEditing(false);
      setEditingId(null);
    } else {
      // Add new mentor
      const newMentor = {
        id: Date.now(),
        name: formData.name,
        role: formData.role,
        description: formData.description,
        imagePreview: formData.imagePreview,
      };
      setMentors([...mentors, newMentor]);
    }

    // Reset form
    setFormData({
      name: "",
      role: "",
      description: "",
      image: null,
      imagePreview: "",
    });
  };

  const handleDelete = (id) => {
    const updated = mentors.filter((m) => m.id !== id);
    setMentors(updated);
  };

  const handleEdit = (mentor) => {
    setFormData({
      name: mentor.name,
      role: mentor.role,
      description: mentor.description,
      image: null, // You can’t refetch the file, but we use imagePreview
      imagePreview: mentor.imagePreview,
    });
    setIsEditing(true);
    setEditingId(mentor.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Admin - Manage Mentors
      </h2>

      <form
        onSubmit={handleAddOrUpdate}
        className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto space-y-4"
      >
        <div>
          <label className="block mb-1 font-medium">Mentor Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="w-24 h-24 mt-2 object-cover rounded-full border"
            />
          )}
        </div>

        <button
          type="submit"
          className={`${
            isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          } text-white px-4 py-2 rounded`}
        >
          {isEditing ? "Update Mentor" : "Add Mentor"}
        </button>
      </form>

      {/* Mentor List */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Mentor List</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white p-4 rounded-lg shadow-md relative"
            >
              <img
                src={mentor.imagePreview}
                className="w-20 h-20 rounded-full object-cover mx-auto"
                alt=""
              />
              <h4 className="text-center mt-2 font-bold">{mentor.name}</h4>
              <p className="text-center text-sm text-gray-600">{mentor.role}</p>
              <p className="text-sm mt-2">{mentor.description}</p>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => handleEdit(mentor)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(mentor.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMentors;