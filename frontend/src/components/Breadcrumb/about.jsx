import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react"; 

const BreadcrumbAbout = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red">About Us</h1>
      <div className="mt-2 text-red flex items-center gap-2">
      <Link to="/" className="flex items-center hover:underline">
          <Home className="w-4 h-4 mr-1" /> Home
        </Link>
        <span>/</span>
        <Link to="/aboutpage" className="hover:underline"> About</Link>
      </div>
    </div>
  );
};

export default BreadcrumbAbout;
