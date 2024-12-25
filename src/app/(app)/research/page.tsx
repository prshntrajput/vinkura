"use client"; 
import Footer from '@/components/footer';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, ListChecks, MessageCircleMore } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Careers4 from '@/components/research';
import { AppleCardsCarouselDemo } from '@/components/applecard';
import { Loader } from '@/components/Loader';
const About1 = () => {
  return (
    <>
     <Loader />
          
          {/* Hero Section */}
          <div className="w-full">
            <div className="container mx-auto">
              <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                <div>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  AI for a Better, Inclusive Future
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  At Vinkura , our research fuels innovations aimed at creating a positive impact on society. We are committed to advancing artificial intelligence in ways that not only solve complex problems but also prioritize ethical practices, transparency, and inclusivity. From enhancing everyday productivity to addressing global challenges, our AI research strives to deliver solutions that are accessible, equitable, and safe.</p>
                </div>
                <div className="mt-10 relative max-w-5xl mx-auto">
                <img
                  src="./res.webp"
                  className="rounded-xl"
                  alt="Image Description"
                />
                </div>
              </div>
            </div>
          </div>
      <Careers4 />
 <AppleCardsCarouselDemo />
 <Footer />



</>
  );
};

export default About1;