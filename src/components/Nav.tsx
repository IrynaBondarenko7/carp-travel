import Link from "next/link";
export const Nav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="text-white flex gap-6 text-sm tracking-1.4">
        <li>
          <Link href="#about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="#career" className="hover:underline">
            Career
          </Link>
        </li>
        <li>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="#contacts" className="hover:underline">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
