import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-purple-600 text-white shadow-md"
        : "text-gray-600 hover:text-purple-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="flex space-x-4 p-4 bg-white shadow-sm">
      <NavLink to="/dashboard" className={linkClasses}>
        Dashboard
      </NavLink>
      <NavLink to="/events" className={linkClasses}>
        Events
      </NavLink>
      <NavLink to="/businesses" className={linkClasses}>
        Youth Businesses
      </NavLink>
      <NavLink to="/tools" className={linkClasses}>
        Credibility Tools
      </NavLink>
    </nav>
  );
};

export default Navbar;
