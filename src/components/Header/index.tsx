"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300 dark:text-dark"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About Us
        </Link>
        <Link href="/blog" className="mx-2">
          Blog
        </Link>
        <Link href="/contact" className="mx-2">
          Contacts
        </Link>
        <Link href="/search" className="scale-100 hover:scale-125 ">
          <FaMagnifyingGlass size='1.1rem' />
        </Link>
      </nav>
      <div className="hidden sm:flex items-center">
      <ThemeSwitch/>
      </div>
    </header>
  );
};

export default Header;
