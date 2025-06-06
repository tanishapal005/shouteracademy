import React from "react";

const enrollments = [
  { id: 1, name: "Amit Sharma", email: "amit.sharma@example.com", phone: "+91 9876543210", course: "Web Dev", date: "March 20, 2025" },
  { id: 2, name: "Pooja Verma", email: "pooja.verma@example.com", phone: "+91 9988776655", course: "Data Science", date: "March 18, 2025" },
  { id: 3, name: "Rohan Das", email: "rohan.das@example.com", phone: "+91 9123456789", course: "AI & ML", date: "March 17, 2025" },
  { id: 4, name: "Neha Gupta", email: "neha.gupta@example.com", phone: "+91 8899776655", course: "Cyber Security", date: "March 15, 2025" },
  { id: 5, name: "Suresh Yadav", email: "suresh.yadav@example.com", phone: "+91 7788991122", course: "Web Dev", date: "March 14, 2025" },
  { id: 6, name: "Meena Kumari", email: "meena.k@example.com", phone: "+91 6677889900", course: "Data Science", date: "March 10, 2025" },
];

const RecentEnrollments = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">📚 Recent Enrollments</h2>
      <div className="overflow-x-auto overflow-y-auto max-h-80">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-4 py-2 border text-left">Name</th>
              <th className="px-4 py-2 border text-left">Email</th>
              <th className="px-4 py-2 border text-left">Phone</th>
              <th className="px-4 py-2 border text-left">Course</th>
              <th className="px-4 py-2 border text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{enrollment.name}</td>
                <td className="px-4 py-2 border">{enrollment.email}</td>
                <td className="px-4 py-2 border">{enrollment.phone}</td>
                <td className="px-4 py-2 border">{enrollment.course}</td>
                <td className="px-4 py-2 border">{enrollment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentEnrollments;


