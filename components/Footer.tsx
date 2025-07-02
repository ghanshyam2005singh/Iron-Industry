import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart, Terminal, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "AlumConnect", href: "https://alumconn.in" },
    { name: "CV-Slayer", href: "#" },
    { name: "Padh-le-Bhai", href: "#" },
    { name: "Homie-Finder", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ghanshyam2005singh/",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/iron-industry-tech/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/iron_industry",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/iron.industry",
      label: "Instagram"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:outlercodie.com@gmail.com",
      label: "Email"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-slate-700">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Terminal className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
                    Iron Industry
                  </h3>
                  <div className="text-xs text-slate-400 font-mono">Building Tomorrow</div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                We&#39;re not just another dev team. We&#39;re digital architects, code poets, and open-source evangelists 
                building the future one commit at a time. 🚀
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-700 hover:border-purple-500 transition-all hover:scale-110"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-sm text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Currently building awesome stuff
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                Products
              </h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <a
                      href={product.href}
                      target={product.href.startsWith('http') ? '_blank' : '_self'}
                      rel={product.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className={`text-slate-300 hover:text-white transition-colors hover:translate-x-1 inline-block ${
                        product.href === '#' ? 'opacity-60 cursor-not-allowed' : ''
                      }`}
                    >
                      {product.name}
                      {product.href === '#' && (
                        <span className="text-xs text-purple-400 ml-2">Soon™</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span>© {currentYear} Iron Industry.</span>
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-500" />
              </div>

              {/* Tech Stack Badge */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-400">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}