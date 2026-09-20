"use client";

import { motion } from "framer-motion";
import { experience, projects } from "@/lib/data";
import { SectionReveal, StaggerChild } from "@/components/SectionReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/Experience";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-14">
        <div className="max-w-[1000px] mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-16"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-24"
          >
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight mb-4">
              Work
            </h1>
            <p className="text-lg text-muted max-w-lg leading-[1.6]">
              Where I&apos;ve worked and what I&apos;ve built.
            </p>
          </motion.div>

          <SectionReveal className="mb-24">
            <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
              Experience
            </h2>
            <div className="divide-y divide-border">
              {experience.map((job, i) => (
                <ExperienceCard key={i} job={job} index={i} />
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
              {projects.map((project, i) => (
                <StaggerChild key={i} index={i}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-card hover:bg-accent-muted transition-colors duration-200 h-full"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted">
                          {project.date}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          aria-hidden="true"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-[1.6] mb-2">
                      {project.description}
                    </p>
                    {project.detail && (
                      <p className="text-xs text-muted/70 leading-[1.6]">
                        {project.detail}
                      </p>
                    )}
                  </a>
                </StaggerChild>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
      <Footer />
    </>
  );
}
