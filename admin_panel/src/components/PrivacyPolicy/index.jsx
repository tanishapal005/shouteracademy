// frontend/admin/EditPrivacyPolicy.jsx

import React, { useEffect, useState } from 'react';

const EditPrivacyPolicy = () => {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/privacy')
      .then(res => res.json())
      .then(data => setContent(data.content));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/privacy', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage('Privacy Policy Updated Successfully!');
    } else {
      setMessage(data.error || 'Failed to update');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Edit Privacy Policy</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          className="w-full border p-2 mb-4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Save
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
};

export default EditPrivacyPolicy;
