export const About = () => {
  return (
    <section
      id="about"
      className="py-14 px-5 bg-center bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: 'url("/images/about/about-bg-mb.png")',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full  z-0 bg-gradient-custom opacity-75"></div>
      <div className="relative">
        <h2 className="text-white text-40 leading-56 tracking-1.6 font-thin mb-2">
          WHO <b>WE ARE</b>
        </h2>
        <p className="text-white text-sm w-180 mb-5 font-extralight">
          <strong>a team of enthusiasts </strong>
          who are fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="text-white text-sm w-180 font-extralight">
          <strong>We believe </strong>
          that nature has the power to inspire, strengthen character and provide
          new perspectives. Therefore, each of our tours is aimed at unlocking
          your potential, enriching your spiritual world and creating
          unforgettable memories.
        </p>
        <div className="text-white pt-10 flex flex-col items-end text-sm mb-10">
          <p className="uppercase mr-10">From vacationers </p>
          <p className="uppercase">to active travelers</p>
          <p className="font-extralight">we have a tour for everyone.</p>
        </div>
        <p className="text-white text-sm  font-extralight">
          <strong>We use methods </strong>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>
      </div>
    </section>
  );
};
