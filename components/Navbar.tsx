'use client'
import { useTheme } from '../app/hooks/useTheme';
import { useEffect, useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled
          ? 'bg-white dark:bg-[#111] shadow-md border-b border-zinc-200 dark:border-zinc-800'
          : 'bg-white/70 dark:bg-black/40 backdrop-blur-md'}
      `}
    >
      {/* Brand Title */}
      <h1 className="text-2xl font-bold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        <Link href="/">Iron Industry</Link>
      </h1>

      <nav className="flex items-center space-x-8 ml-10 font-sans text-sm md:text-base">
        <Link href="#about" className="cursor-pointer text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          About
        </Link>
        <Link href="#team" className="cursor-pointer text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          Team
        </Link>
        <Link href="#products" className="cursor-pointer text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          Products
        </Link>
        <Link href="#contact" className="cursor-pointer text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
          Contact
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
    </header>
  );
}
