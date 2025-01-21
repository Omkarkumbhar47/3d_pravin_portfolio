import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mgvvdzjn");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [timer, setTimer] = useState(10);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mgvvdzjn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    if (submitted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        navigate("/");
      }, 10000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [submitted, navigate]);

  return (
    <section className="py-4 md:py-16 bg-gray-100 h-fit md:h-screen w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mx-10 md:mx-auto mt-8"
        >
          <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-md">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L5.293 10.414a1 1 0 011.414-1.414l2.586 2.586 6.707-6.707a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-lg font-semibold text-green-800">
                Thank You for Reaching Out!
              </h2>
            </div>
            <p className="mt-2 text-sm text-green-700">
              We’ve received your message and will get back to you as soon as
              possible.
            </p>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => navigate("/")}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500 transition-all"
              >
                Visit Home
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition-all"
              >
                View Projects
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-500 transition-all"
              >
                Explore Gallery
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Redirecting to the home page in{" "}
              <span className="font-semibold">{timer}</span> seconds...
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="   text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 ">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Contact Us
              </h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-all ${
                    state.submitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="h-full w-full p-2">
              <div className="p-8 md:mt-10 bg-indigo-600 text-white rounded-lg shadow-lg">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li>📍 Kolhapur, India</li>
                  <li>
                    <a href="tel:+919075739271" className="hover:underline">
                      📞 +91 9075739271
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:pravinkamble883@gmail.com"
                      className="hover:underline"
                    >
                      📧 pravinkamble883@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/pravinkamble9"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      🌐 Pravin's Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 md:p-8 mt-4 md:mt-10 bg-indigo-600 text-white rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">Meet Me At</h4>

                <div className="flex md:space-x-4 space-x-0">
                  {/* LinkedIn */}
                  <span className="text-2xl md:text-4xl w-12">
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-linkedin-box-fill hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#53c3ff] hover:to-[#4ca5ff] hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
                    </a>
                  </span>

                  {/* Behance */}
                  <span className="text-2xl md:text-4xl w-12">
                    <a
                      href="https://www.behance.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-behance-line hover:text-[#1769FF] hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
                    </a>
                  </span>

                  {/* Instagram */}
                  <span className="text-2xl md:text-4xl w-12">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-instagram-line hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4] hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
                    </a>
                  </span>

                  {/* Twitter */}
                  <span className="text-2xl md:text-4xl w-12">
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-twitter-line hover:text-[#1DA1F2] hover:scale-150 hover:cursor-pointer transition-all duration-300"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ContactUs;
