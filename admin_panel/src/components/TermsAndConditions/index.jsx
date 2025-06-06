import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TermsAndConditions = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [section1Title, setSection1Title] = useState('');
  const [section1Content, setSection1Content] = useState('');
  const [section2Title, setSection2Title] = useState('');
  const [section2Content, setSection2Content] = useState('');

  // Fetch terms on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/terms').then((res) => {
      const data = res.data;
      setSection1Title(data.section1Title || 'Terms & Conditions');
      setSection1Content(data.section1Content || '');
      setSection2Title(data.section2Title || 'T&C Updation or Modification');
      setSection2Content(data.section2Content || '');
    });
  }, []);

  const handleSave = async () => {
    await axios.put('http://localhost:5000/api/terms', {
      section1Title,
      section1Content,
      section2Title,
      section2Content,
    });

    setIsEditing(false);
    alert('Changes saved!');
  };

  return (
    <div className="max-w-4xl bg-white p-6 rounded-lg shadow-md mt-16 ml-64">
      {/* Top-right Edit / Save Button */}
      <div className="flex justify-end mb-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        )}
      </div>

      {/* Section 1 */}
      <div className="mb-6">
        {isEditing ? (
          <>
            <input
              className="text-3xl font-bold mb-2 w-full outline-none"
              value={section1Title}
              onChange={(e) => setSection1Title(e.target.value)}
            />
            <textarea
              className="w-full h-48 p-2 border border-gray-300 rounded mt-2"
              value={section1Content}
              onChange={(e) => setSection1Content(e.target.value)}
            />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">{section1Title}</h1>
            <p className="text-gray-700 whitespace-pre-line">{section1Content}</p>
          </>
        )}
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        {isEditing ? (
          <>
            <input
              className="text-2xl font-bold mb-2 w-full outline-none"
              value={section2Title}
              onChange={(e) => setSection2Title(e.target.value)}
            />
            <textarea
              className="w-full h-40 p-2 border border-gray-300 rounded mt-2"
              value={section2Content}
              onChange={(e) => setSection2Content(e.target.value)}
            />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">{section2Title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{section2Content}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;
