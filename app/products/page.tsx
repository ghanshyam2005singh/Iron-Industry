'use client';
import React from 'react';

export default function Products() {
  const products = [
    {
      name: "AlumConnect",
      description: "The networking revolution for students & alumni.",
      link: "https://alum-connect-xi.vercel.app/",
      status: "Live Soon 🚀",
    },
    {
      name: "Homie-Finder",
      description: "Coming soon",
      link: "#",
      status: "Coming Soon ✨",
    },
  ];

  {/* Find your ideal roommates easily! */}

  return (
    <section id="products" className="py-20 w-full flex flex-col items-center justify-center bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300">
      <div className="max-w-5xl w-full px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold font-mono bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-center mb-10">
          🚀 Our Products
        </h2>

        <p className="text-lg md:text-xl text-zinc-400 text-center mb-16">
          We build tools that don’t just solve problems — they redefine possibilities.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="group border border-zinc-800 rounded-2xl p-6 flex flex-col items-start justify-between shadow-[0_0_30px_-10px_#00f0ff] transition-all duration-300 hover:shadow-[0_0_40px_-5px_#00f0ff] hover:scale-105"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                  {product.name}
                </h3>
                <p className="text-black dark:text-zinc-400 mb-4">{product.description}</p>
              </div>

              <a
                href={product.link}
                target="_blank"
                className="mt-4 inline-block text-blue-400 font-semibold hover:underline"
                rel="noopener noreferrer"
              >
                {product.status}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
