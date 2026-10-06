export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-sm text-accent tracking-[0.15em] uppercase mb-10">
          About
        </h2>

        <div className="flex flex-col sm:flex-row gap-10">
          <div className="text-lg text-muted leading-[1.7] max-w-2xl flex-1 space-y-6">
            <p>
              Hi, I&apos;m Joel. I&apos;m a M.Sc. student in Computer Science (Informatics) at{" "}
              <a
                href="https://www.tum.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                Technical University of Munich (TUM)
              </a>.
            </p>
            <p>
              Before that, I worked as a software engineer building stuff in security and infrastructure.
              I’m interested in the principles behind trustworthy systems, security and
              privacy, and in understanding how AI will change these areas. I like learning
              and building new things, and generally figuring out how things work.
              I did my Bachelor&apos;s in Computer Science at{" "}
              <a
                href="https://iitpkd.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
              >
                IIT Palakkad
              </a>.
            </p>
            <p>
              Outside work, I love travelling and riding my motorcycle. I also enjoy
              hitting the gym, football and badminton. On quieter days,
              I play piano, sketch, or watch anime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-10">
            <img
              src="/joel.jpg"
              alt="Joel Mathew"
              className="w-48 h-56 rounded-lg object-cover border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
