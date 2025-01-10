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
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-[#ff0088]">
              1
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-8">
              <div className="sm:flex items-center justify-between">
                <time className="mb-1 text-s font-normal text-white-500 sm:order-last sm:mb-0">
                  12/2022 - 12/2024
                </time>
                <div className="text-2xl font-normal ">
                  <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-3xl">
                    3D Artist
                  </span>
                  <span className="ml-6 mr-5">|</span>
                  <a href="#" className="mx-2 font-normal ">
                    Noitavonne India, Kolhapur
                  </a>
                </div>
              </div>
              <div className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                <div>
                  Key Responsibilities
                  <ol className=" pl-5 mt-1 grid grid-cols-3">
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
          <li className="mb-10 ms-8 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-11 ring-8 ring-white dark:ring-gray-900 dark:bg-[#ff0088]">
              2
            </span>
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-8">
              <div className="sm:flex items-center justify-between">
                <time className="mb-1 text-s font-normal text-white-500 sm:order-last sm:mb-0">
                  12/2022 - Currently Working
                </time>
                <div className="text-2xl font-normal ">
                  <span className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-3xl">
                    3D Artist
                  </span>
                  <span className="ml-6 mr-5">|</span>
                  <a href="#" className="mx-2 font-normal ">
                    Mumbai Comapny
                  </a>
                </div>
              </div>
              <div className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                <div>
                  Key Responsibilities
                  <ol className=" pl-5 mt-1 grid grid-cols-3">
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

      {/* <div className="text-4xl underline hover:underline-offset-4 mb-10 w-fit">
        
      </div> */}
    </div>
  );
};

export default Experience;
