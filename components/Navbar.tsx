"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/taste", label: "Taste" },
  { href: "/arcade", label: "Arcade" },
  { href: "/resume", label: "Resume" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1000px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm tracking-wide hover:text-accent"
          aria-label="Joel Mathew — Home"
        >
          jsm
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 w-6"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="block h-[1.5px] bg-foreground" />
            <span className="block h-[1.5px] bg-foreground" />
            <span className="block h-[1.5px] bg-foreground" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
