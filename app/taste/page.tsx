"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { taste } from "@/lib/data";
import { SectionReveal } from "@/components/SectionReveal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = [
  { key: "films" as const, label: "Films" },
  { key: "anime" as const, label: "Anime" },
  { key: "books" as const, label: "Books" },
  { key: "music" as const, label: "Music" },
];

function ScrollRow({
  items,
}: {
  items: { title: string; note: string; image: string }[];
}) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="snap-start shrink-0 w-[200px] sm:w-[220px] group/card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-border bg-card">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-medium text-sm text-white">
                {item.title}
              </h3>
              <p className="text-xs text-white/70 mt-1 leading-[1.5] line-clamp-3">
                {item.note}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

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

          <div className="space-y-20">
            {categories.map((cat) => (
              <SectionReveal key={cat.key}>
                <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-6">
                  {cat.label}
                </h2>
                <ScrollRow items={taste[cat.key]} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
