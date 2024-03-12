import { Link as ScrollLink } from "react-scroll";

export const Nav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="text-white flex gap-6 text-sm tracking-1.4">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="career"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Career
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Gallery
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
