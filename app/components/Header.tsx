"use client"

import { useState } from 'react';
import Image from 'next/image';
import linkedin from "../assets/image 1.svg"
import telegram from "../assets/image 9.svg"
import facebook from "../assets/image 5.svg"
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2E2F34] shadow-md">
      <div className="containe px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-extrabold text-white"><span className='text-4xl text-[#ceb67d]'>&lt;</span> A <span className='text-4xl text-[#ceb67d]'>/</span> T <span className='text-4xl text-[#ceb67d]'>&gt;</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <div>
          <Link href="#" className="text-white hover:border-b-2 border-b-[#CEB67D] py-1 mx-2">Home</Link>
          <Link href="#" className="text-white hover:border-b-2 border-b-[#CEB67D] py-1 mx-2">Services</Link>
          <Link href="#" className="text-white hover:border-b-2 border-b-[#CEB67D] py-1 mx-2">Portfolio</Link>
          <Link href="#" className="text-white hover:border-b-2 border-b-[#CEB67D] py-1 mx-2">Contact</Link>
          </div>
          <div className='border h-5 border-[#ceb67d]'></div>
          <div className='flex space-x-2'>
          <Link href="#"><Image src={linkedin} className='rounded-sm' alt='LinkedIn logo' height={25} width={25}></Image></Link>
          <Link href="#"><Image src={facebook} alt='LinkedIn logo' className='rounded-sm' height={25} width={25}></Image></Link>
          <Link href="#"><Image src={telegram} alt='LinkedIn logo' className='rounded-sm' height={25} width={25}></Image></Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-[#CEB67D] font-bold ${isOpen ? "focus:outline-none border border-[#CEB67D] rounded-sm" :"hover:border border-[#CEB67D] rounded-sm"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      
      {isOpen && (
  <div className="md:hidden bg-[#2d2f35] py-4 space-y-2 flex flex-col items-center justify-center">
    <div className="flex flex-col items-center space-y-2">
      <Link href="#" className="block text-white hover:border-b-1 border-b-[#CEB67D] text-center">Home</Link>
      <Link href="#" className="block text-white hover:border-b-1 border-b-[#CEB67D] text-center">Services</Link>
      <Link href="#" className="block text-white hover:border-b-1 border-b-[#CEB67D] text-center">Portfolio</Link>
      <Link href="#" className="block text-white hover:border-b-1 border-b-[#CEB67D] text-center">Contact</Link>
    </div>
    <div className="border w-5 border-[#ceb67d] my-4"></div>
    <div className="flex space-x-4">
      <Link href="#"><Image src={linkedin} className='rounded-sm' alt='LinkedIn logo' height={25} width={25}></Image></Link>
      <Link href="#"><Image src={facebook} alt='Facebook logo' className='rounded-sm' height={25} width={25}></Image></Link>
      <Link href="#"><Image src={telegram} alt='Telegram logo' className='rounded-sm' height={25} width={25}></Image></Link>
    </div>
  </div>
)}
    </nav>
  );
};

export default Header;
