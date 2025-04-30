'use client';
import React from 'react';
import Image from "next/image";


export default function AboutPage() {
  return (
    <section id='about' className="bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none text-black dark:text-white transition-all duration-300 flex flex-col items-center justify-center py-10 px-4">
      <div className="flex flex-col items-center justify-center rounded-2xl border dark:border-zinc-800 shadow-[0_0_40px_-10px_#00f0ff] p-8 max-w-4xl w-full">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-extrabold font-mono bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 bg-clip-text text-transparent text-center tracking-tight">
          Welcome to Iron Industry
        </h1>

        {/* GIF */}
        <Image
          src="/assets/social-network.gif"
          alt="Iron Industry"
          width={800}
          height={500}
          className="rounded-xl mt-8 border border-zinc-700 shadow-2xl w-full max-w-[700px]"
          priority
        />
      </div>

      {/* Cool Quote */}
      <div className="text-center mt-12 max-w-2xl">
        <p className="text-lg md:text-xl text-black dark:text-white italic font-light">
          We don’t just build products — we build legends, write code like wizards, and ship like pirates. 🏴‍☠️
        </p>

        {/* CTA */}
        <div className="mt-6 animate-bounce">
          <a
            href="/products"
            className="inline-block text-xl font-bold tracking-wide text-amber-400 hover:text-white transition-colors"
          >
            🚀 Explore Our Products <span className="text-3xl text-blue-400">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
