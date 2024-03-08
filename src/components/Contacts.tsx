import { ContactsForm } from "./ContactsForm";

export const Contacts = () => {
  return (
    <section className="contacts-section py-14 px-5 md:w-768 w-480 mx-auto h-auto sm:w-screen md:px-8 md:py-16">
      <h2 className="text-white text-40 font-thin leading-56 tracking-1.6 mb-6 uppercase md:text-67 md:tracking-2.68 md:mb-9">
        Contact <span className="font-medium">US</span>
      </h2>
      <address className="text-white flex flex-col gap-6 items-end w-100% mb-3 md:flex-wrap md:flex-row md:items-baseline md:relative md:pl-16">
        <ul className="flex gap-5 items-baseline md:w-50%">
          <li>
            <ul className="flex flex-col">
              <li>
                <a
                  href="tel:+380981234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  +38 (098) 12 34 567
                </a>
              </li>
              <li>
                <a
                  href="tel:+380731234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  +38 (073) 12 34 567
                </a>
              </li>
            </ul>
          </li>
          <li>
            <p className="text-xs font-extralight">Phone number</p>
          </li>
        </ul>
        <ul className="flex gap-5  m-right-46 items-baseline md:order-1 md:w-50% md:absolute md:bottom-0 custom-left">
          <li>
            <a
              href="mailto:support@carptravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 hover:underline md:text-base"
            >
              support@carptravel.com
            </a>
          </li>
          <li>
            <p className="text-xs font-extralight">E-mail</p>
          </li>
        </ul>

        <ul className="flex gap-5 m-right-15">
          <li>
            <p className="text-xs font-extralight">Follow us</p>
          </li>
          <li>
            <ul className="flex flex-col">
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline md:text-base"
                >
                  tiktok
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </address>
      <ContactsForm />
    </section>
  );
};
