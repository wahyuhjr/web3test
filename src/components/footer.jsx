"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">Ethernal Project</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-400">
              About
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Collection
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              FAQs
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <Image
                src="/twt.svg"
                alt="twitter"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
            <a href="#" className="hover:opacity-75">
              <Image
                src="/discord.svg"
                alt="discord"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
        <div className="border border-gray-600 mt-10"></div>
        <div className="flex flex-col md:flex-row justify-center items-center text-gray-500 pt-8 space-y-4 md:space-y-0 md:space-x-4">
          <a href="#" className="text-sm hover:text-gray-400">
            © 2021 Ethereal. All right reserved
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Term of Service
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Cookies Setting
          </a>
        </div>
      </div>
    </footer>
  );
};