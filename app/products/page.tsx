'use client';
import React from 'react';
import { ExternalLink, Rocket, Sparkles, Zap, Users, FileText, BookOpen, Heart } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "AlumConnect",
      description: "The networking revolution for students & alumni.",
      primaryLink: "https://alumconn.in",
      fallbackLink: "https://alum-connect-xi.vercel.app/",
      status: "Live",
      statusColor: "green",
      icon: <Users className="w-8 h-8" />,
      tags: ["Networking", "Students", "Alumni"],
      featured: true
    },
    {
      name: "CV-Slayer",
      description: "CV Slayer is not your typical resume reviewer. It's the dark-humored, brutally honest, slightly unhinged HR you never wanted to meet... but probably needed to. Choose how hard you want to get roasted — from 'Pyar Se 💘' to 'Dhang Se 😡' — and watch your resume get shredded with style (and swears 😬).",
      primaryLink: "#",
      fallbackLink: "#",
      status: "Coming Soon",
      statusColor: "yellow",
      icon: <FileText className="w-8 h-8" />,
      tags: ["Resume", "AI", "Review"],
      featured: false
    },
    {
      name: "Padh-le-Bhai",
      description: "Padh-le-Bhai is a student-driven platform to make study resources accessible for everyone. Our mission is to empower students to learn, share, and succeed together. Whether you need notes for your next exam or want to help others by uploading your own, this is the place for you!",
      primaryLink: "#",
      fallbackLink: "#",
      status: "In Development",
      statusColor: "blue",
      icon: <BookOpen className="w-8 h-8" />,
      tags: ["Education", "Notes", "Community"],
      featured: false
    },
    {
      name: "Homie-Finder",
      description: "Find your ideal roommates easily! Connect with like-minded people and discover your perfect living space match.",
      primaryLink: "#",
      fallbackLink: "#",
      status: "Coming Soon",
      statusColor: "purple",
      icon: <Heart className="w-8 h-8" />,
      tags: ["Roommates", "Housing", "Community"],
      featured: false
    },
  ];

  async function checkAndRedirect(primaryUrl: string, fallbackUrl: string) {
    if (primaryUrl === "#" || fallbackUrl === "#") {
      return; // Don't redirect for placeholder links
    }

    try {
      const fetchWithTimeout = (url: string, ms: number) =>
        new Promise((resolve, reject) => {
          const timeoutId = setTimeout(() => reject(new Error('timeout')), ms);
          fetch(url, { method: 'HEAD', mode: 'no-cors' })
            .then(() => {
              clearTimeout(timeoutId);
              resolve(true);
            })
            .catch(reject);
        });

      await fetchWithTimeout(primaryUrl, 2000);
      window.open(primaryUrl, '_blank');
    } catch {
      window.open(fallbackUrl, '_blank');
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Live":
        return <Rocket className="w-4 h-4" />;
      case "Coming Soon":
        return <Sparkles className="w-4 h-4" />;
      case "In Development":
        return <Zap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const getStatusColor = (statusColor: string) => {
    const colors = {
      green: "bg-green-900 text-green-300 border-green-700",
      yellow: "bg-yellow-900 text-yellow-300 border-yellow-700",
      blue: "bg-blue-900 text-blue-300 border-blue-700",
      purple: "bg-purple-900 text-purple-300 border-purple-700",
    };
    return colors[statusColor as keyof typeof colors] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Terminal Window */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 max-w-6xl mx-auto mb-16">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-4 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-sm ml-4">~/our-products</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="text-green-400 mb-2">$ cat products.json | jq &#39;.featured&#39;</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Our Products
                </span>
              </h1>
              <div className="text-slate-300 text-lg md:text-xl mb-8 max-w-4xl">
                We build tools that don&#39;t just solve problems — they redefine possibilities. 
                Each product is crafted with love, coffee, and countless late-night coding sessions. 🚀
              </div>
              
              <div className="text-purple-400 mb-2">$ echo &quot;Building the future, one product at a time&quot;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 ${
                  product.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-purple-400">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border ${getStatusColor(product.statusColor)}`}>
                        {getStatusIcon(product.status)}
                        {product.status}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  {product.status === "Live" ? (
                    <button
                      onClick={() => checkAndRedirect(product.primaryLink, product.fallbackLink)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-white font-semibold transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </button>
                  ) : (
                    <div className="px-4 py-2 bg-slate-700 rounded-lg text-slate-400 font-semibold">
                      Soon™
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-slate-700 text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="text-sm text-slate-400">
                    Built with 💜 by Iron Industry
                  </div>
                  {product.featured && (
                    <div className="flex items-center gap-2 text-sm text-yellow-400">
                      <Sparkles className="w-4 h-4" />
                      Featured
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Got an Idea? Let&#39;s Build It Together!
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                We&#39;re always looking for new challenges and innovative projects to work on.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Start a Project
                </a>
                <a
                  href="https://github.com/IronIndustry"
                  className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:bg-slate-800"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}