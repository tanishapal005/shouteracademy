import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react"; // Importing home icon from Lucide

const TermsConditionsBreadcrumb = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-red">Terms & Conditions</h1>
      <div className="mt-2 text-red flex items-center gap-2">
        <Link to="/" className="flex items-center hover:underline">
          <Home className="w-4 h-4 mr-1" /> Home
        </Link>
        <span>/</span>
        <Link to="/termsandconditionpage" className="hover:underline">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default TermsConditionsBreadcrumb;
