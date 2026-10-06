"use client";

import Link from "next/link";
import { taste } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type TasteCategory = {
  key: keyof typeof taste;
  label: string;
  href?: string;
  linkLabel?: string;
};

const categories: TasteCategory[] = [
  { key: "films", label: "Films" },
  {
    key: "anime",
    label: "Anime",
    href: "https://myanimelist.net/profile/LostLegion",
    linkLabel: "MyAnimeList",
  },
  {
    key: "books",
    label: "Books",
    href: "https://www.goodreads.com/user/show/202117053-joel-mathew",
    linkLabel: "Goodreads",
  },
  { key: "music", label: "Music" },
];

function ScrollRow({
  items,
}: {
  items: { title: string; image: string }[];
}) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="snap-start shrink-0 w-[200px] sm:w-[220px] group/card"
        >
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-border bg-card">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-medium text-sm text-white">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
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

          <div className="mb-20">
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              Taste
            </h1>
            <p className="text-lg text-muted max-w-lg leading-[1.6]">
              Some media I&apos;ve enjoyed over the years
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((cat) => (
              <section key={cat.key}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-sm text-accent tracking-[0.15em] uppercase">
                    {cat.label}
                  </h2>
                  {cat.href && (
                    <a
                      href={cat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent"
                    >
                      {cat.linkLabel}
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>
                <ScrollRow items={taste[cat.key]} />
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
