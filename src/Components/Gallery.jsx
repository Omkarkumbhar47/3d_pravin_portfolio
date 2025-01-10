import React from "react";

const Gallery = () => {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {/* <!-- Gallery Item -->/ */}
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          {/* <!-- Image -->/ */}
          <img
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="https://via.placeholder.com/300"
            alt="Gallery Image"
          />
          {/* <!-- Overlay --> */}
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {/* //   <!-- Info --> */}
            <div class="text-center text-white">
              <h3 class="text-lg font-bold">Image Title</h3>
              <p class="text-sm">Description of the image.</p>
            </div>
          </div>
        </div>

        {/* <!-- Add more items as needed --> */}
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src="https://via.placeholder.com/300"
            alt="Gallery Image"
          />
          <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-center text-white">
              <h3 class="text-lg font-bold">Image Title</h3>
              <p class="text-sm">Description of the image.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
