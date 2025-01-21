import React from "react";
import video1 from "../assets/video/1.mp4"
import video2 from "../assets/video/2.mp4"
import video3 from "../assets/video/3.mp4"
import video4 from "../assets/video/4.mp4"
import video5 from "../assets/video/5.mp4"
import video6 from "../assets/video/6.mp4"
import video7 from "../assets/video/3dmodelVideo2.mp4"
import video8 from "../assets/video/1730899968326.mp4"
// import video9 from "../assets/video/3dmodelVideo.mp4"
 const VideoGallery = () => {
  const videos = [
    { src: video1, title: "Video 1" },
    { src: video8, title: "Video 2" },
    { src: video5, title: "Video 3" },
    { src: video2, title: "Video 4" },
    { src: video7, title: "Video 5" },
    { src: video3, title: "Video 6" },
    { src: video4, title: "Video 7" },
    { src: video6, title: "Video 8" },
    // { src: video9, title: "Video 9" },
  ];

  return (
    <section className="bg-gray-900 py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-6xl">
          Vid<span className="text-indigo-500">eo</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Explore our collection of featured videos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <video
              controls
              className="w-full h-64 sm:h-48 md:h-64 lg:h-72 object-cover"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">{video.title}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Enjoy this amazing video and explore its unique content.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
