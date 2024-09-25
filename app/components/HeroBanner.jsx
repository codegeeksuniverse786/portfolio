/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';

function HeroBanner() {
  return (
    <section
      className="container grid items-center grid-cols-1 px-4 mx-auto my-4 text-white md:my-16 
    md:px-[3rem] lg:px-[12rem] justify-items-center 
    md:grid-cols-2 md:gap-12"
    >
      <div className="flex flex-col gap-6 md:gap-8 md:justify-self-start">
        {/* Left side */}
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          <span className="text-[#A594FD]">Hello, I'm Luqas,</span>
          <br />
          Frontend Developer
        </h1>
        <p className="text-sm text-gray-400 md:text-lg">
          Passionate about crafting responsive and dynamic user
          interfaces. I turn complex problems into elegant digital
          solutions.
        </p>
        <Link href="/" className="w-48 btn-grad">
          Download CV
        </Link>
      </div>

      {/* Right Side Image */}
      <div
        className="relative hidden md:block  justify-self-start mt-8 md:mt-0 before:content-[''] 
      before:bg-[#5a80d2] before:w-[70%] before:h-[70%] before:absolute 
      before:top-[10rem] before:left-[15rem] before:rounded-full"
      >
        {/* Wrapper div for the border */}
        <div className="relative p-2 border-2 rounded-full border-cyan-500">
          <div className="overflow-hidden rounded-full shadow-lg">
            <Image
              src="/img.jpg" // Correct path
              width={380}
              height={380}
              alt="Description of image"
              className="transition-transform duration-500 rounded-full hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
