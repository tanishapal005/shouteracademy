import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';
import {toast} from "react-hot-toast"

const API_URL = "http://localhost:5000/api/contact";

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const saveContact = async (data) => {
  const response = await axios.post(`${API_URL}`, data);
  return response.data;
};

const ContactSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    title: "Get in Touch",
    description: "Have questions about our careers, admissions, or training programs? Contact Shooters Academy today, and our team will assist you personally.",
    phone: "+91 80945-54455",
    location: "3rd Floor, Keshav Tower, Sitaram Ji Ki Bawri Road, Bhilwara, Rajasthan 311001",
    email: "info@7shouters.com",
   
 
    mapEmbedCode: "<iframe src='https://www.google.com/maps/embed?pb=...' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy'></iframe>"
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  fetchContactData(); // Call on first render
}, []);

const fetchContactData = async () => {
  try {
    setIsLoading(true);
    const response = await getContacts(); // 👈 make sure this is working
    setContactInfo(response); // ✅ update the state
  } catch (error) {
    console.error("Failed to fetch contact data:", error);
  } finally {
    setIsLoading(false);
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

 const handleSave = async () => {
  if (!validateFields()) return;

  try {
    setIsLoading(true);

    const sanitizedData = {
      ...contactInfo,
      mapEmbedCode: DOMPurify.sanitize(contactInfo.mapEmbedCode),
    };

    const result = await saveContact(sanitizedData);
    console.log("Saved to backend:", result);

    toast.success("Contact information updated successfully! 🎉"); // ✅ Toast here

    await fetchContactData();
    setIsEditing(false);
  } catch (error) {
    console.error("Error saving contact data:", error);
    toast.error("Failed to save contact information."); // ✅ Optional error toast
  } finally {
    setIsLoading(false);
  }
};


  const validateFields = () => {
    const newErrors = {};

    if (!contactInfo.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!contactInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      newErrors.email = "Invalid email format";
    }

    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg ml-64 mt-16">
      <div className="flex justify-between items-center mb-6">
        {isEditing ? (
          <input
            type="text"
            name="title"
            value={contactInfo.title}
            onChange={handleChange}
            className="text-2xl font-bold border-b-2 border-blue-500 p-1 w-full"
          />
        ) : (
          <h2 className="text-2xl font-bold">{contactInfo.title}</h2>
        )}
        <button
          className={`px-4 py-2 rounded transition-colors ${
            isEditing 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : isEditing ? 'Save Changes' : 'Edit Section'}
        </button>
      </div>

      {isEditing ? (
        <div className="mb-6">
          <textarea
            name="description"
            value={contactInfo.description}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
            placeholder="Description"
          />
        </div>
      ) : (
        <p className="text-gray-700 mb-6">{contactInfo.description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-b pb-2">Contact Information</h3>

          <div className="space-y-2">
            <label className="block font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={contactInfo.phone}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : ''}`}
              disabled={!isEditing}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Location</label>
            <textarea
              name="location"
              value={contactInfo.location}
              onChange={handleChange}
              className={`w-full p-2 border rounded h-24 ${errors.location ? 'border-red-500' : ''}`}
              disabled={!isEditing}
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
              disabled={!isEditing}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <h3 className="text-xl font-semibold border-b pb-2">Location Map</h3>
            {isEditing ? (
              <div className="space-y-2">
                <textarea
                  name="mapEmbedCode"
                  value={contactInfo.mapEmbedCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded h-32 font-mono text-xs"
                  placeholder="Paste Google Maps embed code here"
                />
                <p className="text-xs text-gray-500">
                  Tip: Get the embed code from Google Maps by clicking "Share" → "Embed a map"
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <div 
                  className="w-full h-64 bg-gray-200 flex items-center justify-center"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contactInfo.mapEmbedCode) }}
                />
                <p className="text-sm text-gray-500 mt-2">Location: {contactInfo.location}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
