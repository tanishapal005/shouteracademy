import { useState } from "react";

// Sample student data with more detailed info
const studentsData = [
  {
    id: 1,
    name: "Aarav Sharma",
    mode: "offline",
    course: "React.js",
    completed: true,
    duration: "3 months", // Course duration
    eligibility: "Eligible", // Eligibility status
  },
  {
    id: 2,
    name: "Meera Patel",
    mode: "online",
    course: "JavaScript",
    completed: false,
    duration: "2 months",
    eligibility: "Not eligible",
  },
  {
    id: 3,
    name: "Kabir Sen",
    mode: "online",
    course: "React.js",
    completed: true,
    duration: "4 months",
    eligibility: "Eligible",
  },
  {
    id: 4,
    name: "Kavita Suthar",
    mode: "offline",
    course: "HTML & CSS",
    completed: true,
    duration: "2 months",
    eligibility: "Eligible",
  },
  {
    id: 5,
    name: "Riya Jain",
    mode: "offline",
    course: "Tailwind CSS",
    completed: false,
    duration: "1 month",
    eligibility: "Not eligible",
  },
];

const CertificateManager = () => {
  const [search, setSearch] = useState("");

  // Filter: only completed students + matches search
  const eligibleStudents = studentsData.filter(
    (student) =>
      student.completed &&
      (student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.course.toLowerCase().includes(search.toLowerCase()))
  );

  const handleDownload = (student) => {
    alert(`✅ Certificate downloaded for ${student.name}`);
    // Real: integrate with pdf generator or backend download
  };

  const handleGenerate = (student) => {
    alert(`🔧 Certificate generated for ${student.name}`);
    // Real: backend logic to generate
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-6 ml-64 mt-16">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          🎓 Certificate Eligibility Panel
        </h1>

        <div className="mb-6 flex justify-end">
          <input
            type="text"
            placeholder="Search by name or course..."
            className="border px-4 py-2 rounded shadow-sm w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="w-full border text-sm text-left">
          <thead className="bg-blue-200 text-blue-800 uppercase">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Mode</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Eligibility</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {eligibleStudents.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No eligible students found.
                </td>
              </tr>
            ) : (
              eligibleStudents.map((student) => (
                <tr key={student.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{student.name}</td>
                  <td className="px-4 py-3">{student.course}</td>
                  <td className="px-4 py-3 capitalize">{student.mode}</td>
                  <td className="px-4 py-3">{student.duration}</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">
                    {student.eligibility}
                  </td>
                  <td className="px-4 py-3">
                    {student.completed ? (
                      <span className="text-green-600 font-medium">✅ Completed</span>
                    ) : (
                      <span className="text-red-600 font-medium">❌ Not completed</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {student.mode === "offline" ? (
                      <button
                        onClick={() => handleDownload(student)}
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                      >
                        Download
                      </button>
                    ) : (
                      <button
                        onClick={() => handleGenerate(student)}
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                      >
                        Generate
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CertificateManager;
