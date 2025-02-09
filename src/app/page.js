import { AppleCardsCarousel, AppleCardsCarouselDemo } from "@/components/AppleCardCarousel";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <AppleCardsCarousel />
      </div>
    </>
  );
}
