import Link from 'next/link';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer id='footer' className='bg-[#2E2F34] text-white py-8'>
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap justify-between gap-y-8'>
          {/* Left Column: Logo and Description */}
          <div className='w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left'>
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
                <MdPhone size={20} className="text-white hover:opacity-80"/>
                <span>+251 94 005 0709</span>
              </li>
              <li className='flex justify-center md:justify-start items-center gap-2'>
                <MdEmail size={20} className="text-white hover:opacity-80"/>
                <span>abditefera11@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Media Links */}
          <div className='w-full md:w-1/3 text-center md:text-right'>
            <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
            <div className='flex justify-center md:justify-end gap-4'>
              <Link href="https://www.linkedin.com/in/abditefera/">
                <FaLinkedin size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="https://github.com/AbdiTefera1">
                <FaGithub size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="https://www.tiktok.com/@design2develop">
                <FaTiktok size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="https://t.me/design2code1">
                <FaTelegram size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="https://www.instagram.com/abdi_tefera/">
                <FaInstagram size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="https://x.com/abditefera1">
                <FaTwitter size={30} className="text-white hover:opacity-80"/>
              </Link>
              <Link href="#">
                <FaFacebook size={30} className="text-white hover:opacity-80"/>
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
