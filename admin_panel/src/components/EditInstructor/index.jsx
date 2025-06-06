import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockInstructors = [
  {
    id: 1,
    name: "Michael Scott",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    designation: "Manager",
    subjects: ["Sales", "Leadership"],
    joined: "2022-01-15",
    lastLogin: "2025-03-28",
    gender: "Male",
    department: "Sales",
    dob: "1975-03-15",
    active: true,
    profile: "https://i.imgur.com/OHr2Ykj.png",
    username: "michael_s",
    course: "MBA",
  },
];

const EditInstructor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [instructor, setInstructor] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const foundInstructor = mockInstructors.find(
      (inst) => inst.id === parseInt(id)
    );
    if (foundInstructor) {
      setInstructor(foundInstructor);
      setFormData(foundInstructor);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    alert("Profile updated successfully!");
    navigate(`/users/instructors/view/${id}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!instructor) return <div>Instructor not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Instructor Profile</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded p-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="border rounded p-2"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
          placeholder="Phone"
          className="border rounded p-2"
        />
        <input
          type="text"
          name="designation"
          value={formData.designation || ""}
          onChange={handleChange}
          placeholder="Designation"
          className="border rounded p-2"
        />
        <input
          type="text"
          name="username"
          value={formData.username || ""}
          onChange={handleChange}
          placeholder="Username"
          className="border rounded p-2"
        />
        <input
          type="text"
          name="course"
          value={formData.course || ""}
          onChange={handleChange}
          placeholder="Course"
          className="border rounded p-2"
        />
        <input
          type="text"
          name="department"
          value={formData.department || ""}
          onChange={handleChange}
          placeholder="Department"
          className="border rounded p-2"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob || ""}
          onChange={handleChange}
          className="border rounded p-2"
        />
        <select
          name="gender"
          value={formData.gender || ""}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          name="active"
          value={formData.active ? "true" : "false"}
          onChange={(e) =>
            handleChange({
              target: {
                name: "active",
                value: e.target.value === "true",
              },
            })
          }
          className="border rounded p-2"
        >
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

        <div className="md:col-span-2 flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            ⬅ Back
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInstructor;

