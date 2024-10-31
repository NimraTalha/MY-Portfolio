"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import cursor from '@/images/icon1.png';
import lightning from '@/images/icon2.png';
import profilepic from '@/images/logo.jpg';

const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip' style={{ background: 'linear-gradient(to bottom, #000, #281942 35%, #8F5C55 60%, #DBAF6E 80%)' }}>
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] bg-[radial-gradient(closest-side,#000_80%,#2B1942)] top-[550px] left-[50%] -translate-x-1/2"></div>
      
      <div className="relative px-4 sm:px-6 lg:px-8">
        
        <div className='text-center'>
          <h1 className="text-[#98B4CE] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Hi, I am</h1>
          <h1 className="text-[#E48A57] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">Nimra Talha</h1>
        </div>
        
        {/* Cursor icon positioning with responsive adjustments */}
        <motion.div
          className="hidden md:block absolute left-[20%] sm:left-[25%] md:left-[30%] lg:left-[230px] top-[150px] sm:top-[170px] md:top-[160px] lg:top-[170px]" 
          drag
        >
          <Image
            src={cursor}
            height={150}
            width={150}
            alt="cursor icon"
            draggable="false"
          />
        </motion.div>

        {/* Lightning icon positioning with responsive adjustments */}
        <motion.div
          className="hidden md:block absolute right-[40%] sm:right-[25%] md:right-[30%] lg:right-[30%] top-[30px] sm:top-[40px] md:top-[20px] lg:top-[20px]" 
          drag
        >
          <Image
            src={lightning}
            height={100}
            width={100}
            alt="lightning icon"
            draggable="false"
          />
        </motion.div>
      
        {/* Responsive paragraph and profile picture */}
        <p className="text-center text-lg sm:text-xl max-w-[90%] sm:max-w-[500px] mx-auto mt-6 sm:mt-8 text-white/80">
          I am a full-stack developer focused on creating websites that provide the best experience for users.
        </p>
        
        <div className="flex justify-center mt-6 sm:mt-8">
          <Image
            src={profilepic}
            height={220} 
            width={220} 
            alt="Profile picture of Nimra Talha"
            className="border rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
