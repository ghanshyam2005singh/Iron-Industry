'use client';
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react'; // using lucide-react for nice icons

export default function Contact() {
  return (
    <section id='contact' className="bg-[rgb(223,222,222)] bg-[url('/assets/background.png')] bg-cover dark:bg-black dark:bg-none dark:text-white transition-all duration-300 text-white w-full flex flex-col items-center justify-center rounded-2xl border border-zinc-800 shadow-[0_0_30px_-10px_#0ff] p-10 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-extrabold font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
        📬 Get in Touch
      </h2>

      <p className="text-lg md:text-xl text-black dark:text-zinc-400 text-center mb-6">
        Lets build something amazing together!<br />
        Whether its code, collab, or just a coffee — I am just one click away. 💬
      </p>

      {/* Email Button */}
      <a
        href="mailto:outlercodie.com@gmail.com"
        className="mt-6 inline-block px-6 py-3 border border-amber-400 rounded-full text-black dark:text-amber-300 hover:bg-amber-400 hover:text-black transition-all duration-300 font-semibold"
      >
        📧 outlercodie.com@gmail.com
      </a>

      {/* Social Links */}
      <div className="flex space-x-6 mt-8">
        <a
          href="https://www.linkedin.com/in/ghanshyam-singh-b014232b2/" // change to your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border border-blue-400 text-black dark:text-blue-300 hover:bg-blue-400 hover:text-black px-4 py-2 rounded-full transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
          <span className="hidden md:inline font-semibold">LinkedIn</span>
        </a>

        <a
          href="https://x.com/https_ghanshyam" // change to your Twitter link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border border-blue-400 text-black dark:text-blue-300 hover:bg-blue-400 hover:text-black px-4 py-2 rounded-full transition-all duration-300"
        >
          <Twitter className="w-5 h-5" />
          <span className="hidden md:inline font-semibold">Twitter</span>
        </a>
      </div>
    </section>
  );
}
