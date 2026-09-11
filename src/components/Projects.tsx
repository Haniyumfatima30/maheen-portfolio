"use client";

import { useState } from "react";
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  category: "Full Stack" | "Frontend" | "AI / SaaS";
  tagline: string;
  description: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  accent: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Full Stack" | "Frontend" | "AI / SaaS">("All");

  const projects: Project[] = [
    {
      title: "Maheen.dev — Next.js Portfolio",
      category: "Frontend",
      tagline: "Next-generation developer portfolio & personal brand",
      description:
        "High-performance developer portfolio built with Next.js 16, React 19, Tailwind CSS v4, smooth animations, responsive layout, and interactive components.",
      tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "TypeScript"],
      demoUrl: "http://localhost:3000",
      githubUrl: "https://github.com/Haniyumfatima30/maheen-portfolio",
      featured: true,
      accent: "from-indigo-500 to-purple-600",
    },
    {
      title: "Cloud Portfolio & Contact Service",
      category: "Full Stack",
      tagline: "Node.js & Express powered backend service",
      description:
        "High-performance developer portfolio powered by an Express backend with automated contact message routing, CORS security, and Vercel serverless integration.",
      tags: ["Node.js", "Express", "REST API", "Vercel", "JavaScript"],
      demoUrl: "https://github.com/Haniyumfatima30/maheen-portfolio",
      githubUrl: "https://github.com/Haniyumfatima30/maheen-portfolio",
      featured: true,
      accent: "from-emerald-500 to-teal-600",
    },
    {
      title: "Crypto & FinTech Analytics Dashboard",
      category: "Frontend",
      tagline: "Live financial analytics with dark glassmorphism",
      description:
        "Real-time financial analytics dashboard featuring live market data visualizations, multi-currency wallet tracking, transaction history, and dynamic dark/light theme switching.",
      tags: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
      demoUrl: "https://github.com/Haniyumfatima30",
      githubUrl: "https://github.com/Haniyumfatima30",
      featured: false,
      accent: "from-cyan-500 to-blue-600",
    },
    {
      title: "ShopNest — Full Stack E-Commerce Platform",
      category: "Full Stack",
      tagline: "Modern digital storefront with smooth checkout",
      description:
        "Modern digital storefront with dynamic product catalog, multi-category search filters, persistent cart state management, and seamless mobile-first checkout flow.",
      tags: ["Node.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
      demoUrl: "https://github.com/Haniyumfatima30",
      githubUrl: "https://github.com/Haniyumfatima30",
      featured: false,
      accent: "from-pink-500 to-rose-600",
    },
    {
      title: "Interactive Task & Goal Tracker",
      category: "Frontend",
      tagline: "Productivity workspace with drag & drop boards",
      description:
        "Intuitive productivity application with interactive Kanban boards, milestone tracking, priority tags, and persistent state storage.",
      tags: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      demoUrl: "https://github.com/Haniyumfatima30",
      githubUrl: "https://github.com/Haniyumfatima30",
      featured: false,
      accent: "from-purple-500 to-indigo-600",
    },
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Applications
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Check out some of my recent web applications, full-stack architectures, and development work.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(["All", "Full Stack", "Frontend"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category === "All" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Card Top Preview Gradient Banner */}
              <div className={`h-36 bg-gradient-to-tr ${project.accent} opacity-85 p-4 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/90 text-slate-950 flex items-center gap-1 shadow">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white drop-shadow-sm group-hover:text-indigo-200 transition-colors">
                    {project.title.split("—")[0]}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links CTA */}
                  <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={project.demoUrl}
                      target={project.demoUrl.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group/link transition-colors"
                    >
                      <span>Live Preview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
