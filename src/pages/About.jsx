import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-8 ">

      
      <div className="w-full md:w-1/2 shadow-lg rounded-lg pe-6 flex flex-col justify-center">
        
        <div className="bg-red-200 p-0 m-0">
          <p className="text-lg leading-relaxed mb-6">
            A passionate
            <strong>3D Character Artist</strong> from Kolhapur, India. With a
            keen eye for detail and a love for creating immersive environments,
            I specialize in:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              🎨 <strong>3D Modeling:</strong> Crafting high-quality models for
              characters, props, and backgrounds.
            </li>
            <li>
              💡 <strong>Texturing & Lighting:</strong> Bringing realism and
              depth to virtual scenes.
            </li>
            <li>
              🖌️ <strong>Concept Art & Storyboarding:</strong> Developing visual
              concepts for impactful storytelling.
            </li>
            <li>
              🤝 <strong>Collaborative Projects:</strong> Working seamlessly
              with teams to deliver polished results.
            </li>
          </ul>

          <p className="mt-6 text-lg leading-relaxed">
            I thrive on pushing creative boundaries and delivering compelling
            visuals. My commitment to clean topology and UVs ensures optimized
            assets for animation and game development.
          </p>

          <p className="mt-4 text-lg font-semibold text-indigo-400">
            Let's create something extraordinary together!
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[60%] md:h-[80%] flex justify-center items-center shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1735915169185-bf607b00fc2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
          alt="Pravin's Portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
