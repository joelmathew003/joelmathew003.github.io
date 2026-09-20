import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taste",
  description:
    "A curated collection of films, anime, books, and music that shaped how I think.",
};

export default function TasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
