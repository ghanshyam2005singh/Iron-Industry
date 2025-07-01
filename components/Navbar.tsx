'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Menu, X, Terminal } from 'lucide-react';
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setScrolled(window.scrollY > 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Updated nav items with anchor links
  const navItems = [
    { name: "About", href: "#about", icon: "📋" },
    { name: "Products", href: "#products", icon: "🚀" },
    { name: "Tech Stack", href: "#tech-stack", icon: "⚡" },
    { name: "Team", href: "#team", icon: "👥" },
    { name: "Contact", href: "#contact", icon: "💬" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-slate-900/95 backdrop-blur-md'
            : scrolled
            ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link href="/" onClick={handleLinkClick} className="group">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                    Iron Industry
                  </h1>
                  <div className="text-xs text-slate-400 font-mono">v2.0.1</div>
                </div>
                <div className="sm:hidden">
                  <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                    Iron Industry
                  </h1>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="group relative px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-300"
                >
                  <span className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* Discord Link */}
              <a
                href="https://discord.gg/FFEZqzGwtG"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title="Join our Discord"
              >
                <div className="w-10 h-10 bg-[#5865F2] rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/assets/discord.png" 
                    alt="Discord" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/ghanshyam2005singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="View on GitHub"
              >
                <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-300">
                  <Github className="w-5 h-5 text-white" />
                </div>
              </a>

              {/* Theme Toggle 
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 bg-slate-700 rounded-full p-1 cursor-pointer transition-all duration-300 hover:bg-slate-600"
                title="Toggle Theme"
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center text-xs ${
                    theme === 'dark' 
                      ? 'translate-x-6 bg-yellow-400 text-black' 
                      : 'translate-x-0 bg-slate-900 text-white'
                  }`}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </div>
              </button>
              */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden relative w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
              title="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={handleMobileMenuToggle}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-slate-900 border-l border-slate-700 shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold">Menu</span>
                </div>
                <button
                  onClick={handleMobileMenuToggle}
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-800 transition-colors group"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-slate-300 group-hover:text-white font-medium">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="p-6 border-t border-slate-700 mt-auto">
              <div className="space-y-4">
                {/* Social Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://discord.gg/FFEZqzGwtG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center gap-3 p-3 bg-[#5865F2] rounded-lg hover:bg-[#4752C4] transition-colors"
                  >
                    <Image src="/assets/discord.png" alt="Discord" className="w-5 h-5" />
                    <span className="text-white font-medium">Discord</span>
                  </a>
                  
                  <a
                    href="https://github.com/ghanshyam2005singh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* Theme Toggle 
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
                  <span className="text-slate-300 font-medium">
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                  </span>
                </button>
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}