import React from "react";
import Button from "../Components/Button";

const ContactUs = () => {
  return (
    <section className="py-16 bg-gray-100 h-screen w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-3xl font-semibold text-gray-700 mb-6">
              Contact Us
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="h-full w-full p-2">
            <Button text="Back to Home page" goTo="/" />
            <div className="p-8 mt-10 bg-indigo-600 text-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-6">
                Contact Information
              </h3>
              <ul className="space-y-4 grid grid-cols-2">
                <li>📍 Kolhapur, India</li>
                <li>
                  
                  <a href="tel:+919075739271">📞 +91 9075739271</a>
                </li>
                <li>
                  
                  <a href="mailto:pravinkamble883@gmail.com">
                  📧 pravinkamble883@gmail.com
                  </a>
                </li>
                <li>
                  
                  <a
                    href="https://www.behance.net/pravinkamble9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🌐 Pravin's Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-8 mt-10 bg-indigo-600 text-white rounded-lg shadow-lg">
              <div className="">
                <h4 className="text-xl font-semibold mb-3">Meet Me At</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/pravin-kamble8962b9212"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.behance.net/pravinkamble9"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    Behance 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
