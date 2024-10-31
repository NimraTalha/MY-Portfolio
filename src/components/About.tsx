"use client";
import React from 'react';
import Image from "next/image";

import book from "@/images/book.png";
import pc from "@/images/pc.png";
import card from "@/images/card.png";
import finance from "@/images/finance.png";

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8' id="about">
      <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-semibold p-4 mb-8 text-center'>About 
        <span className='text-orange-400'> Me</span>
      </h1>
        
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 place-items-center'>
        
        <div className='w-full col-span-1 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse'></div>
          <div className='flex flex-col sm:flex-row p-6 items-center'>
            <Image src={book} alt="book" className='w-auto h-[80px] sm:h-[100px] lg:h-[130px]' />
            <div className='flex flex-col mt-4 sm:mt-0 sm:ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-sm sm:text-base lg:text-lg text-white/70 mt-2 text-center sm:text-left'>I am studying Generative AI Engineering. I am focusing on technologies like Next.js, React, Tailwind CSS, HTML, and TypeScript.</p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-1 lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse'></div>
          <div className='flex flex-col sm:flex-row p-6 items-center'>
            <Image src={finance} alt="finance" className='w-auto h-[80px] sm:h-[100px] lg:h-[130px]' />
            <div className='flex flex-col mt-4 sm:mt-0 sm:ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Problem Solving</h2>
              <p className='text-sm sm:text-base lg:text-lg text-white/70 mt-2 text-center sm:text-left'>I approach challenges with a logical and systematic mindset.</p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-1 lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse'></div>
          <div className='flex flex-col sm:flex-row p-6 items-center'>
            <Image src={card} alt="card" className='w-auto h-[80px] sm:h-[100px] lg:h-[130px]' />
            <div className='flex flex-col mt-4 sm:mt-0 sm:ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-sm sm:text-base lg:text-lg text-white/70 mt-2 text-center sm:text-left'>I have a few projects to showcase my work.</p>
            </div>
          </div>
        </div>

        <div className='w-full col-span-1 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse'></div>
          <div className='flex flex-col sm:flex-row p-6 items-center'>
            <Image src={pc} alt="pc" className='w-auto h-[80px] sm:h-[100px] lg:h-[130px]' />
            <div className='flex flex-col mt-4 sm:mt-0 sm:ml-4'>
              <h2 className='text-xl sm:text-2xl font-bold text-white/80'>Technical Skills</h2>
              <p className='text-sm sm:text-base lg:text-lg text-white/70 mt-2 text-center sm:text-left'>I am a front-end web developer specializing in Next.js, React.js, and Tailwind CSS. My expertise extends to creating responsive, user-friendly interfaces.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
