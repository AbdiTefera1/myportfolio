import Image from 'next/image';
import Link from 'next/link';
import phone from '../assets/phone.png';
import mail from '../assets/email.png';
import linkedIn from '../assets/linkedIn.png';
import tiktok from '../assets/tiktok.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import x from '../assets/twitter.jpg';
import q from '../assets/q.svg';

const Contact = () => {
  return (
    <section id="contact" className='bg-[#34353A] text-white flex flex-col items-center space-y-3 py-4 relative lg:h-lvh md:pt-4 px-4'>
      {/* Title */}
      <h3 className="text-[#f0dba6] text-lg md:text-xl font-sans text-center tracking-wide mb-4">
        Contact Us
      </h3>

      {/* Contact Form */}
      <div className='bg-[#3C3D44] flex flex-col space-y-3 w-full max-w-3xl md:p-6 lg:pr-40 rounded-md'>
        <h3 className='text-center text-2xl font-bold'>Send Us A Message</h3>
        <form className='flex flex-col space-y-4 lg:max-w-md'>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder='Full Name'
            className='rounded-md outline-none p-3 focus:border-2 border-[#CEB67D] text-black'
            required
            aria-label="Full Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email address'
            className='rounded-md outline-none p-3 focus:border-2 border-[#CEB67D] text-black'
            required
            aria-label="Email address"
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={8}
            placeholder='Tell us about your business and project requirements'
            className='rounded-md outline-none p-3 focus:border-2 border-[#CEB67D] text-black'
            aria-label="Message"
            required
          />
          <button
            className='bg-[#2E2F34] text-[#CEB67D] border-2 border-[#CEB67D] font-bold p-3 w-full md:w-1/2 mx-auto rounded-md hover:bg-[#373944] transition duration-200 whitespace-nowrap'
            type="submit"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Get In Touch Section */}
      <div className='bg-[#464853] border-2 border-[#CEB67D] p-4 flex flex-col items-center justify-center rounded-md hover:shadow-lg hover:shadow-[#ceb67d] relative lg:absolute lg:top-52 md:right-12 lg:right-28'>
        <h3 className='text-center text-lg font-bold mb-2'>Get In Touch</h3>
        <Image src={q} alt='underline svg' className='mb-4 w-1/2' />
        
        <ul className='px-4 space-y-4 w-full'>
          {/* Contact Methods */}
          <li>
            <Link href="#" className='flex items-center gap-3 mb-2'>
              <Image src={phone} alt='phone icon' />
              +251 94 005 0709
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/3'></div>
          </li>
          <li>
            <Link href="#" className='flex items-center gap-3 mb-3'>
              <Image src={mail} alt='email icon' />
              abditefera11@gmail.com
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/3'></div>
          </li>
          
          {/* Social Media Links */}
          <li>
            <Link href="https://www.linkedin.com/in/abditefera/" className='flex items-center gap-3 mb-3'>
              <Image src={linkedIn} alt='LinkedIn icon' />
              LinkedIn
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5 ml-16'></div>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@design2develop" className='flex items-center gap-3 mb-3'>
              <Image src={tiktok} alt='Tiktok icon' />
              Tiktok
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5 ml-16'></div>
          </li>
          <li>
            <Link href="https://t.me/design2code1" className='flex items-center gap-3 mb-3'>
              <Image src={telegram} alt='Telegram icon' />
              Telegram
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5'></div>
          </li>
          <li>
            <Link href="https://www.instagram.com/abdi_tefera/" className='flex items-center gap-3 mb-3'>
              <Image src={instagram} alt='Instagram icon' />
              Instagram
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5'></div>
          </li>
          <li>
            <Link href="https://x.com/abditefera1" className='flex items-center gap-3 mb-3'>
              <Image src={x} alt='Twitter icon' />
              Twitter
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5 ml-16'></div>
          </li>
          <li>
            <Link href="#" className='flex items-center gap-3 mb-3'>
              <Image src={facebook} alt='Facebook icon' />
              Facebook
            </Link>
            <div className='border-b-2 border-[#CEB67D] w-1/5 ml-16'></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
