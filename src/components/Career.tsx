import { CareerForm } from "./CareerForm";

export const Career = () => {
  return (
    <section className="text-white " id="career">
      <div>
        <div
          className="py-14 px-5 bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.75),rgba(2, 15, 8, 0.75)), url("/images/career/bg-mb.png")`,
          }}
        >
          <h2 className="text-40 uppercase font-thin leading-56 tracking-1.6">
            Choose <span className="font-medium">US</span>
          </h2>
          <p className="text-sm font-extralight leading-5 w-44 text-left ml-auto pt-6">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          <p className="text-3xl uppercase font-extralight text-right pr-14 pt-9">
            Why us ?
          </p>
          <div className="pt-9 flex flex-col gap-4 items-start w-180">
            <p className="leading-5 text-xs font-extralight text-right">
              <span className="pb-2 text-sm font-normal">
                Professional development
              </span>
              <br />
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </p>
            <p className="leading-5 text-xs font-extralight text-right">
              <span className="pb-2 text-sm font-normal">Teamwork</span>
              <br />
              Join our close-knit family, where support and inspiration abound.
            </p>
            <p className="leading-5 text-xs font-extralight text-right">
              <span className="pb-2 text-sm font-normal">
                Stimulating work environment
              </span>
              <br />
              Flexibility and remote options for a comfortable experience.
            </p>
            <p className="leading-5 text-xs font-extralight text-right">
              <span className="pb-2 text-sm font-normal">
                Exciting challenges
              </span>
              <br />
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
          </div>
        </div>
        <div
          className="py-14 px-5 bg-center bg-cover opacity-75"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 15, 8, 0.75),rgba(2, 15, 8, 0.75)),url("/images/career/bg-mb.png")`,
          }}
        >
          <p className="text-sm font-extralight leading-5 w-180 text-left ml-auto">
            Don&#39;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>
          <CareerForm />
        </div>
      </div>
    </section>
  );
};
