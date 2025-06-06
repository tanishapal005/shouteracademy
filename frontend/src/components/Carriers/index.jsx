import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ApplicationForm = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      toast.error("Please upload your resume.");
      return;
    }

    const data = new FormData();

    for (let key in formData) {
      data.append(key, formData[key]);
    }

    if (jobTitle) {
      data.append("jobTitle", jobTitle);
    }

    data.append("resume", resume);

    try {
      const res = await axios.post("http://localhost:5000/api/applications", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        coverLetter: "",
      });
      setResume(null);
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block font-semibold mb-1">Full Name*</label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold mb-1">Email*</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-semibold mb-1">Phone Number*</label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="linkedin" className="block font-semibold mb-1">LinkedIn Profile</label>
        <input
          id="linkedin"
          type="url"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="coverLetter" className="block font-semibold mb-1">Cover Letter</label>
        <textarea
          id="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="resume" className="block font-semibold mb-1">Upload Resume*</label>
        <input
          id="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          className="w-full"
        />
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded bg-red-700 text-white hover:bg-red-800"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const modalRef = useRef();

  const jobOpenings = [
    {
      id: 1,
      title: "Digital Marketing Trainer",
      type: "Full-time",
      location: "Remote",
      description:
        "We're looking for an experienced digital marketing professional to train our students on SEO, SEM, Social Media Marketing and more.",
      responsibilities: [
        "Deliver comprehensive training sessions on digital marketing concepts",
        "Develop course content and practical assignments",
        "Mentor students on real-world marketing projects",
      ],
      requirements: [
        "3+ years of digital marketing experience",
        "Proficiency in Google Ads, Facebook Ads, and SEO tools",
        "Excellent communication and presentation skills",
      ],
    },
    {
      id: 2,
      title: "Web Development Instructor",
      type: "Part-time",
      location: "Hybrid (Delhi/NCR)",
      description:
        "Join us to teach modern web development technologies including React, Node.js, and MongoDB.",
      responsibilities: [
        "Conduct hands-on coding sessions",
        "Create and evaluate student projects",
        "Stay updated with latest web technologies",
      ],
      requirements: [
        "2+ years of professional web development experience",
        "Expertise in MERN stack",
        "Prior teaching/training experience preferred",
      ],
    },
    {
      id: 3,
      title: "Student Counselor",
      type: "Full-time",
      location: "On-site (Delhi)",
      description:
        "Help guide students in choosing the right courses and career paths at Shouters Academy.",
      responsibilities: [
        "Provide career guidance to prospective students",
        "Explain course curriculum and outcomes",
        "Assist with admissions process",
      ],
      requirements: [
        "Excellent interpersonal skills",
        "Knowledge of IT career paths",
        "Prior experience in counseling/education sector",
      ],
    },
  ];

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className={`min-h-screen bg-gray-100 ${isModalOpen ? "overflow-hidden" : ""}`}>
      <Toaster position="top-right" reverseOrder={false} />
      {/* Hero Section */}
      <div className="bg-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Shouters Academy</h1>
          <p className="text-xl md:text-2xl mb-8">Shape the future of tech education with us</p>
          <button
            onClick={() =>
              document.getElementById("openings").scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            View Open Positions
          </button>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Three reasons */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-700">
            <div className="text-red-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 01.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Impactful Teaching</h3>
            <p>Contribute directly to student growth with hands-on training and mentorship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-700">
            <div className="text-red-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-8a7 7 0 1114 0 7 7 0 01-14 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
            <p>Work remotely or on-site with schedules that respect your lifestyle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-700">
            <div className="text-red-600 mb-4">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 11a1 1 0 011-1h3v2H3a1 1 0 01-1-1zM14 9h3a1 1 0 110 2h-3v-2zM9 14v3a1 1 0 102 0v-3H9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
            <p>Expand your skills and career path through continuous learning and projects.</p>
          </div>
        </div>
      </div>

     {/* Job Openings */}
      <div id="openings" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Current Openings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between border border-gray-200"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Type:</strong> {job.type} | <strong>Location:</strong> {job.location}
                </p>
                <p className="mb-4 text-gray-800">{job.description}</p>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer mb-2">Responsibilities</summary>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.responsibilities.map((res, idx) => (
                      <li key={idx}>{res}</li>
                    ))}
                  </ul>
                </details>
                <details>
                  <summary className="font-semibold cursor-pointer mb-2">Requirements</summary>
                  <ul className="list-disc list-inside text-gray-700">
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </details>
              </div>
              <button
                onClick={() => openModal(job.title)}
                className="mt-6 bg-red-700 hover:bg-red-800 text-white py-2 rounded transition duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{selectedJob?.title}</h2>
            <ApplicationForm jobTitle={selectedJob?.title} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;