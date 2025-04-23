'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center rounded-2xl shadow-lg p-6 max-w-4xl w-full">
        <h1 className="text-5xl md:text-6xl mb-6 font-serif text-gradient bg-gradient-to-r from-gray-600 to-gray-600 text-transparent bg-clip-text text-center">
          Welcome to Iron Industry
        </h1>
        <Image
          src="/assets/social-network.gif"
          alt="Iron Industry"
          width={1200}
          height={800}
          className="rounded-2xl shadow-2xl w-full max-w-3xl"
        />
      </div>
      <div className="text-center mt-10 max-w-2xl px-2">
        <p className="text-l md:text-xl text-gray-700 font-italic mb-4">
          Forging the future through innovation and purpose-built products like <span className="font-semibold text-blue-700">AlumConnect</span>.
        </p>
        
     
      <div className="mt-3 animate-bounce">
        <a
          href="/products"
          className="inline-block mt-2 text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          🚀 Explore Our Products<span className="text-3xl text-blue-600">↓</span>
        </a>
        </div>
      </div>
      </section>
  );
}

