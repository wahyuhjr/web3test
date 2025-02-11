"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetPunks() {

  return (
    <div className="min-h-screen bg-[#111111] py-24 text-white p-8 rounded-b-full">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-24">
          <h1 className="text-5xl font-bold flex-1">Meet the Punks</h1>
          <div className="flex-1">
            <p className="text-gray-400 mb-8 text-lg">
              The CryptoPunks are 24x24 pixel art images, generated
              algorithmically. Most are punky-looking guys and girls, but there
              are a few rarer types mixed in: Apes, Zombies and even the odd
              Alien.
            </p>
            <div className="flex gap-4">
              <motion.button
                className="bg-white text-black px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy a Punk
              </motion.button>
              <motion.button
                className="border border-gray-500 px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Collection
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Info Cards - Left Side */}
          <div className="flex-1 space-y-4">
            {[
              {
                bg: "bg-[#638596]",
                text: "Punks with a blue background are not for sale",
              },
              {
                bg: "bg-[#111111] border border-gray-500",
                text: "Red background punks are for sale",
              },
              {
                bg: "bg-[#111111] border border-gray-500",
                text: "Purple background have active bids",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${item.bg} p-6 rounded-2xl`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Carousel - Right Side */}
          <div className="md:px-10 md:p-2 rounded-xl flex md:items-center">
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
    </div>
  );
}
