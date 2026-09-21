"use client";

import { SectionReveal } from "./SectionReveal";

export function About() {
  return (
    <SectionReveal id="about" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
          About
        </h2>

        <p className="text-lg text-muted leading-[1.7] max-w-2xl">
          Software engineer with experience building zero-trust security platforms,
          release infrastructure, and developer tooling. I like working on systems
          where reliability matters — authentication, policy enforcement, and
          build pipelines. Did my bachelors at IIT Palakkad, now heading to TUM
          for grad school.
        </p>
      </div>
    </SectionReveal>
  );
}
