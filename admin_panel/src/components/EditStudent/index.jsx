import React, { useState } from "react";

const EditStudent = () => {
  const [student, setStudent] = useState({
    name: "Michael Scott",
    role: "Manager",
    username: "michael_s",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    address: "1725 Slough Ave, Scranton",
    lastLogin: "2025-03-28",
    gender: "Male",
    course: "MBA",
    department: "Sales",
    dob: "1975-03-15",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Student Data:", student);
    // future: send updated data to backend
  };

  return (
    <div className="max-w-4xl  p-6 bg-white rounded-lg shadow-lg ml-72 mt-16">
      <h2 className="text-2xl font-bold mb-6">Edit Student Profile</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { label: "Name", name: "name" },
          { label: "Username", name: "username" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone" },
          { label: "Address", name: "address" },
          { label: "Last Login", name: "lastLogin", type: "date" },
          { label: "Gender", name: "gender" },
          { label: "Course", name: "course" },
          { label: "Department", name: "department" },
          { label: "DOB", name: "dob", type: "date" },
          { label: "Status", name: "status" },
          { label: "Role", name: "role" },
        ].map(({ label, name, type = "text" }) => (
          <div key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={student[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Buttons Section */}
        <div className="md:col-span-2 flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-md"
          >
            Back
          </button>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
