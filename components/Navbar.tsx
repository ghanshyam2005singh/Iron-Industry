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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? 'bg-white shadow-md backdrop-blur-md' : 'bg-white/70 backdrop-blur-md'}
      `}
    >
      {/* bg-gray-300 */}
      <h1 className="text-2xl font-serif text-green-600">Iron Industry</h1>
      <nav className="space-x-10 ml-10 font-sans">
        <a href="/about" className="text-black hover:text-blue-600">About</a>
        <a href="/team" className="text-black hover:text-blue-600">Team</a>
        <a href="/products" className="text-black hover:text-blue-600">Products</a>
        <a href="/contact" className="text-black hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}
