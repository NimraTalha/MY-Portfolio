"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import domino from "@/images/domino.png";
import figma from "@/images/figma.png";
import resume from "@/images/resume.png";
import portfolio from "@/images/portfolio.png";

const project = [
    {
        title: "Domino",
        desc: "This is a Domino website clone.",
        devstack: "Next.js, Tailwind, Framer Motion, and React",
        link: "https://dominopizza-nrl9.vercel.app/",
        src: domino,
    },
    {
        title: "E-commerce Website",
        desc: "This is a furniture website using a UI Figma template",
        devstack: "Design UI Figma, Next.js, Tailwind, Framer Motion, and React",
        link: "https://e-commerce-furniture-website-l67o.vercel.app/",
        src: figma,
    },
    {
        title: "Portfolio Website",
        desc: "This is a portfolio website",
        devstack: "HTML, Custom CSS",
        link: "https://my-webpage-five-sable.vercel.app/",
        src: portfolio,
    },
    {
        title: "Shareable Resume Builder",
        desc: "HTML, Custom CSS, Animation",
        devstack: "HTML, Custom CSS",
        link: "https://resume-pdf-chi.vercel.app/",
        src: resume,
    }
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-10 px-4 md:px-10 mt-52 lg:px-20" id="portfolio">
            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'> 
           Selected <span className='text-orange-400'>Projects</span></h1>
            
            
            <div className="max-w-[1000px] mx-auto  mt-40 space-y-16 md:space-y-24">
                {project.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={` mt-12 flex flex-col items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12`}
                    >
                        <div className='space-y-4   md:space-y-2 max-w-full md:max-w-[550px] text-center  md:text-left'>
                            <h2 className="text-7xl my-4 md:text-xl text-white/70 font-bold">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl  md:text-2xl font-semibold ">{project.title}</h2>
                            <p className="text-sm  md:text-base text-white/70 break-words  p-4 ">{project.desc}</p>
                            <p className="text-xs md:text-sm text-orange-400 font-semibold">{project.devstack}</p>
                            <div className='w-full h-[1px] bg-gray-400 my-4'></div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:underline'>
                                View Project
                            </a>
                        </div>
                        <div className='w-full max-w-[400px] md:max-w-[500px] flex justify-center items-center'>
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                className='h-auto w-full object-cover  border
                                               md:rounded border-gray-700' 
                                width={400} 
                                height={350} 
                                layout="responsive"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
