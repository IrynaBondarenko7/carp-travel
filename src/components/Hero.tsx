import Link from "next/link";
import { Slogan } from "./Slogan";

export const Hero = () => {
  return (
    <section className="sm:w-screen sm:pb-14  bg-center bg-no-repeat bg-cover hero-section md:w-768 w-480 mx-auto h-auto md:pb-12  xl:w-100% 2xl:w-1440">
      <div className="flex flex-col  relative pt-28  w-full sm:px-5 smm:px-5 md:flex-row md:px-8 md:pt-32 md:gap-12 xl:justify-center xl:p-x-104 xl:pt-32 xl:gap-0 xl:justify-between">
        <div className="md:hidden">
          <Slogan />
        </div>
        <div>
          <p className="text-white text-40 sm:leading-56 smm:leading-56 sm:tracking-tight smm:tracking-tight uppercase font-thin pt-6 md:pt-0 md:text-67 md:tracking-2.68 md:leading-70 xl:text-98 xl:tracking-3.92 xl:leading-normal">
            <span className="font-medium">Uncover</span>
            <br />
            Carpathian’s <br />
            Secrets
          </p>
          <p className="text-white text-xs font-extralight sm:pt-6 smm:pt-6 md:pt-16 xl:pt-36 w-48 xl:w-100% xl:text-base xl:tracking-widest">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>
        </div>
        <div className="md:w-230 xl:w-294">
          <div className="hidden md:block md:mb-14 xl:mb-0">
            <Slogan />
          </div>
          <p className="text-white sm:text-sm smm:text-sm font-extralight sm:pt-6 smm:pt-6 md:p-0 md:text-justify md:text-base xl:text-lg xl:leading-snug xl:mt-44">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </p>
          <Link
            href="#contacts"
            className="text-white text-center text-lg font-bold mt-7 px-16 sm:py-3.5 smm:py-3.5 bg-btn btn relative hover:bg-btnHover transition block md:py-3 xl:text-32 xl:py-5"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </section>
  );
};
