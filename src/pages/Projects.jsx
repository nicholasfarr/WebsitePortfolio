import React from "react";

const Projects = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-lg">
        Check out my projects on{" "}
        <a
          href="https://github.com/nicholasfarr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700 transition"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Projects;