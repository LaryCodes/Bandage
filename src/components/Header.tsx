"use client";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiChevronDown,
  FiMenu,
  FiGithub ,
  FiX,
} from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-[#252B42] py-4 px-5  hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-white text-sm">
          {/* Contact Information */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>(225) 555-0118</p>
            </div>
            <div className="flex items-center gap-1">
              <FiMail />
              <p>michelle.rivera@example.com</p>
            </div>
          </div>

          {/* Promotion */}
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block">Follow Us:</p>
            <Link
              href="https://www.instagram.com/lary.codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </Link>
            <Link
              href="https://www.github.com/larycodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub  />
            </Link>
            <Link
              href="https://www.linkedin.com/in/larycodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-white shadow-lg border-b-2 border-[#E5E5E5] relative z-40">
        <div className="container mx-auto flex items-center justify-between pl-2 py-4">
          {/* Logo */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl text-[#252B42]" />
              ) : (
                <FiMenu className="text-3xl text-[#252B42]" />
              )}
            </button>
          <div className="text-2xl pl-2 font-bold text-[#252B42]">
          <Link href="/">Bandage</Link>
          </div>

          {/* Action Icons (Mobile and Desktop) */}
          <div className="flex items-center gap-4 md:hidden">
            {/* <FiSearch className="text-2xl text-blue-500 cursor-pointer" /> */}
            <Link href="/cart">
            <FiShoppingCart className="text-2xl text-blue-500 cursor-pointer" />
            </Link>
            <Link href="/liked-products">
            <FiHeart className="text-2xl text-blue-500 cursor-pointer" />
            </Link>
            <button className="text-sm font-medium pr-2">
              <SignedOut>
                <button className=" text-blue-500 "><SignInButton mode="modal" /></button> 
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium text-[#737373] relative">
              <li>
                <Link href="/" className="hover:text-[#23A6F0] transition-all">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/products"
                  className="flex items-center gap-1 hover:text-[#23A6F0] transition-all"
                >
                  Shop
                  <FiChevronDown />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#23A6F0] transition-all">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#23A6F0] transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Action Icons for Desktop */}
          <div className="hidden md:flex items-center gap-6 text-[#23A6F0]">
              {/* /
              <Link href="/register">Register</Link> */}
            <FiSearch className="text-lg cursor-pointer" />
            <Link href="/cart">
            <FiShoppingCart className="text-lg cursor-pointer" />
            </Link>
            <Link href="/liked-products">
            <FiHeart className="text-lg cursor-pointer" />
            </Link>
              <button className="text-sm font-medium pr-5">
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white shadow-md transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col gap-6 p-4 text-[20px] text-[#737373] text-center">
            <li>
              <Link href="/" className="hover:text-[#23A6F0] transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#23A6F0] transition-all">
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-[#23A6F0] transition-all"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#23A6F0] transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#23A6F0] transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;