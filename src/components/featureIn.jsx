"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

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

export const FeatureIn = () => {
  <div className="container mx-auto px-4 py-24 text-center">
    <h1 className="text-4xl font-semibold">Features In</h1>
    <div className="flex justify-center mt-8">
      <HoverEffect items={features} key={Link.link} className="text-start" />
    </div>
  </div>;
};
