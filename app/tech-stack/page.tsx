'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { Code, Layers, Database, Globe, Zap, Cloud, Shield } from 'lucide-react';

const techStack = [
  // Frontend Technologies
  { 
    name: "React", 
    src: "/assets/tech/react.png", 
    category: "Frontend",
    proficiency: 95,
    description: "Modern UI development & component architecture"
  },
  { 
    name: "Next.js", 
    src: "/assets/tech/nextjs.png", 
    category: "Frontend",
    proficiency: 92,
    description: "Full-stack React framework with SSR"
  },
  { 
    name: "TypeScript", 
    src: "/assets/tech/typescript.png", 
    category: "Frontend",
    proficiency: 90,
    description: "Type-safe JavaScript for enterprise apps"
  },
  { 
    name: "JavaScript", 
    src: "/assets/tech/js.png", 
    category: "Frontend",
    proficiency: 95,
    description: "Dynamic web development & modern ES6+"
  },
  { 
    name: "HTML5", 
    src: "/assets/tech/html-5.png", 
    category: "Frontend",
    proficiency: 98,
    description: "Semantic markup & modern web standards"
  },
  { 
    name: "CSS3", 
    src: "/assets/tech/css-3.png", 
    category: "Frontend",
    proficiency: 92,
    description: "Modern styling with Flexbox & Grid"
  },
  { 
    name: "Tailwind CSS", 
    src: "/assets/tech/tailwind.png", 
    category: "Frontend",
    proficiency: 94,
    description: "Utility-first CSS framework"
  },

  // Backend Technologies
  { 
    name: "Node.js", 
    src: "/assets/tech/node.png", 
    category: "Backend",
    proficiency: 90,
    description: "Scalable server-side JavaScript runtime"
  },
  { 
    name: "Express.js", 
    src: "/assets/tech/express.png", 
    category: "Backend",
    proficiency: 92,
    description: "Fast, minimalist web framework for Node.js"
  },
  { 
    name: "Python", 
    src: "/assets/tech/python.png", 
    category: "Backend",
    proficiency: 95,
    description: "AI/ML, data science & rapid prototyping"
  },
  { 
    name: "Go", 
    src: "/assets/tech/go.png", 
    category: "Backend",
    proficiency: 82,
    description: "Fast, statically typed programming language"
  },
  { 
    name: "Rust", 
    src: "/assets/tech/rust.webp", 
    category: "Backend",
    proficiency: 78,
    description: "Memory-safe systems programming language"
  },
  { 
    name: "Java", 
    src: "/assets/tech/java.png", 
    category: "Backend",
    proficiency: 85,
    description: "Enterprise applications & Android development"
  },
  { 
    name: "C++", 
    src: "/assets/tech/c.png", 
    category: "Backend",
    proficiency: 90,
    description: "High-performance computing & system programming"
  },
  { 
    name: ".NET", 
    src: "/assets/tech/dotnet.png", 
    category: "Backend",
    proficiency: 83,
    description: "Microsoft's cross-platform development framework"
  },

  // Databases
  { 
    name: "MongoDB", 
    src: "/assets/tech/mongodb.png", 
    category: "Database",
    proficiency: 90,
    description: "NoSQL document database"
  },
  { 
    name: "PostgreSQL", 
    src: "/assets/tech/Postgresql_elephant.svg.png", 
    category: "Database",
    proficiency: 88,
    description: "Advanced open-source relational database"
  },
  { 
    name: "MySQL", 
    src: "/assets/tech/mysql.png", 
    category: "Database",
    proficiency: 87,
    description: "Popular open-source relational database"
  },
  { 
    name: "Redis", 
    src: "/assets/tech/redis.png", 
    category: "Database",
    proficiency: 85,
    description: "In-memory data structure store"
  },
  { 
    name: "Firebase", 
    src: "/assets/tech/firebase.png", 
    category: "Database",
    proficiency: 88,
    description: "Real-time database & serverless functions"
  },
  { 
    name: "Supabase", 
    src: "/assets/tech/supabase.jpg", 
    category: "Database",
    proficiency: 86,
    description: "Open-source Firebase alternative"
  },

  // Cloud & DevOps
  { 
    name: "AWS", 
    src: "/assets/tech/aws.png", 
    category: "Cloud",
    proficiency: 88,
    description: "Amazon Web Services cloud platform"
  },
  
  { 
    name: "Google Cloud", 
    src: "/assets/tech/google-cloud.jpg", 
    category: "Cloud",
    proficiency: 83,
    description: "Google Cloud Platform services"
  },
  { 
    name: "Docker", 
    src: "/assets/tech/docker.png", 
    category: "DevOps",
    proficiency: 85,
    description: "Containerization & deployment automation"
  },
  {
    name: "GitHub", 
    src: "/assets/tech/github.jpg", 
    category: "DevOps",
    proficiency: 95,
    description: "Version control & collaborative development"
  },

  { 
    name: "Vercel", 
    src: "/assets/tech/logo-vercel.png", 
    category: "DevOps",
    proficiency: 92,
    description: "Frontend deployment platform"
  },
  { 
    name: "Netlify", 
    src: "/assets/tech/netlify.png", 
    category: "DevOps",
    proficiency: 89,
    description: "Modern web development platform"
  },

  // Blockchain & Web3
  { 
    name: "Solidity", 
    src: "/assets/tech/solidity.png", 
    category: "Blockchain",
    proficiency: 75,
    description: "Smart contract programming language"
  },
  { 
    name: "Web3", 
    src: "/assets/tech/web3.png", 
    category: "Blockchain",
    proficiency: 75,
    description: "Decentralized applications & smart contracts"
  },
  { 
    name: "Ethereum", 
    src: "/assets/tech/ethereum.avif", 
    category: "Blockchain",
    proficiency: 73,
    description: "Decentralized blockchain platform"
  },

  // AI/ML
  { 
    name: "OpenAI", 
    src: "/assets/tech/openai.jpg", 
    category: "AI/ML",
    proficiency: 85,
    description: "AI models and API integration"
  },

  // Other Tools
  { 
    name: "GraphQL", 
    src: "/assets/tech/graphql.png", 
    category: "Backend",
    proficiency: 84,
    description: "Query language for APIs"
  },
  { 
    name: "Prisma", 
    src: "/assets/tech/prisma.jpg", 
    category: "Backend",
    proficiency: 88,
    description: "Modern database toolkit"
  },
  { 
    name: "Socket.io", 
    src: "/assets/tech/socket-io.svg", 
    category: "Backend",
    proficiency: 86,
    description: "Real-time bidirectional communication"
  }
];

