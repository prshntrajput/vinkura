'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'; // Import Lucide Icons

const Footer = () => {
  const { theme, setTheme } = useTheme(); // Get theme from next-themes
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "Fostering AI for a Better Tomorrow",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Research",
          href: "/research",
        },
        {
          title: "Blog",
          href: "/blogs",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/company",
        },
        
        {
          title: "Contact us",
          href: "/company",
        },
      ],
    },
  ];

  return (
    
    <div className={`w-full py-20 lg:py-40 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-black'}`}>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                Vinkura™
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-left">
                Fostering AI for a Better Tomorrow
              </p>
            </div>
            {/* Social Media Icons */}

            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left">
                <p>9CC6+37W+A</p>
                <p>Gauri Shankar Mandir</p>
                <p>Bareilly Uttar Pradesh IN 243003</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-left">
                <Link href="/docs">Terms of service</Link>
                <Link href="/docs">Privacy Policy</Link>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-neutral-500 dark:text-neutral-400">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Final Footer Section with Gradient Effect at the Bottom */}
      <p
        className={`w-full text-center text-5xl md:text-9xl font-bold bg-clip-text text-transparent ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-950 dark:to-neutral-800'
            : 'bg-gradient-to-b from-neutral-50 to-neutral-200'
        } mt-auto`}
      >
        Vinkura.ai
      </p>

     
    </div>
  );
};

export default Footer;
