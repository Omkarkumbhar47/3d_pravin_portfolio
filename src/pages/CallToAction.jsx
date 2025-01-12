import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
        {/* Text Section */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to <span className="text-indigo-500">Explore?</span>
          </h2>
          <p className="text-lg text-gray-400">
            Check out my projects and bring your creative ideas to life. 
            If you like what you see, let's collaborate!
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Check Out My Projects
          </a>
          <a
            href="/contact"
            className="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold py-3 px-8 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
