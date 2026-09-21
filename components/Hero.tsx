"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { DotGrid } from "./DotGrid";
import { WaveName } from "./WaveName";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <DotGrid />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-32">
        <div className="space-y-5">
          <motion.p
            className="text-sm text-accent tracking-[0.15em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personal.tagline}
          </motion.p>

          <WaveName text={personal.name} />

          <motion.p
            className="text-lg sm:text-xl text-muted max-w-lg leading-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {personal.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
            >
              View my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm tracking-wide rounded-full hover:border-muted transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
