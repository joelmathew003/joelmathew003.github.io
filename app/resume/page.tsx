"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ResumePage() {
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

          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
                Resume
              </h1>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-full hover:border-accent hover:text-accent"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download
              </a>
            </div>
          </div>

          <div>
            <div className="w-full rounded-lg border border-border overflow-hidden bg-card">
              <iframe
                src="/resume.pdf"
                className="w-full h-[85vh]"
                title="Resume"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
