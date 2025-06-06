import React, { useState, useEffect } from "react";
import axios from "axios";
import { PhoneCall, MapPin, Mail, Send } from "lucide-react";
import { toast } from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    issueType: "",
  });

  const [errors, setErrors] = useState({});
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/contact");
        setContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactInfo();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Valid 10-digit phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (!formData.issueType.trim()) newErrors.issueType = "Please select an issue type.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const response = await axios.post(
      "http://localhost:5000/api/contact-messages",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    toast.success("Your message has been sent successfully! 🎉");

    // Optionally reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      issueType: "",
      message: "",
    });

    setErrors({});
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to submit the form. Please try again.");
  }
}

  return (
    <div className="w-full bg-white py-10 mt-10">
      <div className="flex flex-col md:flex-row bg-white px-4 md:px-20 py-10 rounded-xl shadow-lg w-full mx-auto">

        {/* Left Section - Contact Info (Dynamic) */}
        <div className="md:w-1/2 p-5 bg-white">
          <h2 className="text-4xl font-bold">{contactInfo.title || "Get in Touch"}</h2>
          <p className="text-gray mt-3">
            {contactInfo.description || "Have questions about our courses, admissions, or training programs? Contact us!"}
          </p>
          <div className="mt-5 space-y-6">

            {/* Phone Number */}
            <div className="flex items-center space-x-4">
              <div className="bg-purple p-3 rounded-full flex-shrink-0">
                <PhoneCall className="w-6 h-6 text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray">Contact</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray font-medium hover:text-purple cursor-pointer"
                >
                  {contactInfo.phone || "+91 80945-54455"}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-3 p-3 rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6 text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray">Our Location</h3>
                <p className="text-gray font-medium">
                  {contactInfo.location || "Bhilwara, Rajasthan"}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-green p-3 rounded-full flex-shrink-0">
                <Mail className="w-6 h-6 text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray">Official Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray font-medium hover:text-green cursor-pointer"
                >
                  {contactInfo.email || "info@7shouters.com"}
                </a>
              </div>
            </div>

            {/* Google Map Embed (optional) */}
            {contactInfo.mapEmbedCode && (
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: contactInfo.mapEmbedCode }}
              />
            )}
          </div>
        </div>

        {/* Right Section - Contact Form (Static) */}
        <div className="md:w-1/2 bg-gray-1 p-8 rounded-lg shadow-md w-full">
          <h3 className="text-red font-semibold">HAVE QUESTIONS?</h3>
          <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red text-sm">{errors.name}</p>}
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full p-3 border rounded-md"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red text-sm">{errors.email}</p>}
              </div>
              <div className="w-1/2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full p-3 border rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red text-sm">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <select
                name="issueType"
                className="w-full p-3 border rounded-md text-black"
                value={formData.issueType}
                onChange={handleChange}
              >
                <option value="">Select Issue Type</option>
                <option value="course-related">Course Related</option>
                <option value="technical">Technical Issue</option>
                <option value="payment">Payment Issue</option>
                <option value="other">Other</option>
              </select>
              {errors.issueType && <p className="text-red text-sm">{errors.issueType}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="How can we help you?"
                className="w-full p-3 border rounded-md h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-red text-white px-6 py-3 rounded-md flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;
