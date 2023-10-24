import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='hero'>
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            {/* left item  */}
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:textleft">
                    Bring everone together to build better products 
                </h1>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage makes it simple for software teams to plan day-to-day tasks
                     while keeping the larger team goals in view.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a href="" className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baselin hover:bg-brightRedLight">
                        Get Started
                    </a>
                </div>
            </div>
            {/* image */}
            <div className="md:w-1/2">
                <Image src='/img/illustration-intro.svg' priority  alt='Description' width={500} height={500} />
            </div>
        </div>
    </section>
  )
}

export default Hero;
