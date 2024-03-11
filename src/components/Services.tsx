"use client";
import { Swiper, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";
import { type Img, SliderComponent } from "./SliderComponent";
import {
  services,
  sliderDescription,
  sliderImages,
  sliderTitle,
  sliderTabImages,
  sliderDeskImages,
} from "./constants";

export const Services = () => {
  const [sliderData, setSliderData] = useState<Img[]>(sliderImages);
  const [device, setDevice] = useState("mobile");

  const [titleIndex, setTitleIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const sliderStyles =
    "mx-auto md:w-466 md:h-370 md:object-cover xl:w-608 xl:h-434";

  const handleSlideClick = (index: number) => {
    setActiveSlideIndex(index);
    setTitleIndex(index);
    setDescriptionIndex(index);

    swiperRef.current?.swiper.slideTo(index);
  };

  let screenSize = 480;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setSliderData(sliderImages);
        screenSize = 480;
        setDevice("mobile");
      }

      if (window.innerWidth >= 768) {
        setSliderData(sliderTabImages);
        screenSize = 768;
        setDevice("tablet");
      }
      if (window.innerWidth >= 1200) {
        setSliderData(sliderDeskImages);
        screenSize = 1200;
        setDevice("desk");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    <section
      className="bg-neutral-950 bg-opacity-50 py-[54px] sm:px-5 smm:px-5 md:px-8 bg-center bg-no-repeat bg-cover sm:w-screen md:w-768 w-480 mx-auto h-auto xl:w-100% 2xl:w-1440 xl:p-104"
      style={{
        backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.50),rgba(2, 15, 8, 0.50)), url("/images/services/${device}/bg-${
          activeSlideIndex + 1
        }.png")`,
      }}
      id="services"
    >
      <div className="md:flex md:gap-170 md:items-center md:mb-8">
        <h2 className="text-white font-thin sm:text-40 smm:text-40 uppercase leading-56 md:text-67 md:tracking-2.68 xl:text-98 xl:tracking-3.92">
          <span>WE </span>
          <span className="font-medium">OFFER</span>
        </h2>
        <p className="text-right mb-2.5 sm:text-43 smm:text-43 md:text-67 xl:text-98">
          <span className="text-white  font-thin">
            0{activeSlideIndex + 1}/
          </span>
          <span className="text-white text-opacity-20 font-thin">05</span>
        </p>
      </div>
      <div className="md:flex md:gap-5">
        <SliderComponent
          data={sliderData}
          activeIndex={activeSlideIndex}
          onSlideChange={handleSlideClick}
          sliderStyles={sliderStyles}
        />
        <div className="md:flex md:flex-col md:gap-9 xl:w-1/2 xl:gap-6">
          <div className="md:flex md:flex-col-reverse md:gap-6 xl:flex-row-reverse xl:justify-end">
            <h2 className="text-white sm:mt-4 smm:mt-4 sm:text-right smm:text-right text-xs font-extralight tracking-2.4">
              {sliderTitle[titleIndex]}
            </h2>
            <ul className="pt-6 flex flex-col gap-y-4 font-extralight text-xl md:pt-0 md:text-22 xl:gap-y-6">
              {services.map((service, index) => {
                let serviceClass = "";
                let isActive = false;
                if (index === activeSlideIndex) {
                  serviceClass =
                    "text-white uppercase w-163 text-left leading-4 font-medium md:w-186 md:leading-18 xl:text-28 xl:w-60 xl:leading-6";
                  isActive = true;
                } else {
                  serviceClass =
                    "text-white uppercase w-170 text-left leading-4 opacity-50 hover:opacity-100 md:w-186 md:leading-18 xl:text-28 xl:w-60 xl:leading-6";
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
          </div>
          <p className="text-white text-sm font-extralight leading-5 sm:m-top-74 smm:m-top-74 md:mt-0 md:w-220 md:text-justify md:text-13 xl:text-lg xl:leading-6 xl:w-294 xl:ml-auto">
            {sliderDescription[descriptionIndex]}
          </p>
        </div>
      </div>
    </section>
  );
};
