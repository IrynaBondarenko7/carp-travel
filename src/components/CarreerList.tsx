export const CarreerList = () => {
  return (
    <ul className="pt-9 flex flex-col gap-4 items-start w-180 md:pt-0 md:w-225 xl:w-562 xl:gap-6">
      <li>
        <p className="leading-5 text-xs font-extralight text-right flex flex-col xl:flex-row xl:gap-6">
          <span className="pb-2 text-sm font-normal md:text-base xl:text-lg xl:left-6 xl:w-64 ">
            Professional development
          </span>
          <span className="xl:w-72 xl:text-left xl:leading-6">
            We offer growth opportunities and a creative environment to nurture
            your talents.
          </span>
        </p>
      </li>
      <li>
        <p className="leading-5 text-xs font-extralight text-right flex flex-col xl:flex-row xl:gap-6">
          <span className="pb-2 text-sm font-normal md:text-base xl:text-lg xl:left-6 flex flex-col xl:flex-row xl:w-64 xl:block">
            Teamwork
          </span>
          <span className="xl:w-72 xl:text-left xl:leading-6">
            Join our close-knit family, where support and inspiration abound.
          </span>
        </p>
      </li>
      <li>
        <p className="leading-5 text-xs font-extralight text-right flex flex-col xl:flex-row xl:gap-6">
          <span className="pb-2 text-sm font-normal md:text-base xl:text-lg xl:left-6 xl:w-64">
            Stimulating work environment
          </span>
          <span className="xl:w-72 xl:text-left xl:leading-6">
            Flexibility and remote options for a comfortable experience.
          </span>
        </p>
      </li>
      <li>
        <p className="leading-5 text-xs font-extralight text-right flex flex-col xl:flex-row xl:gap-6">
          <span className="pb-2 text-sm font-normal md:text-base xl:text-lg xl:left-6 xl:w-64">
            Exciting challenges
          </span>
          <span className="xl:w-72 xl:text-left xl:leading-6">
            Unleash your potential through unforgettable projects showcasing
            Carpathian beauty.
          </span>
        </p>
      </li>
    </ul>
  );
};
