"use client";

import { experience } from "@/lib/data";
import { SectionReveal, StaggerChild } from "./SectionReveal";

export function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  return (
    <StaggerChild index={index}>
      <div className="py-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4">
          <div>
            <h3 className="font-medium text-lg">{job.company}</h3>
            <p className="text-sm text-accent mt-0.5">{job.role}</p>
          </div>
          <p className="text-sm text-muted shrink-0">{job.date}</p>
        </div>
        <p className="text-[15px] text-muted leading-[1.7]">{job.summary}</p>
      </div>
    </StaggerChild>
  );
}

export function Experience() {
  return (
    <SectionReveal id="experience" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
          Experience
        </h2>

        <div className="divide-y divide-border">
          {experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
