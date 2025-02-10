// import { AppleCardsCarousel, AppleCardsCarouselDemo } from "@/components/AppleCardCarousel";
import { Hero } from "@/components/hero";
import LargestSale from "@/components/largestSale";
import { Navbar } from "@/components/navbar/navbar";
import RecentTrans from "@/components/recentTrans";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <LargestSale/>
        <RecentTrans/>
      </div>
    </>
  );
}
