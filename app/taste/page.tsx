"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { taste } from "@/lib/data";
import { SectionReveal, StaggerChild } from "@/components/SectionReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  { key: "films" as const, label: "Films" },
  { key: "anime" as const, label: "Anime" },
  { key: "books" as const, label: "Books" },
  { key: "music" as const, label: "Music" },
];

export default function TastePage() {
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
            className="mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight mb-4">
              Taste
            </h1>
            <p className="text-lg text-muted max-w-lg leading-[1.6]">
              A curated collection of things that shaped how I think, see, and
              build. Not exhaustive — just the ones that stuck.
            </p>
          </motion.div>

          <div className="space-y-24">
            {categories.map((cat) => (
              <SectionReveal key={cat.key}>
                <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-8">
                  {cat.label}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
                  {taste[cat.key].map((item, i) => (
                    <StaggerChild key={i} index={i}>
                      <div className="group p-5 bg-card hover:bg-accent-muted transition-colors duration-200">
                        <h3 className="font-medium text-sm group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted mt-1.5 leading-[1.5]">
                          {item.note}
                        </p>
                      </div>
                    </StaggerChild>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
