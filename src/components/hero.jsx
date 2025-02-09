"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

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

const features = [
  {
    title: "Mashable",
    description:
      "This ethereum-based project could change how we think about digital art",
    link: "https://stripe.com",
    read: "Read article",
  },
  {
    title: "Mashable",
    description:
      "CryptoKitties, CryptoPunks and the birth of a cottage industry",
    link: "https://stripe.com",
    read: "Read article",
  },
  {
    title: "Mashable",
    description:
      "‘Obviously, we had no idea it was going to get here,’ say the guys who made the first NFT",
    link: "https://stripe.com",
    read: "Read article",
  },
];

export const Hero = () => {
  return (
    <div className="bg-black text-white min-h-screen rounded-b-3xl">
      <div className="container mx-auto px-4 py-24 text-center">
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
        <button className="bg-[#638596] text-white px-8 py-2 mt-8 rounded-full font-bold">
          Mint now
        </button>
      </div>

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
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-semibold">Features In</h1>
        <div className="flex justify-center mt-8">
          <HoverEffect
            items={features}
            key={Link.link}
            className="text-start"
          />
        </div>
      </div>
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center md:items-start">
        {/* Left side - Title */}
        <h2 className="text-3xl md:text-5xl font-bold flex-1">
          Meet the Punks
        </h2>

        {/* Right side - Text and Buttons */}
        <div className="flex-1 max-w-xl mt-6 md:mt-0">
          <p className="text-gray-400 leading-relaxed">
            The CryptoPunks are 24x24 pixel art images, generated
            algorithmically. Most are punky-looking guys and girls, but there
            are a few rarer types mixed in: Apes, Zombies and even the odd
            Alien. Every punk has their own profile page that shows their
            attributes as well as their ownership/for-sale status.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
              Buy a Punk
            </button>
            <button className="bg-black border border-gray-500 text-white px-6 py-2 rounded-full font-medium">
              View full collection
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row md:items-center gap-8">
        {/* Left Side - Descriptions */}
        <div className="flex-1 space-y-4 max-w-xl md:text-2xl">
          <div className="bg-[#638596] text-white p-6 rounded-xl">
            Punks with a blue background are not for sale and have no current bids.
          </div>
          <div className="bg-black border border-gray-500 text-white p-6 rounded-xl">
            Punks with a red background are available for sale by their owner.
          </div>
          <div className="bg-black border border-gray-500 text-white p-6 rounded-xl">
            Punks with a purple background have an active bid on them.
          </div>
        </div>

        {/* Right Side - CryptoPunk Image */}
        <div className="md:px-10 md:p-4 rounded-xl flex md:items-center">
          <Image
            src="/Frame.png"
            alt="CryptoPunk"
            width={370}
            height={370}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
