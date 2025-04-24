'use client'
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled
          ? 'bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] shadow-lg border-b border-zinc-800'
          : 'bg-black/40 backdrop-blur-lg'}
      `}
    >
      {/* Brand Title */}
      <h1 className="text-2xl font-bold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        <a href="/">Iron Industry</a>
      </h1>

      {/* Nav Links */}
      <nav className="space-x-8 ml-10 font-sans text-sm md:text-base">
        <a href="/about" className="text-zinc-300 hover:text-blue-400 transition duration-300">
          About
        </a>
        <a href="/team" className="text-zinc-300 hover:text-blue-400 transition duration-300">
          Team
        </a>
        <a href="/products" className="text-zinc-300 hover:text-blue-400 transition duration-300">
          Products
        </a>
        <a href="/contact" className="text-zinc-300 hover:text-blue-400 transition duration-300">
          Contact
        </a>
      </nav>
    </header>
  );
}
