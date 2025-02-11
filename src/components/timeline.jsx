"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  return (
    <main className="min-h-screen bg-[#111111] text-white p-8 py-16 md:mt-24 rounded-t-3xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16">How do I get a punk?</h1>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-800" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-8 items-start">
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