import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Joel Mathew — Software Engineer",
    template: "%s | Joel Mathew",
  },
  description:
    "Software engineer building zero-trust platforms, release infrastructure, and developer tooling. MSc Informatics at TUM.",
  metadataBase: new URL("https://joelmathew.dev"),
  openGraph: {
    title: "Joel Mathew — Software Engineer",
    description:
      "Software engineer building zero-trust platforms, release infrastructure, and developer tooling.",
    url: "https://joelmathew.dev",
    siteName: "Joel Mathew",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Mathew — Software Engineer",
    description:
      "Software engineer building zero-trust platforms, release infrastructure, and developer tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${dmSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else if(!window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
