"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MeetPunks from "./meetPunk";
import { HeroParallaxDemo } from "./heroParallax";

const avatars = [
  "/Image1.png",
  "/Image2.png",
  "/Image3.png",
  "/Image4.png",
  "/Image5.png",
  "/Image6.png",
  "/Image7.png",
  "/Image8.png",
];

export const Hero = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen rounded-b-3xl">
      {/* hero parallax */}
      <div className="overflow-hidden">
        <HeroParallaxDemo />
      </div>
      {/* hero parallax */}
      <div className="relative overflow-hidden py-8">
        <motion.div
          className="flex flex-nowrap space-x-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          {/* Example Avatars */}
          {[...avatars, ...avatars].map((avatars, index) => (
            <div key={index} className="container">
              <Image
                className="max-w-none rounded-lg w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                src={avatars}
                alt="Avatar"
                width={100}
                height={100}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <MeetPunks />
      </div>
    </div>
  );
};
