"use client"
import Image from "next/image"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-black p-6">
            <div className="container mx-auto px-4 text-white">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-white text-lg font-bold">Ethereal</div>

                    {/* Centered Menu for Desktop (About, Collection, FAQs) */}
                    <ul className="hidden md:flex justify-center flex-grow text-center space-x-4 text-sm">
                        <li><a href="" className="">About</a></li>
                        <li><a href="" className="">Collection</a></li>
                        <li><a href="" className="">FAQs</a></li>
                    </ul>

                    {/* Centered Icons and Connect Wallet Button */}
                    <div className="flex items-center space-x-4">
                        <ul className="flex text-center space-x-4 text-sm">
                            <li>
                                <a href="" className="">
                                    <Image
                                        src="/twt.svg"
                                        alt="twitter"
                                        width={6}
                                        height={6}
                                        className="h-6 w-6"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="" className="">
                                    <Image
                                        src="/discord.svg"
                                        alt="discord"
                                        width={6}
                                        height={6}
                                        className="h-6 w-6"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="" className="rounded-full bg-[#638596] p-3">
                                    Connect Wallet
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hamburger Menu Icon for Mobile (Right Side) */}
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none md:hidden"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (Centered About, Collection, FAQs) */}
                <div
                    className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}
                >
                    <ul className="flex flex-col space-y-4 text-sm">
                        <li>
                            <a href="" className="">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="" className="">
                                Collection
                            </a>
                        </li>
                        <li>
                            <a href="" className="">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}