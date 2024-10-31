import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 container max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between'>
      <h1 className='text-2xl font-bold'>Nimra Talha</h1>
      <div className='flex space-x-6'>
        <a href='#' className='hover:text-gray-300'>
          <FaLinkedin size={24} />
        </a>
        <a href='#' className='hover:text-gray-300'>
          <FaFacebook size={24} />
        </a>
        <a href='#' className='hover:text-gray-300'>
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
