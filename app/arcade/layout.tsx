import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade",
  description: "Interactive simulations — ecosystem, pathfinding, and memory allocation.",
};

export default function ArcadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
