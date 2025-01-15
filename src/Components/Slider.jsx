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
    <div className="w-full">
      <Swiper
        className="w-full h-screen"
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        navigation
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
          <img src={img1} alt="Slide 1" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 4" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slide 5" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Slide 6" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Slide 7" className="w-full object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="Slide 8" className="w-full object-contain" />
        </SwiperSlide>
      </Swiper>

      {/* Thumbs Gallery */}
      <div className="mx-auto my-4 justify-center flex">
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
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Thumbnail 2"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Thumbnail 3"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              alt="Thumbnail 4"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img5}
              alt="Thumbnail 5"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img6}
              alt="Thumbnail 6"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img7}
              alt="Thumbnail 7"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img8}
              alt="Thumbnail 8"
              className="w-30 h-20 object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
