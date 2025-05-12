export default function Home() {
  return (
    <div className="text-gray-900 px-6 max-w-4xl mx-auto pt-24 space-y-16 bg-blue-100 min-h-screen">

      {/* HEADER */}
      <section id="home" className="text-center py-16 rounded-xl shadow-md">
      <div className="flex justify-center">
        <div style={{
          width: '248px',
          height: '248px',
          overflow: 'hidden',
          borderRadius: '9999px',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)'
        }}>
          <img 
            src="/images/headshot.jpg" 
            alt="Nick Farr headshot" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      </div>
        <h1 className="text-8xl font-extrabold text-gray-900 mb-4">   Nick Farr</h1>
        <p className="text-xl text-gray-700 max-w-xl mx-auto">
          Hello! I'm Nick Farr, a sophmore studying Computer Science at the University of Florida. 
        </p>
      </section>

      <div className="border-t border-gray-600"></div>

      {/* ABOUT */}
      <section id="about">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300 border-b border-yellow-500 pb-2">About Me</h2>
        <p>
          I’m passionate about using technology to solve meaningful problems — from machine learning to startup product development. 
          I've worked on AI systems, built trading bots, and love building stuff that actually helps people.
        </p>
      </section>

      <div className="border-t border-gray-600"></div>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300 border-b border-yellow-500 pb-2">Projects</h2>
        <ul className="space-y-4">
          <li className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <strong className="text-gray-900">Sentiment Shadows</strong><br />
            <span className="text-gray-700">Crypto whale tracking with on-chain AI alerts</span><br />
            <a href="https://github.com/nickfarr/sentiment-shadows" className="text-blue-400 underline" target="_blank" rel="noreferrer">View on GitHub</a>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <strong className="text-gray-900">PageRank Visualizer</strong><br />
            <span className="text-gray-700">Custom-built C++ graph ranking system</span><br />
            <a href="https://github.com/nickfarr/pagerank" className="text-blue-400 underline" target="_blank" rel="noreferrer">View on GitHub</a>
          </li>
        </ul>
      </section>

      <div className="border-t border-gray-600"></div>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300 border-b border-yellow-500 pb-2">Skills</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside">
          <li>Python</li>
          <li>C++</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>Machine Learning</li>
        </ul>
      </section>

      <div className="border-t border-gray-600"></div>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="text-3xl font-bold mb-4 text-yellow-300 border-b border-yellow-500 pb-2">Contact</h2>
        <p>
          <a href="mailto:nicholas.farr@ufl.edu" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block mt-2">
            Email Me
          </a>
        </p>
        <p>
          <a href="https://github.com/nickfarr" target="_blank" rel="noreferrer" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-md inline-block mt-2">
            GitHub
          </a>
        </p>
      </section>
    </div>
  );
}