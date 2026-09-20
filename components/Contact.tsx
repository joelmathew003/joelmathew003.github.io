"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";

const socials = [
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    value: personal.email,
  },
  {
    label: "GitHub",
    href: personal.github,
    value: "joelmathew003",
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    value: "joel-mathew",
  },
];

export function Contact() {
  return (
    <SectionReveal id="contact" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-xs font-medium text-accent tracking-wider uppercase mb-6">
          Contact
        </h2>

        <p className="text-2xl sm:text-3xl font-semibold mb-3">
          Let&apos;s connect
        </p>
        <p className="text-muted mb-10 max-w-md mx-auto">
          Currently in {personal.location}. Open to conversations about
          systems, security, and interesting problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.label !== "Email" ? "_blank" : undefined}
              rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm hover:border-accent/40 hover:text-accent transition-all duration-200"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-muted group-hover:text-accent transition-colors">
                {s.label}
              </span>
              <span className="text-foreground group-hover:text-accent transition-colors">
                {s.value}
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
