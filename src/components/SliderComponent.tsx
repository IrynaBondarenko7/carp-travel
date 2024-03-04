import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";
import { services } from "./constants";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
export interface Img {
  image: string;
  id: number;
}
interface SliderComponentProps {
  data: Img[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
}

export const SliderComponent: FC<SliderComponentProps> = ({
  data,
  activeIndex,
  onSlideChange,
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(activeIndex);
    }
  }, [activeIndex, swiperInstance]);

  return (
    <>
      <Swiper
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        slidesPerView={1}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`slide-content ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={item.image}
                alt={services[index]}
                className="mx-auto "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
