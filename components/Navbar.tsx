'use client'
import { useTheme } from '../app/hooks/useTheme';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { Link } from 'react-scroll';

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
        ${
          scrolled
            ? 'bg-white dark:bg-[#111] shadow-md border-b border-zinc-200 dark:border-zinc-800'
            : 'bg-white/70 dark:bg-black/40 backdrop-blur-md'
        }
      `}
    >
      {/* Brand Title */}
      <h1 className="text-2xl font-bold font-mono bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        <a href="/">Iron Industry</a>
      </h1>

      <nav className="flex items-center space-x-8 ml-10 font-sans text-sm md:text-base">
        <a href="/about" className="text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
        <a href="/team" className="text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Team</a>
        <a href="/products" className="text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Products</a>
        <a href="/contact" className="text-black dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:scale-110 transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}
