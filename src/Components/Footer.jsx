import React from "react";
import logo from "/favicon-32x32.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900">
      <hr className="py-2 lg:py-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
      {location.pathname === "/gallery" ? (
        <footer className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-2">
          <div className="text-center text-xl">
            Created by
            <Link
              to="https://www.linkedin.com/in/omkar-kumbhar-291168259/"
              className="uppercase  hover:underline underline-offset-4 ml-2"
            >
              Omkar Kumbhar
            </Link>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="md:flex md:justify-around">
            <div className="h-full flex justify-center items-center pb-4">
              <Link to="/" className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt="Logo" />
                <div className="text-2xl font-semibold">Pravin Kamble</div>
              </Link>
            </div>

            <form className="max-w-sm">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Reach out
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Mail to Hire me."
              />
            </form>
            <div className="pt-4 ">
              <h2 className=" text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Go to
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 gap-4 md:gap-8 font-medium flex  justify-around">
                <li className="">
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:underline">
                    Project
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between md:mx-10 text-center sm:text-left">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025
              <Link to="/" className="hover:underline">
                Pravin
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex justify-center sm:justify-start mt-4 sm:mt-0 space-x-5">
              <Link
                to="https://www.linkedin.com/in/pravin-kamble-8962b9212/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="ri-facebook-fill text-2xl"></i>
              </Link>
              <Link
                to="https://www.behance.net/pravinkamble9"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="ri-discord-line text-2xl"></i>
              </Link>
              <Link
                to="https://www.instagram.com/pravin_kamble_6666/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="ri-twitter-line text-2xl"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/pravin-kamble-8962b9212/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="ri-github-line text-2xl"></i>
              </Link>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="mx-auto w-full max-w-screen-xl">
          <div className="text-center text-xl ">
            Created by
            <Link
              to="https://www.linkedin.com/in/omkar-kumbhar-291168259/"
              className="uppercase  hover:underline underline-offset-4 ml-2"
            >
              Omkar Kumbhar
            </Link>
          </div>
          <div className="h-full flex justify-center items-center pt-3">
            <Link to="/" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Logo" />
              <div className="text-2xl font-semibold">Pravin Kamble</div>
            </Link>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center sm:items-start text-center sm:text-left gap-4 pb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025
              <Link to="/" className="hover:underline">
                Pravin
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex justify-center sm:justify-start space-x-5">
              <Link
                to="https://www.linkedin.com/in/pravin-kamble-8962b9212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-linkedin-box-fill text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"></i>
              </Link>
              <Link
                to="https://www.behance.net/pravinkamble9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-behance-line text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"></i>
              </Link>
              <Link
                to="https://www.instagram.com/pravin_kamble_6666/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/pravin-kamble-8962b9212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-twitter-line text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl"></i>
              </Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
