'use client';
import React from 'react';

export default function Team() {
  return (
    <div className="bg-[#111] text-white w-full flex flex-col items-center justify-center rounded-2xl border border-zinc-800 shadow-[0_0_30px_-10px_#f0f] p-10 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-extrabold font-mono bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6 text-center">
        🧠 Meet the Team
      </h2>
      <p className="text-lg md:text-xl text-zinc-400 text-center">
        A crew of curious minds, passionate builders, caffeine-fueled coders, and idea junkies — that’s us.
        <br />We dream big, build fast, and ship faster 🚢.
      </p>
    </div>
  );
}