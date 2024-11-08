"use client";
import React from 'react';
import Image from "next/image";
import phone from "@/images/phone.png";
import mail from "@/images/mail.png";

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center text-white p-8 space-y-8 lg:space-y-0 lg:space-x-8' id="contact">
      
      <div className='flex justify-center items-start lg:w-1/2'>
        <ul className='space-y-6'>
          <li className='flex items-center'>
            <Image src={phone} alt="phone" className='h-[80px] w-auto mr-4' />
            <p className='text-xl'>+923349766531</p>
          </li>
          <li className='flex items-center'>
            <Image src={mail} alt="E-mail" className='h-[80px] w-auto mr-4' />
            <p className='text-xl'>nimratalha@gmail.com</p>
          </li>
        </ul>
      </div>
      
      <div className='bg-white/10 p-8 rounded-xl lg:w-1/2'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'> Contact <span className =" text-white font-bold text-5xl">Me</span></h2>
        <p className='text-white/70 mb-6'>Send me a message and let &apos schedule a call.</p>
        <form className='space-y-4' action={"https://getform.io/f/anlllkva"} method='Post'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input type='text'name='name' className='bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' />
            <input type='text'name='name'className='bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' />
            <input type='text'name='email' className='bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' />
            <input type='phone'name='phone'  className='bg-black/70 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' />
          </div>
          <textarea className='bg-black/70   rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-400' 
          placeholder='Your Message'  />
          <button className='bg-orange-700 hover:bg-orange-500 text-white rounded-xl px-6 py-2 w-full 
          md:w-auto font-semibold text-xl'>Send Message</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
