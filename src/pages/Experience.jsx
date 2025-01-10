import React from "react";

const Experience = () => {
  return (
    <div className=" grid grid-cols-3 gap-8 py-16 items-center">
      <div className="col-span-1 text-6xl h-full ml-10 font-bold text-white leading-tight">
        Experience
      </div>
      <div className="col-span-2">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-8 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              1
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="sm:flex items-center justify-between">
                <time className="mb-1 text-xs font-normal text-white-500 sm:order-last sm:mb-0">
                  2021-2022
                </time>
                <div className="text-2xl font-normal text-gray-500 dark:text-white">
                  Bachelor of Technology
                  <span className="ml-6 mr-5">|</span>
                  <a
                    href="#"
                    className="mx-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                  >
                    Ch. Shivaji University
                  </a>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                <div>
                  CGPA: <span className="font-medium text-white">8.5/10</span>
                </div>
                <div>
                  Key Achievements:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Top 10% of the graduating class</li>
                    <li>Published a research paper on Machine Learning</li>
                    <li>Lead Organizer of Annual Tech Fest</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="mb-10 ms-8 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              2
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="sm:flex items-center justify-between">
                <time className="mb-1 text-xs font-normal text-white-500 sm:order-last sm:mb-0">
                  2021-2022
                </time>
                <div className="text-2xl font-normal text-gray-500 dark:text-white">
                  Bachelor of Technology
                  <span className="ml-6 mr-5">|</span>
                  <a
                    href="#"
                    className="mx-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                  >
                    Ch. Shivaji University
                  </a>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                <div>
                  CGPA: <span className="font-medium text-white">8.5/10</span>
                </div>
                <div>
                  Key Achievements:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Top 10% of the graduating class</li>
                    <li>Published a research paper on Machine Learning</li>
                    <li>Lead Organizer of Annual Tech Fest</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="mb-10 ms-8 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              3
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
              <div className="sm:flex items-center justify-between">
                <time className="mb-1 text-xs font-normal text-white-500 sm:order-last sm:mb-0">
                  2021-2022
                </time>
                <div className="text-2xl font-normal text-gray-500 dark:text-white">
                  Bachelor of Technology
                  <span className="ml-6 mr-5">|</span>
                  <a
                    href="#"
                    className="mx-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
                  >
                    Ch. Shivaji University
                  </a>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                <div>
                  CGPA: <span className="font-medium text-white">8.5/10</span>
                </div>
                <div>
                  Key Achievements:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Top 10% of the graduating class</li>
                    <li>Published a research paper on Machine Learning</li>
                    <li>Lead Organizer of Annual Tech Fest</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>

      {/* <div className="text-4xl underline hover:underline-offset-4 mb-10 w-fit">
        
      </div> */}
    </div>
  );
};

export default Experience;
