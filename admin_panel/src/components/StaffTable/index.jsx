import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const StaffTable = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);

  const allStaffMembers = [
    { id: 1, name: "Amit Sharma", role: "Manager", email: "amit@example.com", regId: "STF123", status: "Active", photo: "https://i.pravatar.cc/50?img=1" },
    { id: 2, name: "Priya Verma", role: "HR", email: "priya@example.com", regId: "STF456", status: "Inactive", photo: "https://i.pravatar.cc/50?img=2" },
    { id: 3, name: "Rohan Mehta", role: "Developer", email: "rohan@example.com", regId: "STF789", status: "Active", photo: "https://i.pravatar.cc/50?img=3" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">#</th>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Registration ID</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allStaffMembers.map((staff, index) => (
            <tr key={staff.id} className="border-b">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">
                <img src={staff.photo} alt="Profile" className="h-10 w-10 rounded-full" />
              </td>
              <td className="p-3">{staff.name}</td>
              <td className="p-3">{staff.role}</td>
              <td className="p-3">{staff.regId}</td>
              <td className="p-3">{staff.email}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-white text-sm ${staff.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                  {staff.status}
                </span>
              </td>
              <td className="p-3 space-x-2 flex">
                <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  <FaEdit />
                </button>
                <button 
                  className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                  onClick={() => setSelectedStaff(staff)}
                >
                  <FaEye />
                </button>
                <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Viewing Staff Details */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Staff Details</h2>
            <div className="flex items-center space-x-4">
              <img src={selectedStaff.photo} alt="Profile" className="h-16 w-16 rounded-full" />
              <div>
                <p><strong>Name:</strong> {selectedStaff.name}</p>
                <p><strong>Role:</strong> {selectedStaff.role}</p>
                <p><strong>Email:</strong> {selectedStaff.email}</p>
                <p><strong>Reg ID:</strong> {selectedStaff.regId}</p>
                <p><strong>Status:</strong> {selectedStaff.status}</p>
              </div>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setSelectedStaff(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffTable;

