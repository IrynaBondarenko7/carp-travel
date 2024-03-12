import { Link as ScrollLink } from "react-scroll";

export const BurgerMenu = ({ closeMenu }) => {
  return (
    <section className="z-40 w-screen h-screen bg-burgerBg backdrop absolute top-0 left-0 px-5 pt-11 smm:w-480">
      <button
        type="button"
        className="text-white ml-auto block text-sm tracking-widest hover:underline"
        onClick={closeMenu}
      >
        CLOSE
      </button>
      <ul className="flex flex-col  items-center pt-28 gap-y-12 text-lg tracking-widest">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-white hover:underline"
            onClick={closeMenu}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-white hover:underline"
            onClick={closeMenu}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="career"
            smooth={true}
            duration={500}
            className="text-white hover:underline"
            onClick={closeMenu}
          >
            Career
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            className="text-white hover:underline"
            onClick={closeMenu}
          >
            Gallery
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="text-white hover:underline"
            onClick={closeMenu}
          >
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </section>
  );
};
