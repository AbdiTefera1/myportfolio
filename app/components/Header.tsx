"use client";

import { useState } from "react";
import Image from "next/image";
import linkedin from "../assets/linkedIn.png";
import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import tiktok from '../assets/tiktok.png';
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2E2F34] shadow-md">
      <div className="container px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-extrabold text-white">
            <span className="text-4xl text-[#ceb67d]">&lt;</span> A{" "}
            <span className="text-4xl text-[#ceb67d]">/</span> T{" "}
            <span className="text-4xl text-[#ceb67d]">&gt;</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <div className="flex space-x-6">
            <Link href="#home" className="text-white hover:text-[#CEB67D] transition">
              Home
            </Link>
            <Link href="#service" className="text-white hover:text-[#CEB67D] transition">
              Services
            </Link>
            <Link href="#portfolio" className="text-white hover:text-[#CEB67D] transition">
              Portfolio
            </Link>
            <Link href="#contact" className="text-white hover:text-[#CEB67D] transition">
              Contact
            </Link>
          </div>
          {/* Divider */}
          <div className="border-l h-6 border-[#ceb67d] mx-4"></div>
          {/* Social Icons */}
          <div className="flex space-x-3">
            <Link href="https://www.linkedin.com/in/abditefera/">
              <Image
                src={linkedin}
                className="rounded-sm hover:opacity-80 transition"
                alt="LinkedIn logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="#">
              <Image
                src={tiktok}
                className="rounded-sm hover:opacity-80 transition"
                alt="Tiktok logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="https://t.me/design2code1">
              <Image
                src={telegram}
                className="rounded-sm hover:opacity-80 transition"
                alt="Telegram logo"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-[#CEB67D] font-bold focus:outline-none ${
              isOpen
                ? "border border-[#CEB67D] rounded-sm"
                : "hover:border border-[#CEB67D] rounded-sm"
            } transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-[#2E2F34] py-4 space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="#home" className="block text-white hover:text-[#CEB67D] transition text-center">
              Home
            </Link>
            <Link href="#service" className="block text-white hover:text-[#CEB67D] transition text-center">
              Services
            </Link>
            <Link href="#portfolio" className="block text-white hover:text-[#CEB67D] transition text-center">
              Portfolio
            </Link>
            <Link href="#contact" className="block text-white hover:text-[#CEB67D] transition text-center">
              Contact
            </Link>
          </div>
          {/* Divider */}
          <div className="border-t w-1/2 mx-auto border-[#ceb67d]"></div>
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 pt-4">
            <Link href="#">
              <Image
                src={linkedin}
                className="rounded-sm hover:opacity-80 transition"
                alt="LinkedIn logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="#">
              <Image
                src={facebook}
                className="rounded-sm hover:opacity-80 transition"
                alt="Facebook logo"
                height={25}
                width={25}
              />
            </Link>
            <Link href="#">
              <Image
                src={telegram}
                className="rounded-sm hover:opacity-80 transition"
                alt="Telegram logo"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
