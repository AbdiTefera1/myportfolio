"use client"
import Link from 'next/link';
import Image from 'next/image';
import hero from '../assets/hero_pictu.jpg'
import vector from '../assets/Vector.svg'

const Hero = () => {
  return (
    <section className="bg-[#2E2F34] text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className='flex-1 space-y-6 pl-14'>
          <h1 className="text-5xl font-sans font-bold">
            Abdi Tefera<span className="text-[#CEB67D]">.</span>
          </h1>
          {/* Social Links */}
          <div className='font-light text-xs space-y-2'>
            <div className='flex space-x-3'>
              <Link href="#">LinkedIn</Link>
              <div className='border h-4 border-l-[#ceb67d]'></div>
              <Link href="#">Telegram</Link>
            </div>
            <div className='flex space-x-3'>
              <Link href="#">Facebook</Link>
              <div className='border h-4 border-l-[#ceb67d]'></div>
              <Link href="#">TikTok</Link>
            </div>
          </div>
          <Link href="#" className='block'>
            <button className='border-2 border-[#ceb67d] text-lg font-sans px-4 py-2 rounded-md text-[#ceb67d] hover:bg-[#ceb67d] hover:text-black transition duration-300'>
              Get Started Here
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className='flex-1 flex justify-center'>
          <Image src={hero} alt='hero section image' height={400} className="rounded-lg shadow-lg" />
        </div>

        {/* Right Section */}
        <div className='flex-1 space-y-4 pr-5'>
          <h3 className='text-[#ceb67d] text-lg font-sans'>Introduction</h3>
          <h1 className='text-5xl font-bold font-sans'>
            UI/UX Designer, <br /> Full Stack Web, <br /> Mobile App <br /> Developer
          </h1>
          <p className='text-base font-serif font-extralight'>
            I'm a Full Stack Developer skilled in building <br /> 
            Web and Mobile applications using Spring Boot, Node.js, <br /> 
            Next.js, React.js, and Flutter. I enjoy tackling complex <br />
            problems and developing system software.
          </p>
          <Link href="#" className='flex items-center text-sm font-serif text-[#ceb67d] hover:underline'>
            Learn more <Image src={vector} alt='down arrow' className='pl-1' height={12} width={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
