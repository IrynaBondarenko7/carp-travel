export interface ServiceInfo {
  isActive: boolean;
  serviceClass: string;
}

export const getServiceInfo = (
  index: number,
  activeSlideIndex: number
): ServiceInfo => {
  let isActive = false;
  let serviceClass = "";

  if (index === activeSlideIndex) {
    serviceClass =
      "text-white uppercase w-163 text-left leading-4 font-medium md:w-186 md:leading-18 xl:text-28 xl:w-60 xl:leading-6 transition duration-500 ease-in-out focus:outline-white focus:outline-1";
    isActive = true;
  } else {
    serviceClass =
      "text-white uppercase w-170 text-left leading-4 opacity-50 hover:opacity-100 md:w-186 md:leading-18 xl:text-28 xl:w-60 xl:leading-6 transition duration-500 ease-in-out focus:outline-white focus:outline-1 focus:opacity-100 focus:p-2";
    isActive = false;
  }

  return { isActive, serviceClass };
};
