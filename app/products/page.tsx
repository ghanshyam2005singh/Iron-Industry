'use client';
import React from 'react';

export default function Products() {
  return (
    <div className="bg-[#0d0d0d] text-white w-full flex flex-col items-center justify-center rounded-2xl border border-zinc-800 shadow-[0_0_30px_-10px_#00f0ff] p-10 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-extrabold font-mono bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 text-center">
        🚀 Our Products
      </h2>
      <p className="text-lg md:text-xl text-zinc-400 text-center">
        We build tools that don’t just solve problems — they redefine possibilities.
        <br />✨ Starting with <a href="http://project_ongoing" className="text-blue-400 font-semibold">AlumConnect</a>, the networking revolution for students & alumni.
      </p>
    </div>
  );
}