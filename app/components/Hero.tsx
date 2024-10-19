"use client"
import Link from 'next/link';
import Image from 'next/image';
import hero from '../assets/hero_pictu.jpg'
import vector from '../assets/Vector.svg'
const Hero = () => {
    return (
      <section className="bg-[#2E2F34] text-white">
        <div className="container px-4 flex justify-center items-center space-x-40">
          {/* p1 */}
          <div className='space-y-4 pl-14'>
            <h1 className="text-4xl font-sans font-bold">Abdi Tefera<span className="text-[#CEB67D]">.</span></h1>
            {/* Link */}
            <div className='font-light text-xs'>
            {/*  */}
              <div className='flex space-x-2'>
                <Link href="#">LinkedIn</Link>
                <div className='border h-3 border-l-[#ceb67d]'></div>
                <Link href="#">Telegram</Link>
              </div>
              {/*  */}
              <div className='flex space-x-2'>
                <Link href="#">Facebook</Link>
                <div className='border h-3 border-l-[#ceb67d]'></div>
                <Link href="#">Tiktok</Link>
              </div>
            </div>
            <button className='border-2 border-[#ceb67d] text-lg font-sans px-2 py-1 rounded-md text-[#ceb67d]'>Get Start Here</button>
          </div>
          {/* p2 */}
          <div>
            <Image src={hero} alt='hero section image' height={400}></Image>
          </div>
          {/* p3 */}
          <div className='space-y-3 pr-5'>
            <h3 className='text-[#ceb67d] text-lg font-sans'>Introduction</h3>
            <h1 className='text-4xl font-bold font-sans'>UI/UX Designer, <br />Full Stack Web, <br /> Mobile App <br/> Developer </h1>
            <p className='text-base font-serif font-extralight'>
              I'm a Full Stack Developer skilled in building <br/> 
              Web and Mobile applications, using Spring Boot, Nodejs, <br /> 
              Nextjs,  Reactjs, and Flutter.  I enjoy tackling complex <br />
              problems and develop system software.
            </p>
            <Link href="#" className='flex text-sm font-serif text-[#ceb67d]'>Learn more <Image src={vector} alt='down arrow' className='pl-1' height={12} width={12}></Image> </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;