import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    year: "2022",
    title: "3D Artist",
    description: "Created stunning 3D models and animations for diverse projects.",
  },
  {
    id: 2,
    year: "2021",
    title: "Animator",
    description: "Developed immersive animations for game environments.",
  },
  {
    id: 3,
    year: "2020",
    title: "Blender Expert",
    description: "Specialized in advanced modeling techniques in Blender.",
  },
  {
    id: 4,
    year: "2019",
    title: "Freelancer",
    description: "Collaborated with clients to create visually compelling 3D assets.",
  },
];

const Experience = () => {
  const [filledSections, setFilledSections] = useState([]);

  const handleInView = (id) => {
    setFilledSections((prev) => {
      if (!prev.includes(id)) return [...prev, id];
      return prev;
    });
  };

  return (
    <div className="py-20">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line with Animated Fill */}
        <motion.div
          className="absolute left-4 w-2 rounded-full bg-white"
          style={{ top: 0, bottom: 0, height: "100%" }}
          initial={{ backgroundColor: "transparent" }}
          animate={{
            backgroundColor: filledSections.length === experiences.length ? "green" : "white",
            opacity: filledSections.length > 0 ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>

        <ol className="relative pl-10">
          {experiences.map((experience, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              margin: "-100px 0px -50px 0px", // Adjusts the trigger point
              triggerOnce: true,
              onChange: (inView) => {
                if (inView) handleInView(experience.id);
              },
            });

            return (
              <motion.li
                ref={ref}
                key={experience.id}
                className="mb-16 flex items-start relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Marker with Fill Animation */}
                <motion.span
                  className="absolute left-0 w-6 h-6 bg-purple-300 rounded-full flex items-center justify-center ring-4 ring-black"
                  initial={{ backgroundColor: "purple" }}
                  animate={isInView ? { backgroundColor: "red" } : {}}
                  transition={{ duration: 0.8 }}
                ></motion.span>

                {/* Experience Content */}
                <div className="ml-10 max-w-md bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{experience.title}</h3>
                  <time className="block text-sm text-gray-500 mb-2">{experience.year}</time>
                  <p className="text-gray-700">{experience.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
