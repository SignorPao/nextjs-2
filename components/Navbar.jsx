import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logoImg from "@/public/PB.png";

import { navData } from "@/data/navData";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [navTxt, setNavTxt] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav style={{backgroundColor: `${navBg}`}} className="font-inter fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="z-10">
          <Image src={logoImg} width={40} height={30} alt="logo" />
        </Link>

        <ul className="hidden sm:flex gap-x-4">
          {navData.map(({ id, link, href }) => (
            <li key={id}>
              <Link href={href} className="navLink">
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* mobile btn */}
        <div className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          {/* <AiOutlineMenu size={20} /> */}
        </div>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen bg-black/90 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 bottom-0 -left-[100%] right-0 flex items-center justify-center w-full h-screen bg-black/90 text-center ease-in duration-300"
          }
        >
          <ul className="flex flex-col gap-y-4">
            {navData.map(({ id, link, href }) => (
              <li key={id}>
                <Link href={href} className="navLink text-4xl">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
