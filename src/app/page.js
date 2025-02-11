import { FaqSection } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import LargestSale from "@/components/largestSale";
import { Navbar } from "@/components/navbar/navbar";
import RecentTrans from "@/components/recentTrans";
import Timeline from "@/components/timeline";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Hero />
      <LargestSale />
      <RecentTrans />
      <Timeline />
      <FaqSection />
      <Footer />
    </main>
  );
}
