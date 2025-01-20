import React from "react";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 sm:py-12 md:py-12 items-start">
  {/* Left Section */}
  <div className="text-4xl sm:text-5xl md:text-6xl h-full ml-4 sm:ml-8 lg:ml-10 font-bold text-white leading-tight">
    Experience
  </div>

  {/* Right Section */}
  <div className="col-span-2 p-10">
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
      {/* First Experience */}
      <li className="mb-10 ml-6 relative ">
        {/* absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-[#ff0088] */}
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-9 ring-8 ring-white dark:ring-gray-900 dark:bg-[#ff0088]">
          1
        </span>
        <div className="p-4  bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="sm:flex items-center justify-between">
            <time className="mb-1 text-xs sm:text-sm font-normal text-gray-300 sm:order-last sm:mb-0">
              12/2022 - 12/2024
            </time>
            <div className="text-lg sm:text-xl font-normal">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
                3D Artist
              </span>
              <span className="mx-3">|</span>
              <a
                href="https://noitavonne.com/"
                className="text-sm sm:text-base font-normal text-gray-300 hover:underline"
              >
                Noitavonne India, Kolhapur
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm sm:text-base text-gray-400">
            <div>
              Key Responsibilities
              <ol className="pl-5 mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <li className="px-2 py-1">3D Modeler</li>
                <li className="px-2 py-1">Lighting and Rendering</li>
                <li className="px-2 py-1">Texture Artist</li>
                <li className="px-2 py-1">Background Designer</li>
                <li className="px-2 py-1">Concept Artist</li>
                <li className="px-2 py-1">Collaborator</li>
                <li className="px-2 py-1">Designer</li>
                <li className="px-2 py-1">Presenter</li>
                <li className="px-2 py-1">Storyboard Artist</li>
              </ol>
            </div>
          </div>
        </div>
      </li>

      {/* Second Experience */}
      <li className="mb-10 ml-6 relative">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-9 ring-8 ring-white dark:ring-gray-900 dark:bg-[#ff0088]">
          2
        </span>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="sm:flex items-center justify-between">
            <time className="mb-1 text-xs sm:text-sm font-normal text-gray-300 sm:order-last sm:mb-0">
              12/2022 - Currently Working
            </time>
            <div className="text-lg sm:text-xl font-normal">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
                3D Artist
              </span>
              <span className="mx-3">|</span>
              <a
                href="#"
                className="text-sm sm:text-base font-normal text-gray-300 hover:underline"
              >
                Mumbai Company
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm sm:text-base text-gray-400">
            <div>
              Key Responsibilities
              <ol className="pl-5 mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <li className="px-2 py-1">3D Modeler</li>
                <li className="px-2 py-1">Lighting and Rendering</li>
                <li className="px-2 py-1">Texture Artist</li>
                <li className="px-2 py-1">Background Designer</li>
                <li className="px-2 py-1">Concept Artist</li>
                <li className="px-2 py-1">Collaborator</li>
              </ol>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
</div>

  );
};

export default Experience;
