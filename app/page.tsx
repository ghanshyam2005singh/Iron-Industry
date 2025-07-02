import Products from './products/page';
import Contact from './contact/page';
import "./globals.css";
import About from './about/page';
import TeamSection from "./team/page";
import TechStackSlider from './tech-stack/page';
import { ArrowRight, Zap, Github, ExternalLink } from 'lucide-react';

// ...existing metadata...

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Hero Section - Better mobile spacing */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading - Better mobile sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Iron Industry
              </span>
            </h1>
            
            {/* Subheading - Better mobile text */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              We&#39;re not just building software — we&#39;re forging the future. 
              One commit, one product, one innovation at a time. 🚀
            </p>
            
            {/* Terminal-style tagline - Better mobile layout */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-lg p-3 md:p-4 max-w-2xl mx-auto mb-8 md:mb-12 font-mono text-left">
              <div className="text-green-400 text-xs md:text-sm mb-2">$ cat mission.txt</div>
              <div className="text-slate-300 text-sm md:text-base">
                &quot;Building tomorrow&#39;s technology with today&#39;s best developers&quot;
              </div>
            </div>

            {/* CTA Buttons - Better mobile layout */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-16">
              <a
                href="#products"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-4 md:w-5 h-4 md:h-5" />
                Explore Products
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              
              <a
                href="https://github.com/ghanshyam2005singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 hover:border-slate-500 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white transition-all hover:bg-slate-800 inline-flex items-center justify-center gap-2"
              >
                <Github className="w-4 md:w-5 h-4 md:h-5" />
                View on GitHub
                <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
              </a>
            </div>

            {/* Stats - Better mobile grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">20+</div>
                <div className="text-slate-400 text-xs md:text-sm">Products Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">700+</div>
                <div className="text-slate-400 text-xs md:text-sm">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-slate-400 text-xs md:text-sm">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">∞</div>
                <div className="text-slate-400 text-xs md:text-sm">Coffee Consumed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections with proper IDs */}
      <div className="space-y-0">
        <section id="about" className="relative z-10">
          <About />
        </section>
        
        <section id="tech-stack" className="relative z-10">
          <TechStackSlider />
        </section>
        
        <section id="products" className="relative z-10">
          <Products />
        </section>
        
        <section id="team" className="relative z-10">
          <TeamSection />
        </section>
        
        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </div>
    </div>
  );
}