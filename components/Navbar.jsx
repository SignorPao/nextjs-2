import Image from "next/image";
import React from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logoImg from "@/public/PB.png";

const Navbar = () => {
  return (
    <nav className="font-inter fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="z-10">
          <Image src={logoImg} width={40} height={30} alt="logo" />
        </Link>

        <ul className="hidden sm:flex gap-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/portfolio">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile btn */}
        <div className="block sm:hidden z-10">
          <AiOutlineMenu size={20} />
        </div>

        {/* mobile menu */}
        <div className="sm:hidden absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen bg-black/80 text-center ease-in duration-300">
          <ul className="flex flex-col gap-y-4 text-4xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/portfolio">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
