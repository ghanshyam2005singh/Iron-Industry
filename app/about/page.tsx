'use client';
import React from 'react';
import Image from "next/image";
import { Code2, Zap, Users, Star, GitBranch, Coffee, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: "Projects Built", value: "20+" },
    { icon: <Users className="w-6 h-6" />, label: "Active Contributions", value: "700+" },
    { icon: <Star className="w-6 h-6" />, label: "GitHub Stars", value: "10+" },
    { icon: <Coffee className="w-6 h-6" />, label: "Coffee Consumed", value: "∞" }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "We ship code faster than you can say 'npm install'"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Open Source Love",
      description: "Everything we build is open, transparent, and community-driven"
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Git Good",
      description: "Clean commits, meaningful PRs, and code that doesn't break prod"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Hero Section - Removed pt-20, adjusted for mobile */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Terminal Window - Better mobile responsive */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 w-full mx-auto mb-8 md:mb-16">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-3 md:p-4 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-xs md:text-sm ml-4">~/about-iron-industry</span>
            </div>
            
            {/* Terminal Content - Better mobile spacing */}
            <div className="p-4 md:p-8 font-mono">
              <div className="text-green-400 mb-2 text-sm md:text-base">$ cat about.md</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-sans">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Iron Industry
                </span>
              </h1>
              <div className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8">
                We are not just another dev team. We&#39;re digital architects, code poets, and open-source evangelists 
                building the future one commit at a time. 🚀
              </div>
              
              {/* Typing Animation Effect */}
              <div className="text-purple-400 mb-2 text-sm md:text-base">$ echo $MISSION</div>
              <div className="text-slate-300 mb-4 md:mb-6 text-sm md:text-base">
                &quot;Forging powerful, open-source tools that empower developers worldwide&quot;
              </div>
            </div>
          </div>

          {/* Stats Grid - Better mobile layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-lg md:rounded-xl p-3 md:p-6 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-2 md:mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-lg md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Better mobile layout */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Side - Better mobile handling */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-8">
                <picture>
                  <source srcSet="/assets/social-network.gif" type="image/gif" />
                  <Image
                    src="/assets/social-network.png"
                    alt="Iron Industry Team"
                    width={600}
                    height={400}
                    className="rounded-lg md:rounded-xl w-full shadow-2xl"
                    priority
                  />
                </picture>
                
                {/* Floating Code Snippet - Hidden on mobile */}
                <div className="hidden md:block absolute -bottom-6 -right-6 bg-slate-900 border border-slate-600 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">while(true) {'{'}
                  <div className="text-white ml-4">build();</div>
                  <div className="text-white ml-4">ship();</div>
                  <div className="text-white ml-4">repeat();</div>
                  <div className="text-green-400">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side - Better mobile typography */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Our Story: From
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Idea to Impact
                </span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-slate-300">
                <p className="text-base md:text-lg">
                  Started by developers, for developers. Iron Industry was born from late-night coding sessions, 
                  endless coffee, and a vision to create tools that actually solve real problems.
                </p>
                
                <p className="text-sm md:text-base">
                  We believe in the power of open source, the magic of clean code, and the impact of 
                  building in public. Every project we ship is a testament to our commitment to the 
                  developer community.
                </p>
                
                <div className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 md:p-4 mt-4 md:mt-6">
                  <div className="text-purple-400 font-mono text-xs md:text-sm mb-2">Our Philosophy</div>
                  <div className="text-white font-mono text-sm md:text-base">
                    Build fast. Ship faster. Make it open source. 💜
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Better mobile grid */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto">
              Our core values that drive every line of code we write
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 text-center hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300 text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Better mobile buttons */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl md:rounded-2xl p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build Something Epic?
            </h2>
            <p className="text-slate-300 text-sm md:text-lg mb-6 md:mb-8">
              Join our community of builders, creators, and code wizards 🧙‍♂️
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="/products"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 md:px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-4 md:w-5 h-4 md:h-5" />
                Explore Projects
              </a>
              <a
                href="https://github.com/ghanshyam2005singh/"
                className="border border-slate-600 hover:border-slate-500 px-6 md:px-8 py-3 rounded-lg font-semibold text-white transition-all hover:bg-slate-800 inline-flex items-center justify-center gap-2"
              >
                <GitBranch className="w-4 md:w-5 h-4 md:h-5" />
                GitHub
              </a>
              <a
                href="/contact"
                className="border border-slate-600 hover:border-slate-500 px-6 md:px-8 py-3 rounded-lg font-semibold text-white transition-all hover:bg-slate-800"
              >
                Let&#39;s Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}