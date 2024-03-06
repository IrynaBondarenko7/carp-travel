import { ContactsForm } from "./ContactsForm";

export const Contacts = () => {
  return (
    <section className="contacts-section py-14 px-5">
      <h2 className="text-white text-40 font-thin leading-56 tracking-1.6 mb-6 uppercase">
        Contact <span className="font-medium">US</span>
      </h2>
      <address className="text-white flex flex-col gap-6 items-end w-100% mb-3">
        <ul className="flex gap-5 items-baseline">
          <li>
            <ul className="flex flex-col">
              <li>
                <a
                  href="tel:+380981234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline"
                >
                  +38 (098) 12 34 567
                </a>
              </li>
              <li>
                <a
                  href="tel:+380731234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline"
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
        <ul className="flex gap-5  m-right-46 items-baseline">
          <li>
            <a
              href="mailto:support@carptravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 hover:underline"
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
                  className="text-sm leading-6 hover:underline"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline"
                >
                  youtube
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 hover:underline"
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
