import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Joel Mathew — Software Engineer resume.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
