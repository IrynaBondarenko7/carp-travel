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
      navigation={true}
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
    </Swiper>
  );
};
