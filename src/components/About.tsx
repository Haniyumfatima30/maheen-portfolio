"use client";

import Image from "next/image";
import { User, Code2, Layout, Zap, HeartHandshake, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      title: "Clean & Modular Architecture",
      description: "Writing maintainable, component-driven, and type-safe code with React & TypeScript.",
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      title: "Responsive & Modern UI",
      description: "Crafting beautiful interfaces with Tailwind CSS that adapt flawlessly to every device.",
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "High Performance",
      description: "Optimizing Core Web Vitals, server-side rendering, and instant client-side transitions.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Collaborative & Detail-Oriented",
      description: "Strong communication, eager to tackle challenging problems, and always learning.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate Developer Building Purposeful Web Products
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            A developer who bridges the gap between clean engineering and aesthetic digital design.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Card & Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-65 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl flex flex-col items-center text-center">
                {/* Photo container */}
                <div className="relative w-44 h-44 rounded-2xl overflow-hidden mb-5 border-2 border-indigo-500/40 shadow-inner bg-slate-800">
                  <Image
                    src="/aa.jpg"
                    alt="Maheen Fatima"
                    fill
                    sizes="(max-width: 768px) 176px, 176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <h3 className="text-xl font-bold text-white">Maheen Fatima</h3>
                <p className="text-indigo-400 font-medium text-sm mt-0.5">Frontend & Full Stack Developer</p>
                
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Karachi, Pakistan</span>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-800 w-full flex justify-between text-xs text-slate-300">
                  <div className="text-left">
                    <span className="text-slate-400 block text-[11px]">Specialization</span>
                    <span className="font-semibold text-white">React & Next.js</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[11px]">Availability</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Open for Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Hello! I&apos;m <span className="font-semibold text-white">Maheen Fatima</span>, a web developer driven by a curiosity for how things work on the internet. I focus on creating scalable web applications with smooth user interfaces, strong type systems, and intuitive design.
              </p>
              <p>
                Whether developing end-to-end full-stack applications or perfecting micro-interactions on the frontend, I value <strong className="text-white">clean code</strong>, <strong className="text-white">performance</strong>, and <strong className="text-white">accessibility</strong>.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Skills Bullets */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              {[
                "TypeScript",
                "Next.js App Router",
                "React Hooks & Context",
                "Tailwind CSS v4",
                "RESTful APIs",
                "Node.js",
                "Git & GitHub",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  {badge}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
