"use client";
import Image from "next/image";
import { mobGalerrySrc, sliderImages } from "./constants";
import { GallerySlider } from "./GallarySlider";

export const Gallery = () => {
  return (
    <section
      className="gallery-section py-14 px-5 md:w-768 w-480 mx-auto h-full md:pb-12 sm:w-screen xl:w-100% 2xl:w-1440 xl:p-104 overflow-x-hidden"
      id="gallery"
    >
      <h2 className="text-white text-40 font-thin leading-56 tracking-1.6 mb-6 md:text-67 md:tracking-2.68 md:pb-16 md:text-center xl:text-98 xl:tracking-3.92 xl:text-left xl:mb-8 xl:p-0">
        OUR <span className="font-medium ">GALLERY</span>
      </h2>
      <ul className="flex flex-col gap-6 items-center md:hidden">
        {mobGalerrySrc.map((src, index) => {
          return (
            <li key={index}>
              <Image src={src} alt="nature" width={280} height={187} />
            </li>
          );
        })}
      </ul>
      <div className="hidden md:block gallary-slider-wrap">
        <GallerySlider />
      </div>
    </section>
  );
};
