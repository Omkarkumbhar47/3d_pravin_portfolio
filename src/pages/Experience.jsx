import React from "react";

const Experience = () => {
  return (
    <div className="my-20">
      <div className="text-4xl underline hover:underline-offset-4 mb-10 w-fit">
        Experience
      </div>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <img
              className="rounded-full shadow-lg"
              src=""
              alt="image"
            /> */}
            1
          </span>
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              2021-2022
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
              Completed Education at Kolhapur 
              <a
                href="#"
                className=" mx-2 font-semibold text-blue-600 dark:text-blue-500 hover:underline"
              >
                 Ch. Shivaji University
              </a>
              
            </div>
          </div>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <img
              className="rounded-full shadow-lg"
              src=""
              alt="image"
            /> */}
            2
          </span>
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              2021-2022
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
              Completed Education at Kolhapur 
              <a
                href="#"
                className=" mx-2 font-semibold text-blue-600 dark:text-blue-500 hover:underline"
              >
                 Ch. Shivaji University
              </a>
              
            </div>
          </div>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            {/* <img
              className="rounded-full shadow-lg"
              src=""
              alt="image"
            /> */}
            3
          </span>
          <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              2021-2022
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
              Completed Education at Kolhapur 
              <a
                href="#"
                className=" mx-2 font-semibold text-blue-600 dark:text-blue-500 hover:underline"
              >
                 Ch. Shivaji University
              </a>
              
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Experience;
