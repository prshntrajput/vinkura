import { Badge } from "lucide-react";

export const Feature4 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h3 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            At Vinkura AI, we believe in building a future where AI is not just powerful but also inclusive, accessible, and transformative for every individual and industry
            </h3>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
            — Akshat Shukla, Founder of Vinkura AI </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <img src="founders.png"></img>
        </div>
      </div>
    </div>
  </div>
);
