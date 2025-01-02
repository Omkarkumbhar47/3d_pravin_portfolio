import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  { id: 1, year: "2022", title: "3D Artist", description: "Created stunning 3D models and animations for diverse projects.", side: "left" },
  { id: 2, year: "2021", title: "Animator", description: "Developed immersive animations for game environments.", side: "right" },
  { id: 3, year: "2020", title: "Blender Expert", description: "Specialized in advanced modeling techniques in Blender.", side: "left" },
  { id: 4, year: "2019", title: "Freelancer", description: "Collaborated with clients to create visually compelling 3D assets.", side: "right" },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const barVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    
    <div className="relative h-screen" ref={ref}>
      {/* Vertical Line */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={barVariants}
        className="absolute left-1/2 top-0 bg-blue-500 w-1"
      ></motion.div>

      {/* Experience Items */}
      <div className="container mx-auto h-full flex flex-col justify-center space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className={`relative flex items-center ${
              exp.side === "left" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`${
                exp.side === "left" ? "text-left" : "text-right"
              } w-5/12 p-6 bg-white shadow-lg rounded-lg`}
            >
              <h3 className="text-xl font-bold text-blue-500">{exp.year}</h3>
              <h4 className="text-lg font-semibold">{exp.title}</h4>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
