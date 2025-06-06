import React, { useState } from "react";

const EditManagerPage = () => {
  const [formData, setFormData] = useState({
    name: "Michael Scott",
    username: "michael_s",
    email: "michael@dundermifflin.com",
    phone: "123-456-7890",
    address: "1725 Slough Ave, Scranton, PA",
    lastLogin: "2025-03-28",
    gender: "Male",
    department: "Sales",
    course: "MBA",
    dob: "1975-03-15",
    status: "Active",
    role: "Manager",
    profile: "https://i.ibb.co/z7yWg8D/profile-demo.png",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Manager:", formData);
    alert("Profile updated successfully!");
  };

  const handleBack = () => {
    window.history.back(); // or use useNavigate from react-router-dom if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 ml-64">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Edit Manager Profile</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {[
            "name",
            "username",
            "email",
            "phone",
            "address",
            "lastLogin",
            "gender",
            "department",
            "course",
            "dob",
            "status",
            "role",
            "profile",
          ].map((field) => (
            <div key={field} className="flex flex-col">
              <label htmlFor={field} className="font-medium capitalize mb-1">
                {field === "dob"
                  ? "Date of Birth"
                  : field === "profile"
                  ? "Profile Image URL"
                  : field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "dob" ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}
        </div>

        {/* Buttons at opposite corners */}
        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md"
          >
            ⬅ Back
          </button>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
          >
            Save Changes 💾
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditManagerPage;

