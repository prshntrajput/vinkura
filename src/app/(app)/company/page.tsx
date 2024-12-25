import { Book, Cat, Earth, Heart, Hourglass, MoveRight, PhoneCall, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Footer from '@/components/footer';
import { Loader } from '@/components/Loader';
import { AppleCardsCarouselDemo } from '@/components/applecard';
import { AnimatedTestimonialsDemo } from '@/components/foundercard';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { IconJoinBevel } from '@tabler/icons-react';

const IndexPage = () => {
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
                About Us
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              We're all about using AI to benefit everyone. We believe AI should be safe and put people first, not just profits. Our goal is to make AI that helps solve big problems and is available to everyone.
              </p>
            </div>
            <div className="mt-10 relative max-w-5xl mx-auto">
            <img
              src="./1.jpeg"
              className="rounded-xl"
              alt="Image Description"
            />
            </div>
          </div>
        </div>
      </div>
     
      {/* Feature Section 1 */}
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>Company</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Our Structure
                </h2>
                <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                At Vinkura AI, our organizational structure is designed to foster collaboration, innovation, and agility. Every team and individual contributes to our shared mission of making AI accessible, ethical, and impactful
                </p>
              </div>
            </div>
            <div className="w-full max-w-full px-6">
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4"> {/* Center items horizontally */}
  <div>
    <Badge />
  </div>
  <h2 className="text-3xl md:text-5xl tracking-wide max-w-xl font-regular text-center">
    Team @Vinkura
  </h2>
</div>    
<AnimatedTestimonialsDemo />

      {/* Feature Section 2 */}



<AppleCardsCarouselDemo />
<div className="flex justify-center mt-.2"> {/* mt-4 to add a controlled top margin */}
  <a
    className="inline-flex items-center gap-x-1 border text-sm p-1 ps-3 rounded-full transition"
    href="/research"
  >
    Research Index
    <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
      <svg
        className="flex-shrink-0 w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </span>
  </a>
</div>

          <br/>
      {/* Call to Action Section */}
      <div className="w-full py-20 lg:py-40 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col text-center py-14 gap-4 items-center">
            <div>
              <Badge>@Vinkura.in</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Building accessible, ethical, and transformative AI solutions for everyone
              </h3>
            </div>
            <div className="flex flex-row gap-4">
              <Button className="gap-4" variant="outline">
                Join Us <Hourglass className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default IndexPage;
