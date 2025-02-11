import * as React from "react"

import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { Button } from "./ui/button";

const nftData = [
    {
        id: "#3100",
        price: "4.2KΞ ($7.58M)",
        date: "Mar 11, 2021",
        image: "/Image1.png", 
    },
    {
        id: "#7408",
        price: "4.2KΞ ($7.57M)",
        date: "Mar 11, 2021",
        image: "/Image2.png", 
    },
    {
        id: "#4156",
        price: "4.2KΞ ($10.26M)",
        date: "Dec 09, 2021",
        image: "/Image3.png", 
    },
    {
        id: "#5217",
        price: "2.25KΞ ($5.3M)",
        date: "Jul 30, 2021",
        image: "/Image4.png", 
    },
    {
        id: "#5217",
        price: "2.25KΞ ($5.3M)",
        date: "Jul 30, 2021",
        image: "/Image4.png", 
    },
    {
        id: "#5217",
        price: "2.25KΞ ($5.3M)",
        date: "Jul 30, 2021",
        image: "/Image4.png", 
    },
    {
        id: "#5217",
        price: "2.25KΞ ($5.3M)",
        date: "Jul 30, 2021",
        image: "/Image4.png", 
    },
];

export default function LargestSale() {
    return (
      <main className="bg-background p-8 pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex justify-between items-center md:mb-8">
            <h1 className="text-3xl font-bold">Largest Sales</h1>
            <Button 
              variant="outline" 
              className="rounded-full hover:bg-gray-100 mt-6 md:mt-0 px-6 py-5"
              aria-label="View all sales"
            >
              View all
            </Button>
          </div>
  
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pt-8">
              {nftData.map((nft, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 py-2">
                  <Card className="overflow-hidden border-none rounded-3xl transition-transform transform hover:scale-105">
                    <div className="relative aspect-square">
                      <Image
                        src={nft.image}
                        alt={`NFT ${nft.id}`}
                        fill
                        className="object-cover"
                        priority={index < 4}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold">{nft.id}</h2>
                        <div className="text-right">
                          <p className="font-medium">{nft.price}</p>
                          <p className="text-sm text-muted-foreground">{nft.priceUSD}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{nft.date}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-start gap-4 mt-8 md:mt-10">
              <CarouselPrevious 
                variant="outline" 
                className="relative static rounded-full"
              />
              <CarouselNext 
                variant="outline" 
                className="relative static rounded-full"
              />
            </div>
          </Carousel>
        </div>
      </main>
    );
  }