'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, MapPin, Coffee, Code, Heart } from 'lucide-react';

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Ghanshyam Singh",
      role: "Founder & Lead Developer",
      image: "/assets/team/cmo-2.jpg",
      description: "Full-stack wizard who turns coffee into code. Passionate about building products that matter.",
      skills: ["React", "Node.js", "Python", "DevOps", "AWS", "MongoDB", "TypeScript", "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "Redis"],
      location: "India",
      github: "ghanshyam2005singh",
      linkedin: "ghanshyam-singh-b014232b2",
      twitter: "https_ghanshyam",
      instagram: "https_ghanshyam",
      coffeeLevel: 95,
      status: "Building the future ⚡",
      joinedYear: "2023"
    },
    {
      name: "Ghanshyam Singh",
      role: "Frontend Developer",
      image: "/assets/team/founder.jpg",
      description: "UI/UX enthusiast crafting pixel-perfect experiences. Believes design is not just how it looks, but how it works.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Figma", "Next.js", "Vue.js", "SASS", "Webpack", "Three.js", "Framer Motion", "Storybook", "Jest"],
      location: "India",
      github: "ghanshyam2005singh",
      linkedin: "ghanshyam-singh-b014232b2",
      twitter: "https_ghanshyam",
      instagram: "https_ghanshyam",
      coffeeLevel: 88,
      status: "Designing dreams ✨",
      joinedYear: "2023"
    },
    {
      name: "Ghanshyam Singh",
      role: "Marketing Manager",
      image: "/assets/team/cmo.jpg",
      description: "Growth hacker and brand storyteller. Turns technical jargon into compelling narratives that resonate.",
      skills: ["Growth Hacking", "Content Strategy", "SEO", "Analytics", "Social Media", "Email Marketing", "A/B Testing", "Google Ads", "Facebook Ads", "Copywriting", "Brand Design", "Conversion Optimization"],
      location: "India",
      github: "ghanshyam2005singh",
      linkedin: "ghanshyam-singh-b014232b2",
      twitter: "https_ghanshyam",
      instagram: "https_ghanshyam",
      coffeeLevel: 75,
      status: "Scaling the brand 📈",
      joinedYear: "2023"
    }
  ];

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
              <span className="text-slate-400 text-sm ml-4">~/meet-the-team</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="text-green-400 mb-2">$ cat team.json | jq &#39;.members[]&#39;</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Meet the Builders
                </span>
              </h1>
              <div className="text-slate-300 text-lg md:text-xl mb-8 max-w-4xl">
                The passionate humans behind Iron Industry. We&#39;re not just teammates — we&#39;re code poets, 
                problem solvers, and digital architects building tomorrow, together. 🚀
              </div>
              
              <div className="text-purple-400 mb-2">$ echo &quot;Powered by caffeine and creativity&quot;</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Header */}
                <div className="relative mb-6">
                  {/* Avatar */}
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-1">
                      <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={88}
                          height={88}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    {/* Online Status */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400 text-sm font-semibold mb-2">{member.role}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="text-xs text-slate-400 mb-2 font-mono">Skills ({member.skills.length})</div>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 6).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 6 && (
                      <span 
                        className="text-xs px-2 py-1 bg-purple-700 text-purple-200 rounded cursor-pointer hover:bg-purple-600 transition-colors"
                        title={`All skills: ${member.skills.join(', ')}`}
                      >
                        +{member.skills.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Status & Location */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {member.status}
                  </div>
                </div>

                {/* Coffee Level */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <div className="flex items-center gap-1">
                      <Coffee className="w-3 h-3" />
                      Coffee Level
                    </div>
                    <span>{member.coffeeLevel}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1">
                    <div 
                      className="bg-gradient-to-r from-amber-600 to-orange-600 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${member.coffeeLevel}%` }}
                    ></div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-slate-700">
                  <a 
                    href={`https://github.com/${member.github}`} 
                    className="text-slate-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://linkedin.com/in/${member.linkedin}`} 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://twitter.com/${member.twitter}`} 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={`https://instagram.com/${member.instagram}`} 
                    className="text-slate-400 hover:text-pink-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

                {/* Hover Effect - Show Join Year */}
                {hoveredMember === index && (
                  <div className="absolute top-2 right-2 bg-slate-900 border border-slate-600 rounded-lg px-2 py-1 text-xs text-slate-300">
                    Since {member.joinedYear}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Join Us Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                We&#39;re always looking for passionate developers, designers, and builders who share our vision.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/careers"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  View Openings
                </a>
                <a
                  href="/contact"
                  className="border border-slate-600 hover:border-slate-500 px-8 py-3 rounded-lg font-semibold text-white transition-all hover:bg-slate-800 inline-flex items-center gap-2"
                >
                  <Code className="w-5 h-5" />
                  Say Hello
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}