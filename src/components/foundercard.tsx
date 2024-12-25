import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Akshat Shukla",
      designation: "Founder (Bob The Builder), Vinkura",
      src: "/Founder.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Prashant Rajput",
      designation: "CTO (Tech Guy) , Vinkura",
      src: "/CTO.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Priyanshu Rajput",
      designation: "Creative Head (Artist) , Vinkura",
      src: "/CMO.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
