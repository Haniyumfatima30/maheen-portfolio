"use client";

import { Briefcase, GraduationCap, Award, Calendar, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend & Full Stack Developer",
      company: "Freelance & Client Projects",
      location: "Remote / Karachi",
      period: "2024 — Present",
      type: "work",
      description:
        "Building tailored web applications for startups and businesses. Engineered production-ready frontends with Next.js App Router, implemented responsive UI components, integrated payment gateways, and optimized SEO & web performance.",
      skills: ["Next.js 16", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
      role: "Web Development Specialist",
      company: "Tech Projects & Open Source",
      location: "Remote",
      period: "2023 — 2024",
      type: "work",
      description:
        "Developed interactive web prototypes, implemented responsive grid layouts, integrated third-party APIs, and participated in open-source developer communities.",
      skills: ["JavaScript ES6+", "React", "HTML5/CSS3", "Git & GitHub"],
    },
    {
      role: "Bachelor of Science in Computer Science / Software",
      company: "University Education",
      location: "Karachi, Pakistan",
      period: "2022 — Present",
      type: "education",
      description:
        "Focused coursework in Object-Oriented Programming, Data Structures & Algorithms, Database Management Systems, Software Engineering, and Modern Web Architectures.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "DBMS"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#060910]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            My professional journey, academic background, and continuous growth as a developer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800" />

          <div className="space-y-10">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative pl-12 sm:pl-20 group">
                
                {/* Timeline Icon Node */}
                <div className="absolute left-1.5 sm:left-5.5 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-400 flex items-center justify-center group-hover:scale-125 group-hover:border-emerald-400 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:bg-emerald-400 transition-colors" />
                </div>

                {/* Card */}
                <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all hover:shadow-xl">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium mt-0.5">
                        {item.type === "work" ? (
                          <Briefcase className="w-4 h-4 text-indigo-400 shrink-0" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                        )}
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1">
                      <span className="inline-flex items-center gap-1 font-mono px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
