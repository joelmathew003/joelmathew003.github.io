"use client";

import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
          About
        </h2>

        <div className="flex flex-col sm:flex-row gap-10">
          <p className="text-lg text-muted leading-[1.7] max-w-2xl flex-1">
            Software engineer with experience building zero-trust security platforms,
            release infrastructure, and developer tooling. I like working on systems
            where reliability matters — authentication, policy enforcement, and
            build pipelines. Did my bachelors at IIT Palakkad, now heading to TUM
            for grad school.
          </p>
          <div className="relative group shrink-0 sm:-mt-16">
            <img
              src="/joel.jpg"
              alt="Joel Mathew"
              className="w-48 h-56 rounded-lg object-cover border border-border"
            />
            <span className="absolute bottom-2 left-2 right-2 text-xs text-white/90 bg-black/60 backdrop-blur-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Me with my favourite mango beer
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
