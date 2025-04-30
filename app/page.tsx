import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import TeamSection from "./team/page";
import TechStackSlider from './tech-stack/page';
import { Metadata } from "next";

// app/page.tsx
export const metadata = {
  title: "AlumConnect | Connecting Alumni & Students",
  description: "A secure platform for college alumni and students to connect, share, and grow together.",
  keywords: ["alumni", "students", "college", "networking", "AlumConnect"],
  authors: [{ name: "Ghanshyam Singh", url: "https://github.com/ghanshyam2005singh" }],
  creator: "Ghanshyam Singh",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    title: "AlumConnect | Connecting Alumni & Students",
    description: "Stay connected with your alma mater. Find, message, and collaborate.",
    url: "https://alumconnect.tech",
    siteName: "AlumConnect",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlumConnect",
    description: "Bridge the gap between alumni and students.",
    images: ["/assets/og-image.png"],
    creator: "@https_ghanshyam",
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
