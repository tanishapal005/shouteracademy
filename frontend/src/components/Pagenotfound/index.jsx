import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red">404</h1>
      <h2 className="text-3xl font-semibold mt-4 text-gray">Page Not Found</h2>
      <p className="text-lg text-gray mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 px-6 py-3 bg-red text-white rounded-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
