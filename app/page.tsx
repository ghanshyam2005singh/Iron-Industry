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
  description: 'Iron Industry is a forward-thinking tech startup. Our flagship product, AlumConnect, helps colleges connect students and alumni seamlessly.',
  keywords: ['Iron Industry', 'AlumConnect', 'tech startup', 'alumni network', 'college platform'],
  authors: [{ name: 'Iron Industry Team', url: 'https://ironindustry.tech' }],
  openGraph: {
    title: 'Iron Industry',
    description: 'Powering innovation through cutting-edge digital products like AlumConnect.',
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
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Industry – Future-Ready Tech',
    description: 'From AlumConnect to the next big thing. Explore the innovation at Iron Industry.',
    images: ['https://ironindustry.tech/og-image.png'],
  },
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
