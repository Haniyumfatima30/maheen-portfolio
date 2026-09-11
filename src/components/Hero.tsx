"use client";

import Image from "next/image";
import { ArrowRight, Mail, Sparkles, Terminal, Code, Cpu, ExternalLink, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm shadow-indigo-900/30">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Full Stack Web Developer & Software Enthusiast</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building modern,{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                pixel-perfect
              </span>{" "}
              web applications.
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Hi, I&apos;m <strong className="font-semibold text-white">Maheen Fatima</strong>. I build fast, accessible, and highly scalable digital experiences using <span className="text-indigo-400 font-medium">Next.js</span>, <span className="text-purple-400 font-medium">React</span>, <span className="text-pink-400 font-medium">TypeScript</span>, and <span className="text-emerald-400 font-medium">Tailwind CSS</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-indigo-400" />
              </a>
            </div>

            {/* Social Links & Quick Info */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-slate-400 text-sm">
              <span className="font-medium text-slate-400">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Haniyumfatima30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:maheenfatima@example.com"
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-600 hover:text-white transition-colors"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Hero Visual / Interactive Code Card */}
          <div className="lg:col-span-5 relative">
            {/* Glowing outer backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-30 blur-xl"></div>

            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer.ts</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">v16.3</span>
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                <p className="text-slate-400">// Meet the Developer</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-indigo-300 font-semibold">developer</span> = &#123;
                </p>
                <div className="pl-5 space-y-1">
                  <p>
                    <span className="text-slate-400">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Maheen Fatima&quot;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">role:</span>{" "}
                    <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">location:</span>{" "}
                    <span className="text-emerald-300">&quot;Karachi, Pakistan&quot;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">coreStack:</span> [
                  </p>
                  <p className="pl-5 text-amber-300">
                    &quot;Next.js&quot;, &quot;React 19&quot;, &quot;TypeScript&quot;, &quot;TailwindCSS&quot;, &quot;Node.js&quot;
                  </p>
                  <p className="text-slate-400">],</p>
                  <p>
                    <span className="text-slate-400">passion:</span>{" "}
                    <span className="text-emerald-300">&quot;Building fast & delightful UX&quot;</span>,
                  </p>
                  <p>
                    <span className="text-slate-400">openToWork:</span>{" "}
                    <span className="text-cyan-400">true</span>,
                  </p>
                </div>
                <p>&#125;;</p>
                <p className="pt-2 text-indigo-400">
                  <span className="text-purple-400">export default</span> developer;
                </p>
              </div>

              {/* Bottom Feature Badges */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/60 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="text-base font-bold text-indigo-400">15+</div>
                  <div className="text-[11px] text-slate-400">Projects Built</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="text-base font-bold text-purple-400">100%</div>
                  <div className="text-[11px] text-slate-400">Commitment</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  <div className="text-base font-bold text-emerald-400">Fast</div>
                  <div className="text-[11px] text-slate-400">Turnaround</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
