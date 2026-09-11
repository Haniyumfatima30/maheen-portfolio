"use client";

import { useState } from "react";
import { 
  Code2, 
  Database, 
  Wrench, 
  Sparkles, 
  Layers, 
  Cpu, 
  Globe, 
  Check, 
  Terminal, 
  Palette 
} from "lucide-react";

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  level: string;
  iconName: string;
  description: string;
  color: string;
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Frontend" | "Backend" | "Tools">("All");

  const skills: Skill[] = [
    // Frontend
    {
      name: "Next.js",
      category: "Frontend",
      level: "Advanced",
      iconName: "Globe",
      description: "App Router, SSR, SSG, Server Components, API routes",
      color: "from-indigo-500 to-blue-600",
    },
    {
      name: "React.js",
      category: "Frontend",
      level: "Advanced",
      iconName: "Code2",
      description: "React 19, Hooks, State Management, Component Architecture",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      level: "Proficient",
      iconName: "Terminal",
      description: "Static typing, generics, interfaces, strict mode development",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      level: "Expert",
      iconName: "Palette",
      description: "Tailwind v4, utility-first styling, animations, responsive design",
      color: "from-teal-400 to-cyan-500",
    },
    {
      name: "JavaScript (ES6+)",
      category: "Frontend",
      level: "Advanced",
      iconName: "Code2",
      description: "Modern asynchronous JS, closures, promises, DOM manipulation",
      color: "from-amber-400 to-yellow-500",
    },
    {
      name: "HTML5 & Modern CSS3",
      category: "Frontend",
      level: "Expert",
      iconName: "Layers",
      description: "Semantic markup, Flexbox, CSS Grid, accessibility (a11y)",
      color: "from-rose-500 to-orange-500",
    },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      level: "Proficient",
      iconName: "Cpu",
      description: "Event-driven architecture, npm packages, runtime execution",
      color: "from-emerald-500 to-green-600",
    },
    {
      name: "Express.js & REST APIs",
      category: "Backend",
      level: "Proficient",
      iconName: "Database",
      description: "Middleware, RESTful API design, routing, auth workflows",
      color: "from-slate-400 to-slate-600",
    },
    {
      name: "PostgreSQL & Prisma",
      category: "Backend",
      level: "Proficient",
      iconName: "Database",
      description: "Relational modeling, migrations, queries, type-safe ORM",
      color: "from-sky-500 to-blue-700",
    },
    {
      name: "MongoDB",
      category: "Backend",
      level: "Intermediate",
      iconName: "Database",
      description: "NoSQL document store, schemas, aggregation pipelines",
      color: "from-emerald-600 to-teal-700",
    },

    // Tools
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Advanced",
      iconName: "Wrench",
      description: "Version control, branching, PR reviews, merge management",
      color: "from-orange-500 to-rose-600",
    },
    {
      name: "Postman",
      category: "Tools",
      level: "Advanced",
      iconName: "Wrench",
      description: "API testing, collections, documentation, debugging",
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "VS Code & DevTools",
      category: "Tools",
      level: "Expert",
      iconName: "Terminal",
      description: "Debugging, performance profiling, responsive inspection",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Vercel & Deployment",
      category: "Tools",
      level: "Advanced",
      iconName: "Globe",
      description: "Continuous deployment, environment variables, edge networking",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const filteredSkills = activeFilter === "All"
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#060910]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Tech Stack & Skills
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Technologies, frameworks, and tools I use to build robust and scalable digital products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(["All", "Frontend", "Backend", "Tools"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {filter === "All" ? "All Technologies" : filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-slate-900/70 border border-slate-800/80 p-5 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${skill.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="uppercase tracking-wider font-semibold">{skill.category}</span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Check className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Highlights Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Modern Engineering Standards</h4>
              <p className="text-sm text-slate-400 mt-0.5">
                Always up-to-date with Next.js 16, React 19, server actions, and TypeScript strict mode.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-colors shrink-0 shadow-lg"
          >
            <span>Request a Tech Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
