"use client";
import Link from "next/link";
import Image from "next/image";
import hero from "../assets/hero_pictu.jpg";
import vector from "../assets/Vector.svg";

const Hero = () => {
  return (
    <section id="home" className="bg-[#2E2F34] text-white py-10 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex-1 space-y-6 lg:pl-14 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-sans font-bold leading-tight">
            Abdi Tefera<span className="text-[#CEB67D]">.</span>
          </h1>
          <p className="text-lg lg:text-xl font-light">
            We transform your ideas into unique web projects that inspire both
            you and your customers. Let’s build something great together!
          </p>
          <Link href="#" passHref>
            <button className="border-2 border-[#ceb67d] text-lg font-sans px-6 py-3 rounded-md text-[#ceb67d] hover:bg-[#ceb67d] hover:text-black transition duration-300 ease-in-out">
              Get Started Here
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
          <Image
            src={hero}
            alt="hero section image"
            height={400}
            width={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-6 lg:pr-5 text-center lg:text-right mt-10 lg:mt-0">
          <h3 className="text-[#ceb67d] text-lg lg:text-xl font-sans">
            Introduction
          </h3>
          <h1 className="text-3xl lg:text-5xl font-bold font-sans leading-snug">
            UI/UX Designer, <br /> Full Stack Web, <br /> Mobile App <br />
            Developer
          </h1>
          <p className="text-base lg:text-lg font-light leading-relaxed">
            I'm a Full Stack Developer skilled in building Web and Mobile
            applications using Spring Boot, Node.js, Next.js, React.js, and
            Flutter. I enjoy tackling complex problems and developing system
            software.
          </p>
          <Link href="#" passHref>
            <div className="flex justify-center lg:justify-end items-center text-sm lg:text-base font-serif text-[#ceb67d] hover:underline cursor-pointer">
              Learn more{" "}
              <Image
                src={vector}
                alt="down arrow"
                className="pl-1"
                height={16}
                width={16}
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
