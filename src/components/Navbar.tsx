"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

interface NavLink {
    title: string;
    path: string;
}

const navLinks: NavLink[] = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
];

const Navbar: React.FC = () => {
    const [nav, setNav] = useState<boolean>(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="text-white/70 pt-6">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px] bg-black">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>
                                <p className="text-sm lg:text-base">{link.title}</p>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold text-white/70 cursor-pointer">Contact Me</h1>
                            <div className="relative group">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                                <div className="mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div onClick={toggleNav} className="md:hidden fixed top-5 right-5 border rounded text-white/70 border-white/70 p-2 z-50">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed top-0 left-0 w-full h-screen z-40 bg-black/90 md:hidden"
            >
                <ul className="flex flex-col justify-center items-center h-full text-white text-3xl font-semibold space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index} className="my-4">
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" onClick={closeNav} className="text-orange-400 hover:underline">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
