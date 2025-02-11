import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Where are the images for the punks stored?",
    answer: (
      <>
        When originally released, the actual images of the punks were too large
        to store on the blockchain, so we took a hash of the{" "}
        <span className="font-medium text-white">composite image</span> of all
        the punks and{" "}
        <span className="font-medium text-white">
          embedded it into the contract
        </span>
        . You can verify that the punks being managed by the Ethereum contract
        are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash
        on the cryptopunks image and comparing it to the hash stored in the
        contract.
        <br />
        <br />
        Since then, due to some clever compression ideas and some help from
        friends of the punks we have managed to put the entire image and
        attribute data fully on chain. You can read more about the mechanisms
        and details of the process in the{" "}
        <a
          href="#"
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          announcement blog post
        </a>
        .
      </>
    ),
  },
  {
    question: "Are the punks an ERC-721 token?",
    answer: (
      <>
        No. The CryptoPunks pre-date the ERC-721 standard and are a custom
        contract, that means it doesn't comply with any standards. They are{" "}
        <em>almost</em> an{" "}
        <a
          href="#"
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          ERC20 token
        </a>
        . We support the methods that provide your balance so you can watch
        CryptoPunks as a token in your wallet and see how many you own. None of
        the other methods are the same since you're not transferring a simple
        balance, but need to reference which specific Punk you want to work
        with.
      </>
    ),
  },
  {
    question: "Where does the market data on this site come from?",
    answer:
      "The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.",
  },
  {
    question: "Do you charge any fees for transactions?",
    answer: (
      <>
        No. We charge no fees for Cryptopunks transacted through the built-in
        market beyond the ones charged by Ethereum (gas). The contract source
        and more technical details are available{" "}
        <a
          href="#"
          className="text-white underline hover:text-gray-300 transition-colors"
        >
          on Github
        </a>
        .
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <div className="bg-[#111111] py-24 px-4">
      <div className="max-w-4xl mx-auto text-gray-300">
        <div className="flex justify-start">
          <h2 className="text-3xl font-semibold text-center text-white py-16">
            Details & FAQS
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="border-b border-[#1A1A1A]"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent  className="">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
