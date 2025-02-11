"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: 1,
    title: "Download and install MetaMask",
    description: "Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.",
    icon: "/metamask.svg",
    action: {
      text: "Download MetaMask",
      url: "#"
    }
  },
  {
    number: 2,
    title: "Buy some Ethereum",
    description: "If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.",
    icon: "/eth.png"
  },
  {
    number: 3,
    title: "Start bidding, buying and selling",
    description: "Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.",
    icon: "/opensea.png"
  }
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate title
    gsap.from("h1", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate timeline line
    gsap.from(".bg-gray-800", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power3.inOut"
    });

    // Animate each step
    stepsRef.current.forEach((step, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate circle
      timeline.from(step.querySelector(".rounded-full"), {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, 0);

      // Animate content
      timeline.from(step.querySelector(".flex-1"), {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, 0.2);

      // Animate button if exists
      const button = step.querySelector("button");
      if (button) {
        timeline.from(button, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        }, 0.4);
      }
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] text-white p-8 py-16 md:mt-24 rounded-t-3xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16">How do I get a punk?</h1>
        
        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-800" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex gap-8 items-start"
                ref={el => stepsRef.current[index] = el}
              >
                {/* Circle with number */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#111111] border border-gray-800 flex items-center justify-center text-sm">
                  {step.number}
                </div>
                
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <Image src={step.icon} width={24} height={24} alt="icons"/>
                    <h2 className="text-xl font-semibold">{step.title}</h2>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {step.action && (
                    <Button
                      className="rounded-xl bg-blue-600 border-blue-700 hover:bg-gray-800 transition-colors"
                    >
                      {step.action.text}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}