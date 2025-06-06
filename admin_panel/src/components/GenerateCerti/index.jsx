import { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const GenerateCertificate = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");

  const handleGeneratePDF = () => {
    if (!name || !course || !date) {
      alert("Please fill all the fields!");
      return;
    }

    const doc = new jsPDF("landscape");

    // Certificate Border
    doc.setLineWidth(5);
    doc.rect(10, 10, 270, 180);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Certificate of Completion", 105, 40);

    // Subtitle
    doc.setFontSize(16);
    doc.text("This is to certify that", 120, 60);

    // Name
    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.text(name, 105, 80);

    // Course Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.text(`has successfully completed the course`, 90, 100);
    doc.setFont("times", "bold");
    doc.text(course, 120, 115);

    // Date
    doc.setFontSize(14);
    doc.text(`Date: ${date}`, 120, 140);

    // Signature
    doc.text("Authorized Signature", 190, 160);

    // Download PDF
    doc.save(`Certificate_${name}.pdf`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Generate Certificate
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="w-full p-2 border rounded-lg mb-3"
        />
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="Enter Course Name"
          className="w-full p-2 border rounded-lg mb-3"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded-lg mb-3"
        />

        <button
          onClick={handleGeneratePDF}
          className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
        >
          Generate Certificate
        </button>
      </div>
    </div>
  );
};

export default GenerateCertificate;
