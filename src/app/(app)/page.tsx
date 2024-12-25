import { Beam, Beam2 } from '@/components/beam';
import Footer from '@/components/footer';
import { Icons } from '@/components/icons';
import VideoDisplay from '@/components/video-display';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AppleCardsCarouselDemo } from '@/components/applecard';
import { Loader } from '@/components/Loader';
import { PlaceholdersAndVanishInputDemo } from '@/components/vanish-effect';
import { Feature4 } from '@/components/founder';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Fostering AI for a Better Tomorrow - Vinkura AI</title>
        <meta
          name="description"
          content="Accelerating innovation with inclusive, accessible AI solutions and custom models designed to empower education and industries worldwide."
        />
        <meta name="keywords" content="Vinkura AI, AI solutions, custom AI models, education, industry innovation, accessible AI" />
        <meta property="og:title" content="Fostering AI for a Better Tomorrow - Vinkura AI" />
        <meta
          property="og:description"
          content="Accelerating innovation with inclusive, accessible AI solutions and custom models designed to empower education and industries worldwide."
        />
        <meta property="og:image" content="/image.png" />
        <meta property="og:url" content="https://vinkura.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fostering AI for a Better Tomorrow - Vinkura AI" />
        <meta name="twitter:description" content="Accelerating innovation with inclusive, accessible AI solutions and custom models designed to empower education and industries worldwide." />
        <meta name="twitter:image" content="/images/image.png" />
      </Head>
      <Loader />
      <PageHeader className="relative z-30">
        <Beam />
        <Beam2 />
        <div className="absolute inset-0 -z-10 h-full w-full dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_20%,transparent_120%)]"></div>
        <div className="py-1 text-sm px-5 bg-neutral-700 rounded-full text-white flex items-center gap-2 group hover:shadow-yellow-500 dark:hover:shadow-yellow-500 dark:shadow-slate-500 shadow-slate-300 cursor-pointer shadow-[0_5px_50px_rgba(8,_112,_184,_0.7)]">
          <Link
            href="https://huggingface.co/VinkuraAI"
            target="_blank"
          >
            Try Our Models
          </Link>
          <span className="text-xl group-hover:scale-125 transition duration-300">
            🤗
          </span>
        </div>

        <PageHeaderHeading className="z-20 tracking-wide">
          Fostering AI for a Better Tomorrow
        </PageHeaderHeading>
        <PageHeaderDescription className="z-20">
          Accelerating innovation with inclusive, accessible AI solutions and custom models designed to empower education and industries worldwide.
        </PageHeaderDescription>
        <PageActions className="z-20">
          <Link href="/research" className={cn(buttonVariants())}>
            Read Our Research
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href="/company"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
           About Us 
          </Link>
        </PageActions>
      </PageHeader>
      <div className="container relative">
        <VideoDisplay />
        <AppleCardsCarouselDemo />
      </div>
      <Feature4 />
      <PlaceholdersAndVanishInputDemo />

      <Footer />
    </>
  );
};

export default IndexPage;
