import React from "react";

const RoleDropdown = () => {
  return (
    <select className="p-2 border border-gray-300 rounded-lg">
      <option value="All">All Roles</option>
      <option value="Manager">Manager</option>
      <option value="HR">HR</option>
      <option value="Developer">Developer</option>
    </select>
  );
};

export default RoleDropdown;

