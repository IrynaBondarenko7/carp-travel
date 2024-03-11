export const About = () => {
  return (
    <section
      id="about"
      className="py-14 sm:px-5 smm:px-5  relative md:w-768 w-480 sm:w-screen xl:w-100% 2xl:w-1440 mx-auto about-section md:px-8 xl:p-104"
    >
      <div className="md:flex md:gap-76 xl:gap-6 ">
        <h2 className="text-white sm:text-40 smm:text-40 leading-56 sm:tracking-1.6 smm:tracking-1.6 font-thin mb-2 md:text-67 md:tracking-2.68 xl:text-98 xl:-tracking-3.92 xl:mb-0 xl:leading-none">
          WHO <b>WE ARE</b>
        </h2>
        <div className="md:flex md:flex-col">
          <p className="text-white sm:text-sm smm:text-sm sm:w-180 smm:w-180 mb-5 font-extralight md:text-base md:leading-5 md:w-220 xl:text-lg xl:leading-6 xl:w-292 xl:mb-6">
            <strong>a team of enthusiasts </strong>
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>

          <p className="text-white sm:text-sm smm:text-sm sm:w-180 smm:w-180 font-extralight md:text-base md:leading-5 md:w-220 xl:text-lg xl:leading-6 xl:w-292">
            <strong>We believe </strong>
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:m-top-74">
        <div className="text-white pt-10 flex flex-col items-end text-sm mb-10 md:absolute md:bottom-28 xl:static xl:pt-0 xl:text-lg xl:leading-6">
          <p className="uppercase mr-10 xl:m-r-7.5rem">From vacationers </p>
          <p className="uppercase">to active travelers</p>
          <p className="font-extralight xl:tracking-2.16">
            we have a tour for everyone.
          </p>
        </div>
        <p className="text-white sm:text-sm  smm:text-sm  font-extralight md:mt-16 md:w-463 md:ml-auto md:text-base xl:m-0 xl:text-lg xl:leading-6 xl:w-605">
          <strong>We use methods </strong>
          that are time-tested and proven. Our expert guides with in-depth
          knowledge of the Carpathian landscapes lead you safely through the
          mysteries of these mountains.
        </p>
      </div>
    </section>
  );
};
