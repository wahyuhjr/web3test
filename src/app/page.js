// import { AppleCardsCarousel, AppleCardsCarouselDemo } from "@/components/AppleCardCarousel";
import CardCarouselNFT from "@/components/cardCarousel";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <CardCarouselNFT/>
      </div>
    </>
  );
}
