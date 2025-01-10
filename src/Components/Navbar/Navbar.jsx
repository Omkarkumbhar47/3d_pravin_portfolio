import { useState } from "react";

const Navbar = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="fixed inset-0 h-[100px] menu">
      <div className="fixed z-[9999] text-2xl top-7 left-1/2 transform -translate-x-1/2 text-center tracking-wider uppercase mix-blend-difference">
        Pradip
        <br />
        Kamble
      </div>

      {!openMenu && (
        <nav className="fixed top-0 left-0 z-10 w-full flex justify-between items-center px-6 sm:px-12 md:px-24 pt-12 tracking-wider uppercase">
          <div className="whitespace-nowrap text-[0.60rem] pl-4">
            Scroll Down
          </div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <a href="/gallery" className="flex items-center gap-2">
              <span>Gallery</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-600 hover:bg-white hover:text-black transition-all">
                <span className="text-xs font-semibold">0</span>
              </div>
            </a>
            <span
              className="text-lg cursor-pointer"
              onClick={() => setOpenMenu(true)}
            >
              <i className="ri-menu-3-line"></i>
            </span>
          </div>
        </nav>
      )}

      {openMenu && (
        <div className=" overflow-hidden z-[999] fixed inset-0 bg-opacity-90 bg-[#152632]  backdrop-blur-4xl flex-col">
          <span
            onClick={() => setOpenMenu(false)}
            className="absolute top-12 right-24 text-xl cursor-pointer"
          >
            <i className="ri-close-fill"></i>
          </span>

          <ul className="mt-44 mx-64 text-6xl font-semibold  px-4 py-8">
            <div className="text-xs opacity-40 mb-4">Menu</div>
            <li className="py-4">
              <a href="#home" className="hover:underline">
                Pradip Kamble
              </a>
            </li>
            <li className="py-4">
              <a href="#about" className="hover:underline">
                My carrer so far
              </a>
            </li>
            <li className="py-4">
              <a href="#services" className="hover:underline">
                Gallery
              </a>
            </li>
            <li className="py-4">
              <a href="#contact" className="hover:underline">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;

// import { useState } from "react";

// const Navbar = ({ openMenu, setOpenMenu }) => {
//   return (
//     <div className="fixed inset-0 w-full h-[100px] flex justify-between items-center px-6 sm:px-12 md:px-24 z-50">
//       {!openMenu && (
//         <nav className="pt-12 tracking-wider uppercase">
//           <div className="whitespace-nowrap text-xs">Scroll Down</div>
//         </nav>
//       )}

//       <div className="text-2xl text-center tracking-wider uppercase mix-blend-difference">
//         Pradip
//         <br />
//         Kamble
//       </div>

//       {!openMenu && (
//         <div className="flex gap-4 sm:gap-8 items-center">
//           <div className="flex items-center gap-2">
//             <span>Favorite</span>
//             <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-600 hover:bg-white hover:text-black transition-all">
//               <span className="text-xs font-semibold">0</span>
//             </div>
//           </div>

//           <span
//             className="text-lg cursor-pointer"
//             onClick={() => setOpenMenu(true)}
//             aria-label="Open Menu"
//           >
//             <i className="ri-menu-3-line"></i>
//           </span>
//         </div>
//       )}

//       {openMenu && (
//         <div className="fixed inset-0 bg-[#152632] bg-opacity-70 backdrop-blur-xl flex flex-col z-40">
//           <span
//             onClick={() => setOpenMenu(false)}
//             className="absolute top-10 right-24 text-xl cursor-pointer"
//             aria-label="Close Menu"
//           >
//             <i className="ri-close-fill"></i>
//           </span>

//           <ul className="mt-44 mx-16 md:mx-64 text-4xl md:text-6xl font-semibold px-4 py-8">
//             <div className="text-xs opacity-40 mb-4">Menu</div>
//             <li className="py-4">
//               <a href="#home" className="hover:underline">
//                 Pradip Kamble
//               </a>
//             </li>
//             <li className="py-4">
//               <a href="#about" className="hover:underline">
//                 My career so far
//               </a>
//             </li>
//             <li className="py-4">
//               <a href="#services" className="hover:underline">
//                 Gallery
//               </a>
//             </li>
//             <li className="py-4">
//               <a href="#contact" className="hover:underline">
//                 Contact Me
//               </a>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
