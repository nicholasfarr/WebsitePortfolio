import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        </li>
        <li>
          <a
            href="https://github.com/nicholasfarr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;