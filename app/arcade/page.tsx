"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GameOfLife } from "@/components/arcade/GameOfLife";
import { EcosystemSim } from "@/components/arcade/EcosystemSim";
import { DotPursuit } from "@/components/arcade/DotPursuit";
import { MemoryAllocator } from "@/components/arcade/MemoryAllocator";
import { LangtonsAnt } from "@/components/arcade/LangtonsAnt";

export default function ArcadePage() {
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

          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              Arcade
            </h1>
            <p className="text-lg text-muted max-w-lg leading-[1.6]">
              No purpose, just for fun
            </p>
          </div>

          <div className="space-y-12">
            <GameOfLife />
            <EcosystemSim />
            <DotPursuit />
            <LangtonsAnt />
            <MemoryAllocator />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
