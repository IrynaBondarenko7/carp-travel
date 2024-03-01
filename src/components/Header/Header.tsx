import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-9 px-5 flex justify-between z-10 relative">
      <Link href="/">
        <Image src="/images/logo.svg" width={61} height={33} alt="logo" />
      </Link>
      <button
        type="button"
        className="text-white text-base leading-normal tracking-wider"
      >
        MENU
      </button>
    </header>
  );
};
