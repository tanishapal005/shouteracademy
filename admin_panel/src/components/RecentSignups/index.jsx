import React from "react";

const signups = [
  { id: 1, name: "Rahul Mehta", email: "rahul.mehta@example.com", phone: "+91 9876543210", date: "March 21, 2025" },
  { id: 2, name: "Anjali Singh", email: "anjali.singh@example.com", phone: "+91 9988776655", date: "March 19, 2025" },
  { id: 3, name: "Vikram Chauhan", email: "vikram.ch@example.com", phone: "+91 9123456789", date: "March 18, 2025" },
  { id: 4, name: "Sneha Reddy", email: "sneha.reddy@example.com", phone: "+91 8899776655", date: "March 16, 2025" },
  { id: 5, name: "Arjun Patel", email: "arjun.patel@example.com", phone: "+91 7788991122", date: "March 15, 2025" },
  { id: 6, name: "Priya Kapoor", email: "priya.kapoor@example.com", phone: "+91 6677889900", date: "March 12, 2025" },
];

const RecentSignups = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">👥 Recent Signups</h2>
      <div className="overflow-x-auto overflow-y-auto max-h-80">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-4 py-2 border text-left">Name</th>
              <th className="px-4 py-2 border text-left">Email</th>
              <th className="px-4 py-2 border text-left">Phone</th>
              <th className="px-4 py-2 border text-left">Signup Date</th>
            </tr>
          </thead>
          <tbody>
            {signups.map((signup) => (
              <tr key={signup.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{signup.name}</td>
                <td className="px-4 py-2 border">{signup.email}</td>
                <td className="px-4 py-2 border">{signup.phone}</td>
                <td className="px-4 py-2 border">{signup.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentSignups;

