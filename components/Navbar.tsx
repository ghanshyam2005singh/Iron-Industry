'use client'
import { useTheme } from '../app/hooks/useTheme';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]); // notice dependency here

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${isMobileMenuOpen
          ? 'bg-black shadow-md'
          : scrolled
          ? 'bg-white dark:bg-[#111] shadow-md border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-white/70 dark:bg-black/40 backdrop-blur-md'}
      `}
    >
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Iron Industry",
    "url": "https://ironindustry.tech",
    "logo": "https://ironindustry.tech/logo.png",
    "sameAs": [
      "https://linkedin.com/company/iron-industry",
      "https://github.com/iron-industry"
    ],
    "description": "Iron Industry is a modern tech startup focused on innovative digital products like AlumConnect."
  })
}} />

      {/* Brand Title */}
      <h1 className="text-2xl font-bold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        <Link href="/" onClick={handleLinkClick}>Iron Industry</Link>
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8 ml-10 font-sans text-sm md:text-base">
        {["about", "products", "team", "contact"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="cursor-pointer text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
<Link
  href="https://discord.gg/DAVf6xUT"
  target="_blank"
  className=""
>
  <Image src="/assets/discord.png" alt="Discord" className="w-10 h-10 rounded-full border border-zinc-800 shadow-[0_0_30px_-10px_#00f0ff] transition-all duration-300 hover:shadow-[0_0_40px_-5px_#00f0ff] hover:scale-105" />
</Link>


        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 w-14 h-8 flex items-center bg-gray-300 dark:bg-zinc-700 rounded-full p-1 cursor-pointer transition-all duration-300"
          title="Toggle Theme"
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300
              ${theme === 'dark' ? 'translate-x-6 bg-yellow-400' : 'translate-x-0 bg-gray-800'}
            `}
          >
            {theme === 'dark' ? (
              <span className="flex items-center justify-center w-full h-full text-black text-sm">☀️</span>
            ) : (
              <span className="flex items-center justify-center w-full h-full text-white text-sm">🌙</span>
            )}
          </div>
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenuToggle}
        className="md:hidden flex flex-col justify-center items-center space-y-1"
        title="Toggle Menu"
      >
        <div className={`w-8 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-black dark:bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile Menu */}
<nav
  className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-all duration-300 ${
    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
>
  {/* Close Button */}
  <button
    onClick={handleMobileMenuToggle}
    className="absolute top-6 right-6 text-white text-4xl"
    title="Close Menu"
  >
    &times; {/* × symbol */}
  </button>

  {/* Links */}
  {["about", "products", "team", "contact"].map((item) => (
    <Link
      key={item}
      href={`#${item}`}
      onClick={handleLinkClick}
      className="cursor-pointer text-white text-2xl mb-6 hover:text-blue-400 transition"
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Link>
  ))}
<Link
  href="https://discord.gg/DAVf6xUT"
  target="_blank"
  className=""
>
  <Image src="/assets/discord.png" alt="Discord" className="w-10 h-10 rounded-full border border-zinc-800 shadow-[0_0_30px_-10px_#00f0ff] transition-all duration-300 hover:shadow-[0_0_40px_-5px_#00f0ff] hover:scale-105" />
</Link>


  {/* Theme Toggle inside Mobile Menu */}
  <button
    onClick={toggleTheme}
    className="mt-6 w-14 h-8 flex items-center bg-gray-300 dark:bg-zinc-700 rounded-full p-1 cursor-pointer transition-all duration-300"
    title="Toggle Theme"
  >
    <div
      className={`w-6 h-6 rounded-full shadow-md transform transition-all duration-300
        ${theme === 'dark' ? 'translate-x-6 bg-yellow-400' : 'translate-x-0 bg-gray-800'}
      `}
    >
      {theme === 'dark' ? (
        <span className="flex items-center justify-center w-full h-full text-black text-sm">☀️</span>
      ) : (
        <span className="flex items-center justify-center w-full h-full text-white text-sm">🌙</span>
      )}
    </div>
  </button>
</nav>
    </header>
  );
}
