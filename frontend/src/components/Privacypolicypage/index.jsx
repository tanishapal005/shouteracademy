import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState("");
  const [privacyText, setPrivacyText] = useState("");

  // Fetch on mount
  useEffect(() => {
    fetch("http://localhost:5000/api/privacy")
      .then((res) => res.json())
      .then((data) => {
        setPolicy(data.content);
        setPrivacyText(data.content); // also set in textarea for editing
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/privacy", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: privacyText }),
      });

      const data = await response.json();
      console.log("Success:", data);
      setPolicy(data.policy.content); // update display
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>


      {/* Edit Mode */}
      <textarea
        className="w-full h-60 border p-4 rounded mb-4"
        value={privacyText}
        onChange={(e) => setPrivacyText(e.target.value)}
      ></textarea>

      
    </div>
  );
};

export default PrivacyPolicy;
