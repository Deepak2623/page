"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-950 border-b-2 border-gray-700 text-white py-4 md:py-6 px-4 md:px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-40 h-20 " />
        </Link>
      </div>
      <div className="flex-grow"></div>
      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div
        className="md:hidden cursor-pointer text-2xl"
        onClick={toggleMobileMenu}
      >
        ☰
      </div>
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-16 right-4 bg-blue-950 text-white flex flex-col items-center space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
