"use client";

import { education } from "@/lib/data";
import { SectionReveal, StaggerChild } from "./SectionReveal";

export function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-xs font-medium text-accent tracking-wider uppercase mb-8">
          About
        </h2>

        <p className="text-lg text-muted leading-relaxed max-w-2xl mb-16">
          Software engineer with experience building zero-trust security platforms,
          release infrastructure, and developer tooling. I like working on systems
          where reliability matters — authentication, policy enforcement, and
          build pipelines. Currently moving to Munich for grad school at TUM.
        </p>

        <h3 className="text-xs font-medium text-muted tracking-wider uppercase mb-6">
          Education
        </h3>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <StaggerChild key={i} index={i}>
              <div className="group flex flex-col sm:flex-row sm:items-start justify-between gap-1 p-4 rounded-lg border border-transparent hover:border-border hover:bg-card transition-all duration-300">
                <div>
                  <h4 className="font-medium">{edu.school}</h4>
                  <p className="text-sm text-muted mt-0.5">
                    {edu.degree}
                    {edu.note && (
                      <span className="text-accent ml-2">· {edu.note}</span>
                    )}
                  </p>
                </div>
                <div className="text-sm text-muted shrink-0">
                  <p>{edu.date}</p>
                  <p className="text-xs">{edu.location}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
