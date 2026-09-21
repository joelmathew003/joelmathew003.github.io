"use client";

import Link from "next/link";
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
            <Link
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
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-24"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, i) => (
                <StaggerChild key={i} index={i}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-6 rounded-lg border border-border overflow-hidden bg-card h-full transition-colors duration-300 hover:border-accent/30"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500"
                      style={{ backgroundImage: `url(${project.image})` }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
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
                      <p className="text-sm text-muted leading-[1.6]">
                        {project.description}
                      </p>
                    </div>
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
