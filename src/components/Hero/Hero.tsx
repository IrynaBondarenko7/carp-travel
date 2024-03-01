import Link from "next/link";

export const Hero = () => {
  return (
    <section
      className="absolute top-0 left-0  w-screen h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: 'url("/images/hero/hero-bg-mb.png")',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full  z-0 bg-gradient-custom opacity-75"></div>
      <div className="flex flex-col z-10 relative pt-28  w-full px-5">
        <p className="text-white text-4xl leading-none font-thin tracking-widest text-right">
          <span className="font-medium">7</span>
          DAYS
        </p>
        <p className="text-white text-xs leading-normal font-light tracking-custom text-right">
          JOURNEY
        </p>
        <p className="text-white text-40 leading-56 tracking-tight uppercase font-thin pt-6">
          <span className="font-medium">Uncover</span>
          <br />
          Carpathian’s <br />
          Secrets
        </p>
        <p className="text-white text-xs font-extralight pt-6">
          Hoverla / Yaremche / Zakarpattia / <br />
          Vorokhta / Synevyr Lake / Bukovel
        </p>
        <p className="text-white text-sm font-extralight pt-6">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <Link
          href="#contacts"
          className="text-white text-center text-lg font-bold mt-7 px-16 py-3.5 bg-btn btn relative"
        >
          JOIN NOW
        </Link>
      </div>
    </section>
  );
};
