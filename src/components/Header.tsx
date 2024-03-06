"use client";
import Image from "next/image";
import Link from "next/link";
import { BurgerMenu } from "./BurgerMenu";
import { useState } from "react";
import { Nav } from "./Nav";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onMenuBtnClick = () => {
    setIsVisible(!isVisible);
  };

  const openMenu = () => {
    document.body.classList.add("menu-open");
    onMenuBtnClick();
  };

  const closeMenu = (): void => {
    document.body.classList.remove("menu-open");
    onMenuBtnClick();
  };

  return (
    <header className="pt-9 px-5  z-10 absolute top-0  sm:w-screen w-480 left-1/2 -translate-x-1/2 md:w-768 md:px-8">
      <div className="flex justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" width={61} height={33} alt="logo" />
        </Link>
        <button
          type="button"
          className="text-white text-base leading-normal tracking-wider hover:underline md:hidden"
          onClick={openMenu}
        >
          MENU
        </button>
        <Nav />
      </div>
      {isVisible && <BurgerMenu closeMenu={closeMenu} />}
    </header>
  );
};
