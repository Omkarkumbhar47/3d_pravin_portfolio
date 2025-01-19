import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
  Thumbs,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // For Thumbs Synchronization

  return (
    <div className="w-full py-10 px-4">
      {/* Main Slider */}
      <div className="col-span-1 text-6xl font-bold ml-10 py-5 text-center">
        <h1 className="text-white leading-tight">Captivating</h1>
        <h1 className="text-[#b6b4bd33]">Moments</h1>
      </div>
      <div className="w-full  max-w-5xl mx-auto rounded-lg  overflow-hidden">
        <Swiper
          className="w-full shadow-lg"
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          effect="coverflow"
          autoplay={{
            delay: 3000, // 3 seconds delay for autoplay
            disableOnInteraction: false, // keeps autoplay even when user interacts with the slider
          }}
          thumbs={{ swiper: thumbsSwiper }} // Link main swiper with thumbs swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectCoverflow,
            Autoplay,
            Thumbs,
          ]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              src={img1}
              alt="Slide 1"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Slide 2"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Slide 3"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              alt="Slide 4"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img5}
              alt="Slide 5"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img6}
              alt="Slide 6"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img7}
              alt="Slide 7"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img8}
              alt="Slide 8"
              className="w-fit m-auto object-contain h-[400px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Thumbs Gallery */}
      <div className="my-6">
        <div className="w-full max-w-5xl mx-auto flex justify-center items-center p-4 rounded-lg shadow-md">
          <Swiper
            onSwiper={setThumbsSwiper} // Set the thumbs swiper instance
            spaceBetween={10}
            slidesPerView={4}
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
          >
            <SwiperSlide>
              <img
                src={img1}
                alt="Thumbnail 1"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="Thumbnail 2"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="Thumbnail 3"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                alt="Thumbnail 4"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img5}
                alt="Thumbnail 5"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img6}
                alt="Thumbnail 6"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img7}
                alt="Thumbnail 7"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img8}
                alt="Thumbnail 8"
                className="w-full h-20 object-cover rounded-md shadow-sm"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
