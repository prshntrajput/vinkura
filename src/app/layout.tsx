import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { GeistSans } from 'geist/font/sans';
import { siteUrl } from '@/utils/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Vinkura AI',
  description:
    'Fostering AI for a Better Tomorrow',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-black.png',
        href: '/logo-black.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo-white.png',
        href: '/logo-white.png',
      },
    ],
  },
  openGraph: {
    title: 'Vinkura AI',
    description:
      'Redefining the future of AI with advanced, private, and accessible solutions for education, businesses, and individuals. Join us in building the next wave of AI-driven innovation.',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}api/og?title=Welcome%20To%20Vinkura%20AI`,
        width: 1200,
        height: 639,
        alt: 'Vinkura AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinkura AI',
    description:
      'Innovative and inclusive AI solutions tailored for education and beyond. Explore cutting-edge private and localized AI systems with Vinkura AI.',
    images: [
      {
        url: `${siteUrl}api/og?title=Welcome%20To%20Vinkura%20AI`,
        width: 1200,
        height: 639,
        alt: 'Vinkura AI',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
