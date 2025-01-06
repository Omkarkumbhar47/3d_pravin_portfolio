import React from "react";

// Random images with mixed sizes
const images = [
  { src: "https://picsum.photos/id/1015/400/600", alt: "Portrait 1" },
  { src: "https://picsum.photos/id/1025/600/400", alt: "Landscape 1" },
  { src: "https://picsum.photos/id/1035/300/450", alt: "Portrait 2" },
  { src: "https://picsum.photos/id/1045/500/300", alt: "Landscape 2" },
  { src: "https://picsum.photos/id/1055/400/600", alt: "Portrait 3" },
  { src: "https://picsum.photos/id/1065/600/400", alt: "Landscape 3" },
  { src: "https://picsum.photos/id/1075/450/300", alt: "Portrait 4" },
  { src: "https://picsum.photos/id/1085/300/450", alt: "Portrait 5" },
  { src: "https://picsum.photos/id/1095/600/400", alt: "Landscape 4" },
  { src: "https://picsum.photos/id/1105/400/600", alt: "Portrait 6" },
  { src: "https://picsum.photos/id/1115/600/400", alt: "Landscape 5" },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`${
            index % 3 === 0
              ? "col-span-2 row-span-2"
              : "col-span-1 row-span-1"
          } overflow-hidden`}
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
