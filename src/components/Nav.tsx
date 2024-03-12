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
            className="cursor-pointer transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="career"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white"
          >
            Career
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white"
          >
            Gallery
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-500 ease-in-out border-b border-transparent hover:border-white focus:outline-white"
          >
            Contacts
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
