'use client';
import React from 'react';

export default function Contact() {
  return (
    <div className="bg-[#101010] text-white w-full flex flex-col items-center justify-center rounded-2xl border border-zinc-800 shadow-[0_0_30px_-10px_#0ff] p-10 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6 text-center">
        📬 Get in Touch
      </h2>
      <p className="text-lg md:text-xl text-zinc-400 text-center mb-4">
        Let’s talk code, collab, or coffee. We’re just a ping away 💬.
      </p>
      <a
        href="mailto:ironindustry@protonmail.com"
        className="mt-4 inline-block text-lg font-bold text-amber-300 hover:text-white transition-colors"
      >
        📧 ironindustry@protonmail.com
      </a>
    </div>
  );
}
