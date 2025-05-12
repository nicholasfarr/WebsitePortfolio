import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md fixed w-full z-10 top-0">
      <ul className="flex space-x-6 justify-center">
        <li>
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;