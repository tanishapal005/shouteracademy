import { jsPDF } from "jspdf";

const DownloadCertificate = ({ name, course, date }) => {
  const handleDownload = () => {
    const doc = new jsPDF("landscape");

    // Certificate Border
    doc.setLineWidth(5);
    doc.rect(10, 10, 270, 180);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Certificate of Completion", 80, 40);

    // User Details
    doc.setFontSize(16);
    doc.text(`This is to certify that`, 110, 60);
    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.text(name, 105, 80);
    doc.setFont("helvetica", "normal");
    doc.text(`has successfully completed the course`, 80, 100);
    doc.setFont("times", "bold");
    doc.text(course, 120, 115);

    // Date
    doc.setFont("helvetica", "italic");
    doc.text(`Date: ${date}`, 200, 140);

    // Digital Signature (Example Image)
    const signatureUrl = "https://yourdomain.com/signature.png";
    doc.addImage(signatureUrl, "PNG", 50, 140, 40, 20);

    // Download PDF
    doc.save(`${name}_Certificate.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Download Your Certificate</h1>
      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default DownloadCertificate;