const categories = [
  { name: "All", icon: <Code className="w-5 h-5" />, color: "purple" },
  { name: "Frontend", icon: <Globe className="w-5 h-5" />, color: "blue" },
  { name: "Backend", icon: <Database className="w-5 h-5" />, color: "green" },
  { name: "Database", icon: <Database className="w-5 h-5" />, color: "red" },
  { name: "Cloud", icon: <Cloud className="w-5 h-5" />, color: "cyan" },
  { name: "DevOps", icon: <Layers className="w-5 h-5" />, color: "orange" },
  { name: "AI/ML", icon: <Zap className="w-5 h-5" />, color: "violet" },
  { name: "Blockchain", icon: <Shield className="w-5 h-5" />, color: "yellow" },
];

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function getCategoryColor(category: string) {
  const colors = {
    Frontend: "from-blue-600 to-blue-400",
    Backend: "from-green-600 to-green-400",
    Database: "from-red-600 to-red-400",
    Cloud: "from-cyan-600 to-cyan-400",
    DevOps: "from-orange-600 to-orange-400",
    Mobile: "from-pink-600 to-pink-400",
    "AI/ML": "from-violet-600 to-violet-400",
    Blockchain: "from-yellow-600 to-yellow-400",
  };
  return colors[category as keyof typeof colors] || "from-purple-600 to-purple-400";
}

export default function TechStackPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "marquee">("grid");

  const filteredStack = selectedCategory === "All" 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  const rows = [shuffle(techStack), shuffle(techStack), shuffle(techStack)];
  const durations = ["20s", "25s", "18s"];

  // Calculate stats
  const totalTechs = techStack.length;
  const avgProficiency = Math.round(techStack.reduce((sum, tech) => sum + tech.proficiency, 0) / totalTechs);
  const categoriesCount = categories.length - 1; // Exclude "All"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Terminal Window */}
          <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-700 max-w-6xl mx-auto mb-16">
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-sm ml-4">~/tech-arsenal</span>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-slate-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${
                    viewMode === "grid" 
                      ? "bg-purple-600 text-white" 
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("marquee")}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${
                    viewMode === "marquee" 
                      ? "bg-purple-600 text-white" 
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Flow
                </button>
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono">
              <div className="text-green-400 mb-2 text-sm md:text-base">$ ls -la /tech-stack</div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 font-sans">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Our Tech Arsenal
                </span>
              </h1>
              <div className="text-slate-300 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-4xl">
                The cutting-edge technologies we wield to build digital products that don&apos;t just work — they scale, perform, and inspire. 💻⚡
              </div>
              
              <div className="text-purple-400 mb-2 text-sm md:text-base">$ echo &quot;Building tomorrow with today&apos;s best tools&quot;</div>
            </div>
          </div>

          {/* Category Filters (only show in grid mode) */}
          {viewMode === "grid" && (
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105"
                      : "bg-slate-800/60 text-slate-300 hover:bg-slate-700 border border-slate-600"
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack Content */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredStack.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="group bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-4 md:p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  {/* Tech Icon & Name */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-white truncate">{tech.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(tech.category)} text-white`}>
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs md:text-sm mb-4 line-clamp-2">{tech.description}</p>

                  {/* Proficiency Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">Proficiency</span>
                      <span className="text-xs text-purple-400 font-semibold">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 text-xs text-green-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Active in projects
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Marquee View */
            <div className="space-y-6 md:space-y-8">
              <div className="text-center mb-8">
                <p className="text-slate-400 text-base md:text-lg">
                  Watch our tech stack flow in real-time ⚡
                </p>
              </div>
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-center whitespace-nowrap will-change-transform animate-marquee hover:[animation-play-state:paused]"
                  style={{
                    animationDuration: durations[idx],
                    animationDirection: idx % 2 === 0 ? "normal" : "reverse",
                  }}
                >
                  {[...row, ...row].map((tech, index) => (
                    <div 
                      key={`${tech.name}-${index}`} 
                      className="mx-4 md:mx-6 flex-shrink-0 group"
                    >
                      <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl p-3 md:p-4 hover:border-purple-500 transition-all duration-300 hover:scale-110">
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={64}
                          height={64}
                          className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                        />
                        <div className="text-center">
                          <div className="text-white font-semibold text-xs md:text-sm">{tech.name}</div>
                          <div className="text-purple-400 text-xs">{tech.category}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Stats */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Powered by Modern Tech
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">{totalTechs}</div>
                <div className="text-slate-300 text-xs md:text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-1">{categoriesCount}</div>
                <div className="text-slate-300 text-xs md:text-sm">Categories</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{avgProficiency}%</div>
                <div className="text-slate-300 text-xs md:text-sm">Avg Proficiency</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">∞</div>
                <div className="text-slate-300 text-xs md:text-sm">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}