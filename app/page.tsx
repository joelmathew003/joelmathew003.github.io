import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <header className="max-w-[1000px] mx-auto px-6 pt-32 pb-16">
          <p className="text-sm text-accent tracking-[0.15em] uppercase mb-4">
            Software engineer · TUM Informatics
          </p>
          <h1 className="text-5xl sm:text-6xl font-display tracking-tight leading-[1.05]">
            <span className="font-bold">Joel</span> Mathew
          </h1>
          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm tracking-wide rounded-full hover:opacity-90"
            >
              Work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm tracking-wide rounded-full hover:border-muted"
            >
              Resume
            </Link>
          </div>
        </header>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
