import React, { useState } from "react";

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle password reset here
    alert(`Password reset instructions sent to ${emailOrUsername}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="max-w-md w-full space-y-6">
     

        <div className="bg-white p-6 rounded shadow-md">
          <p className="text-sm text-gray-600 border-l-4 border-green-500 pl-3 mb-4">
            Please enter your username or email address. You will receive an
            email message with instructions on how to reset your password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="emailOrUsername"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Email Address
              </label>
              <input
                type="text"
                id="emailOrUsername"
                name="emailOrUsername"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded"
            >
              Get New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
