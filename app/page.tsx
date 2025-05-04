import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import TeamSection from "./team/page";
import TechStackSlider from './tech-stack/page';

export const metadata = {
  title: {
    default: 'Iron Industry – Building Future Tech',
    template: '%s | Iron Industry',
  },
  description:
    'Iron Industry is a cutting-edge tech startup revolutionizing software, SaaS, and alumni networking. Our flagship product, AlumConnect, helps colleges connect students and alumni securely. We deliver innovation in AI, cloud, and modern web development.',
  keywords: [
    'Iron-Industry', 'AlumConnect', 'tech startup', 'technology company', 'SaaS solutions',
    'software development', 'AI solutions', 'machine learning', 'alumni platform',
    'college alumni network', 'education technology', 'edtech startup', 'digital transformation',
    'innovation hub', 'Next.js', 'TypeScript', 'Firebase', 'Vercel hosting', 'cloud infrastructure',
    'modern web apps', 'scalable software', 'startup India', 'startup ecosystem', 'cloud SaaS',
    'cutting-edge software', 'future technology', 'startup innovation', 'disruptive technology'
  ],
  authors: [{ name: 'Iron Industry Team', url: 'https://ironindustry.tech' }],
  creator: 'Iron Industry',
  publisher: 'Iron Industry',
  openGraph: {
    title: 'Iron Industry – Tech Startup Transforming Software and Innovation',
    description:
      'Join Iron Industry, a pioneering tech startup delivering cutting-edge SaaS solutions, AI software, and the AlumConnect alumni platform. Innovating for the future of technology.',
    url: 'https://ironindustry.tech',
    siteName: 'Iron Industry',
    images: [
      {
        url: 'https://ironindustry.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Iron Industry Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Industry – Building the Future of Tech',
    description:
      'Explore Iron Industry, the startup behind AlumConnect, transforming SaaS, AI, and alumni networking. Discover innovation at its finest.',
    site: '@ironindustry',
    creator: '@ironindustry',
    images: ['https://ironindustry.tech/og-image.png'],
  },
  metadataBase: new URL('https://ironindustry.tech'),
};


export default function HomePage() {
  return (
    <section className="px-4 space-y-28 bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300">
      <section className="flex items-center justify-center">
        <About />
      </section>
      <section className="flex items-center justify-center">
        <TechStackSlider />
      </section>
      <section className="flex items-center justify-center">
        <Products />
      </section>
      <section className="flex items-center justify-center">
        <TeamSection />
      </section>
      <section className="flex items-center justify-center">
        <Contact />
      </section>
    </section>
  );
}
