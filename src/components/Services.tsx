"use client";
import { Swiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import { type Img, SliderComponent } from "./SliderComponent";
import {
  services,
  sliderDescription,
  sliderImages,
  sliderTitle,
} from "./constants";

export const Services = () => {
  const [sliderData, setSliderData] = useState<Img[]>(sliderImages);

  const [titleIndex, setTitleIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideClick = (index: number) => {
    setActiveSlideIndex(index);
    setTitleIndex(index);
    setDescriptionIndex(index);

    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <section
      className="bg-neutral-950 bg-opacity-50 py-[54px] px-5 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.50),rgba(2, 15, 8, 0.50)), url("/images/services/mobile/bg-${
          activeSlideIndex + 1
        }.png")`,
      }}
    >
      <h2 className="text-white font-thin ">
        <span className="text-[40px]  uppercase leading-[56px]">WE </span>
        <span className=" text-[40px] font-medium  uppercase leading-[56px]">
          OFFER
        </span>
      </h2>
      <p className="text-right mb-2.5">
        <span className="text-white text-[43px] font-thin">
          0{activeSlideIndex + 1}/
        </span>
        <span className="text-white text-opacity-20 text-[43px] font-thin">
          05
        </span>
      </p>

      <SliderComponent
        data={sliderData}
        activeIndex={activeSlideIndex}
        onSlideChange={handleSlideClick}
      />

      <h2 className="text-white mt-4 text-right text-xs font-extralight tracking-2.4">
        {sliderTitle[titleIndex]}
      </h2>
      <ul className="pt-6 flex flex-col gap-y-4 font-extralight text-xl">
        {services.map((service, index) => {
          let serviceClass = "";
          let isActive = false;
          if (index === activeSlideIndex) {
            serviceClass =
              "text-white uppercase w-163 text-left leading-4 font-medium";
            isActive = true;
          } else {
            serviceClass = "text-white uppercase w-170 text-left leading-4";
            isActive = false;
          }

          return (
            <li key={index} className="flex gap-1.5 items-center">
              {isActive && (
                <div className="w-1.5 h-1.5 bg-white rotate-45"></div>
              )}
              <button
                onClick={() => handleSlideClick(index)}
                className={serviceClass}
              >
                {service}
              </button>
            </li>
          );
        })}
      </ul>

      <p className="text-white text-sm font-extralight leading-5 m-top-74">
        {sliderDescription[descriptionIndex]}
      </p>
    </section>
  );
};
