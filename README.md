# Joel Sam Mathew — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio2

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customizing Content

All content lives in `lib/data.ts`. Edit the exported constants to update:

- **personal** — name, tagline, contact info, social links
- **education** — schools, degrees, dates
- **experience** — work history with bullet points
- **projects** — project cards with GitHub links
- **skills** — technical skills grouped by category
- **achievements** — notable achievements
- **taste** — favorite films, anime, books, music (fill in the placeholders)

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
