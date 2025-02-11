"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MeetPunks from "./meetPunk";
import { FeatureIn } from "./featureIn";
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
      {/* <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold">Ethereal</h1>
        <h1 className="text-xl mt-4">
          Ethereal is a{" "}
          <span className="font-bold">next-gen Web3 platform </span>designed to
          bridge the worlds of digital art, ownership (via NFTs), and
          decentralized financial tools (DeFi)
        </h1>
        <p className="text-lg mt-4">A collection of 10,000 unique NFTs</p>
        <h3 className="text-2xl mt-8 font-bold">0.01 ETH</h3>
        <p className="text-lg mt-4">Current floor price</p>
        <button className="bg-blue-600 text-white px-8 py-2 mt-8 rounded-xl font-bold">
          Mint now
        </button>
      </div> */}
      <HeroParallaxDemo />

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

      {/* feature in */}
      {/* feature in */}

      <MeetPunks />
      <FeatureIn />
    </div>
  );
};
