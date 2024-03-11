import { ContactsForm } from "./ContactsForm";

export const Contacts = () => {
  return (
    <section
      className="contacts-section py-14 px-5 md:w-768 w-480 mx-auto h-auto sm:w-screen md:px-8 md:py-16 xl:w-100% 2xl:w-1440 xl:p-104"
      id="contacts"
    >
      <h2 className="text-white text-40 font-thin leading-56 tracking-1.6 mb-6 uppercase md:text-67 md:tracking-2.68 md:mb-9 xl:text-98 xl:tracking-3.92 xl:mb-20">
        Contact <span className="font-medium">US</span>
      </h2>
      <div className="xl:flex xl:flex-row 2xl:gap-48">
        <address className="text-white flex flex-col gap-6 items-end w-100% mb-3 md:flex-wrap md:flex-row md:items-baseline md:relative md:pl-16 xl:flex-col xl:gap-16">
          <ul className="flex gap-5 items-baseline md:w-50% xl:w-100%">
            <li className="xl:w-1/2">
              <ul className="flex flex-col">
                <li className="xl:text-right">
                  <a
                    href="tel:+380981234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    +38 (098) 12 34 567
                  </a>
                </li>
                <li className="xl:text-right">
                  <a
                    href="tel:+380731234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    +38 (073) 12 34 567
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xs font-extralight ">Phone number</p>
            </li>
          </ul>
          <ul className="flex gap-5  m-right-46 items-baseline md:order-1 md:w-50% md:absolute md:bottom-0 custom-left xl:order-none xl:static xl:w-100%">
            <li className="xl:w-1/2 xl:text-right">
              <a
                href="mailto:support@carptravel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
              >
                support@carptravel.com
              </a>
            </li>
            <li>
              <p className="text-xs font-extralight">E-mail</p>
            </li>
          </ul>

          <ul className="flex gap-5 m-right-15 xl:w-100% xl:flex-row-reverse xl:justify-end xl:pt-16">
            <li>
              <p className="text-xs font-extralight">Follow us</p>
            </li>
            <li className="xl:w-1/2">
              <ul className="flex flex-col ">
                <li className="xl:text-right">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    facebook
                  </a>
                </li>
                <li className="xl:text-right">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    instagram
                  </a>
                </li>
                <li className="xl:text-right">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    youtube
                  </a>
                </li>
                <li className="xl:text-right">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 hover:underline md:text-base xl:text-lg xl:leading-6"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </address>
        <ContactsForm />
      </div>
    </section>
  );
};
