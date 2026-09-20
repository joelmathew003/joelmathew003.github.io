import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Professional experience and projects — Arista Networks, ColorTokens, and open-source work.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
