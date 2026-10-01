import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taste",
  description:
    "Some media I've enjoyed.",
};

export default function TasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
