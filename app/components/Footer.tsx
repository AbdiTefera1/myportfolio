import Image from 'next/image';
import Link from 'next/link';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import linkedInIcon from '../assets/linkedIn.png';
import tiktokIcon from '../assets/tiktok.png';
import telegramIcon from '../assets/telegram.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import github from '../assets/github.png';
import x from '../assets/twitter.jpg';

const Footer = () => {
  return (
    <footer className='bg-[#2E2F34] text-white py-8'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-between gap-y-8'>
          {/* Left Column: Logo and Description */}
          <div className='w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left'>
            {/* <Image src={logo} alt="Company Logo" className='w-20 h-20 mb-3' /> */}
            <div className="flex items-center space-x-2 mb-3">
          <span className="text-4xl font-extrabold text-white">
            <span className="text-4xl text-[#ceb67d]">&lt;</span> A{" "}
            <span className="text-4xl text-[#ceb67d]">/</span> T{" "}
            <span className="text-4xl text-[#ceb67d]">&gt;</span>
          </span>
        </div>
            <p className='text-sm text-[#CEB67D]'>
              We transform your ideas into unique web projects that inspire both you and your customers. Let’s build something great together!
            </p>
          </div>

          {/* Middle Column: Contact Information */}
          <div className='w-full md:w-1/3 text-center'>
            <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
            <ul className='space-y-3'>
              <li className='flex justify-center md:justify-start items-center gap-2'>
                <Image src={phoneIcon} alt="Phone Icon" width={20} height={20} />
                <span>+251 94 005 0709</span>
              </li>
              <li className='flex justify-center md:justify-start items-center gap-2'>
                <Image src={emailIcon} alt="Email Icon" width={20} height={20} />
                <span>abditefera11@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Media Links */}
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
            <div className='flex justify-center md:justify-end gap-4'>
              <Link href="https://www.linkedin.com/in/abditefera/">
                <Image src={linkedInIcon} alt="LinkedIn" width={30} height={30} />
              </Link>
              <Link href="https://github.com/AbdiTefera1">
                <Image src={github} alt="LinkedIn" width={30} height={30} />
              </Link>
              <Link href="https://www.tiktok.com/@design2develop">
                <Image src={tiktokIcon} alt="Tiktok" width={30} height={30} />
              </Link>
              <Link href="https://t.me/design2code1">
                <Image src={telegramIcon} alt="Telegram" width={30} height={30} />
              </Link>
              <Link href="https://www.instagram.com/abdi_tefera/">
                <Image src={instagramIcon} alt="Instagram" width={30} height={30} />
              </Link>
              <Link href="https://x.com/abditefera1">
                <Image src={x} alt="Twitter" width={30} height={30} />
              </Link>
              <Link href="#">
                <Image src={facebookIcon} alt="Facebook" width={30} height={30} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className='mt-8 border-t border-[#CEB67D] pt-4 text-center text-sm'>
          <p>&copy; 2024 Abdi Tefera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
