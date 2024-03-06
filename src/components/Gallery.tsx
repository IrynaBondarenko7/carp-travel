import Image from "next/image";
import { mobGalerrySrc } from "./constants";

export const Gallery = () => {
  return (
    <section className="gallery-section py-14 px-5" id="gallery">
      <h2 className="text-white text-40 font-thin leading-56 tracking-1.6 mb-6">
        OUR <span className="font-medium ">GALLERY</span>
      </h2>
      <ul className="flex flex-col gap-6 items-center">
        {mobGalerrySrc.map((src, index) => {
          return (
            <li key={index}>
              <Image src={src} alt="nature" width={280} height={187} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
