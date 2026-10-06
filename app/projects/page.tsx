"use client";

import Link from "next/link";
import { experience, projects } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/Experience";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-14">
        <div className="max-w-[1000px] mx-auto px-6 py-24">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-16"
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
          </div>

          <div className="mb-24">
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              Work
            </h1>
            <p className="text-lg text-muted max-w-lg leading-[1.6]">
              Where I&apos;ve worked and what I&apos;ve built
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
              Experience
            </h2>
            <div className="divide-y divide-border">
              {experience.map((job) => (
                <ExperienceCard key={job.company} job={job} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-border overflow-hidden bg-card h-full hover:border-accent/30"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="w-full aspect-video object-cover border-b border-border"
                  />
                  <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium group-hover:text-accent">
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
                            className="text-muted group-hover:text-accent"
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
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
