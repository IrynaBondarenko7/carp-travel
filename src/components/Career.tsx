import { CareerForm } from "./CareerForm";
import { CarreerList } from "./CarreerList";

export const Career = () => {
  return (
    <section className="text-white " id="career">
      <div className="career-section md:w-768 w-480 mx-auto h-auto sm:w-screen md:pb-14 xl:w-100% 2xl:w-1440 xl:p-104 xl:relative">
        <div className="py-14 px-5 bg-center bg-cover career-section-top md:px-8 xl:p-0">
          <div className="md:flex md:justify-between xl:mb-6">
            <h2 className="text-40 uppercase font-thin leading-56 tracking-1.6 md:text-67 md:tracking-2.68 xl:text-98 xl:tracking-3.92 xl:leading-none ">
              Choose <span className="font-medium">US</span>
            </h2>
            <p className="text-sm font-extralight leading-5 w-44 text-left ml-auto pt-6 md:ml-0 md:pt-0 md:text-13 md:text-justify md:w-220 xl:text-lg xl:leading-6 xl:w-294">
              Your chance to join our passionate team in Carpathian tourism.
              Seeking talented professionals to share our common mission.
            </p>
          </div>
          <p className="text-3xl uppercase font-extralight text-right pr-14 pt-9 md:pt-0 md:text-left md:pl-20 xl:mb-11">
            Why us ?
          </p>
          <div className="md:hidden">
            <CarreerList />
          </div>
        </div>
        <div className="md:flex md:px-8 md:gap-5 xl:p-0 xl:gap-6">
          <div className="hidden md:block xl:pl-8">
            <CarreerList />
          </div>
          <div className="py-14 sm:px-5 smm:px-5 bg-center bg-cover career-section-bottom md:py-0 ">
            <p className="text-sm font-extralight leading-5 w-180 text-left ml-auto md:ml-0 md:text-13 xl:absolute top-220 ">
              Don&#39;t miss your opportunity! Fill out the form right now and
              join our team!
            </p>
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  );
};
