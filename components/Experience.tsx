"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionReveal, StaggerChild } from "./SectionReveal";

export function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <StaggerChild index={index}>
      <motion.div
        className="group relative p-5 rounded-xl border border-border hover:border-accent/30 bg-card transition-colors duration-300 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-semibold text-lg">{job.company}</h3>
            <p className="text-sm text-accent">{job.role}</p>
          </div>
          <div className="text-sm text-muted text-right shrink-0">
            <p>{job.date}</p>
            <p className="text-xs">{job.location}</p>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              className="space-y-2 mt-4 text-sm text-muted"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {job.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  className="flex gap-3 leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-accent mt-1.5 shrink-0">—</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-1 mt-3 text-xs text-muted">
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
          <span>{expanded ? "Collapse" : "Expand details"}</span>
        </div>
      </motion.div>
    </StaggerChild>
  );
}

export function Experience() {
  return (
    <SectionReveal id="experience" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-xs font-medium text-accent tracking-wider uppercase mb-8">
          Experience
        </h2>

        <div className="space-y-4">
          {experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
