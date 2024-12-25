"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link"; // Import Link from Next.js

export function AppleCardsCarouselDemo() {
  // Map through the data array and create card components
  const cards = data.map((card, index) => (
    <CardWithLink key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-lg md:text-5xl font-sans text-neutral-600 dark:text-neutral-200">
        Blogs & Research
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Component to wrap the Card inside a Link for routing
const CardWithLink = ({ card, index }: { card: any; index: number }) => {
  return (
    <Link href={`/blogs`} passHref>
      <Card card={card} index={index} layout={true} />
    </Link>
  );
};

const data = [
  {
    category: "Products",
    title: "Introducing Maitreyi",
    src: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    category: "Research",
    title: "A Comprehensive Analysis of Large Language Models in Conversational AI",
    src: "https://images.unsplash.com/photo-1728654184536-a1f78f520254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Blog",
    title: "How Base Models Influence the Instruct Monomyth: An In-Depth Look",
    src: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Blog",
    title: "Privacy & Freedom at the Frontier: Kuno-K1",
    src: "https://images.unsplash.com/photo-1728654184423-6ab466176f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Research",
    title: "Advancements in Programming Language Models: A Look at XVCLM",
    src: "https://images.unsplash.com/photo-1728654184427-16903291a394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
  },
];