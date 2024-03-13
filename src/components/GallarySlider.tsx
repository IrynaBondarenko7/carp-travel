"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { sliderGalleryTabImages } from "./constants";

import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const GallerySlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Navigation]}
      className="gallary-slider"
      loop={true}
      spaceBetween={40}
    >
      {sliderGalleryTabImages.map((img) => {
        return (
          <SwiperSlide key={img.id}>
            <img src={img.image} alt="nature" />
          </SwiperSlide>
        );
      })}
      <button className="swiper-button-next transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white">
        NEXT
      </button>
      <button className="swiper-button-prev transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white">
        BACK
      </button>
    </Swiper>
  );
};
