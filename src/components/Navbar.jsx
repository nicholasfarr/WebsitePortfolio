import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
          <li><Link className="hover:text-gray-400" to="/about">About</Link></li>
          <li><Link className="hover:text-gray-400" to="/projects">Projects</Link></li>
          <li><Link className="hover:text-gray-400" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}