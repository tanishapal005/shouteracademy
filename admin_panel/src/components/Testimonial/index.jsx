import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    sourceType: "file", // or "url"
    videoFile: null,
    videoUrl: "",
  });

  // ✅ Fetch Testimonials from Backend
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get("/api/testimonials");
      const data = res.data;

      // Check response structure
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else if (data && Array.isArray(data.testimonials)) {
        setTestimonials(data.testimonials);
      } else {
        setTestimonials([]);
        console.warn("Unexpected data format", data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setTestimonials([]);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // ✅ Submit Testimonial (File or URL)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("description", form.description);
    formData.append("sourceType", form.sourceType);

    if (form.sourceType === "file" && form.videoFile) {
      formData.append("videoFile", form.videoFile);
    } else if (form.sourceType === "url" && form.videoUrl) {
      formData.append("videoUrl", form.videoUrl);
    } else {
      alert("Please provide a valid video file or URL.");
      return;
    }

    try {
      await axios.post("/api/testimonials/add", formData);
      fetchTestimonials(); // Refresh after submit
      setForm({
        name: "",
        description: "",
        sourceType: "file",
        videoFile: null,
        videoUrl: "",
      });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <div className="p-4 ml-64 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Add Testimonial</h2>

      {/* ✅ Testimonial Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />

        <select
          name="sourceType"
          value={form.sourceType}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="file">Upload Video File</option>
          <option value="url">Provide Video URL</option>
        </select>

        {form.sourceType === "file" ? (
          <input
            type="file"
            name="videoFile"
            accept="video/*"
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        ) : (
          <input
            type="text"
            name="videoUrl"
            placeholder="Video URL"
            value={form.videoUrl}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* ✅ Testimonials List */}
      <h3 className="text-xl font-semibold mt-10 mb-4">All Testimonials</h3>
      {Array.isArray(testimonials) && testimonials.length > 0 ? (
        <ul className="space-y-4">
          {testimonials.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow bg-white">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>

              {item.sourceType === "file" && item.videoFileUrl ? (
                <video controls width="300" className="mt-2">
                  <source src={item.videoFileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : item.videoUrl ? (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  View Video
                </a>
              ) : (
                <p className="text-gray-500">No video available</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No testimonials found.</p>
      )}
    </div>
  );
};

export default AdminTestimonials;
