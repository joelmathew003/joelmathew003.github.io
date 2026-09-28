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
          <div className="text-lg text-muted leading-[1.7] max-w-2xl flex-1 space-y-6">
            <p>
              I&apos;m a software engineer who has worked on security products and
              infrastructure. I&apos;m interested in what makes systems trustworthy:
              security and privacy guarantees that are enforceable in the
              architecture, verifiable in practice, and not dependent on blind trust
              in the organization operating them.
            </p>
            <p>
              Outside work, I love travelling and riding my motorcycle. I also enjoy 
              hitting the gym, football and badminton. On quieter days, 
              I play piano, sketch, or watch anime.
            </p>
          </div>
          <div className="shrink-0 sm:-mt-16">
            <img
              src="/joel.jpg"
              alt="Joel Mathew"
              className="w-48 h-56 rounded-lg object-cover border border-border"
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
