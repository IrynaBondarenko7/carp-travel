import Link from "next/link";
export const BurgerMenu = ({ closeMenu }) => {
  return (
    <section className="z-40 w-screen h-screen bg-burgerBg backdrop absolute top-0 left-0 px-5 pt-11">
      <button
        type="button"
        className="text-white ml-auto block text-sm tracking-widest"
        onClick={closeMenu}
      >
        CLOSE
      </button>
      <ul className="flex flex-col  items-center pt-28 gap-y-12 text-lg tracking-widest">
        <li>
          <Link href="#about" className="text-white" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="text-white " onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#career" className="text-white " onClick={closeMenu}>
            Career
          </Link>
        </li>
        <li>
          <Link href="#gallery" className="text-white " onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="#contacts" className="text-white " onClick={closeMenu}>
            Contacts
          </Link>
        </li>
      </ul>
    </section>
  );
};
