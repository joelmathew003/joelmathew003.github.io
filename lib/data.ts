export const personal = {
  name: "Joel Mathew",
  tagline: "Software Engineer",
  subtitle: "Building reliable systems, one commit at a time.",
  location: "Munich, Germany",
  email: "joelsammathew@gmail.com",
  phone: "+49 15510942045",
  github: "https://github.com/joelmathew003",
  linkedin: "https://www.linkedin.com/in/joel-mathew-3122751a6/",
};

export const education = [
  {
    school: "Technical University of Munich (TUM)",
    location: "Munich, Germany",
    degree: "M.Sc. Informatics",
    date: "October 2026",
    note: "Incoming",
  },
  {
    school: "Indian Institute of Technology (IIT) Palakkad",
    location: "Palakkad, India",
    degree: "B.Tech. Computer Science and Engineering",
    date: "August 2019 — May 2023",
    note: "CGPA: 9.02/10",
  },
];

export const experience = [
  {
    company: "Arista Networks",
    role: "Software Engineer",
    date: "Jul 2025 — Sep 2026",
    summary:
      "Worked in the Secure Releases team — everything we built was about making sure what ships to customers is authentic and untampered. I got deep into cryptographic signing, provenance, and supply chain integrity, which turned out to be genuinely fascinating. Built tooling around CMS-based image signing, migrated a flood of shared-token API calls to proper per-identity auth via OIDC, and set up audit logging pipelines that feed into CrowdStrike. The kind of work where you're one bad merge away from a very bad day.",
  },
  {
    company: "ColorTokens Inc.",
    role: "Member of Technical Staff — II",
    date: "Jul 2023 — Jul 2025",
    summary:
      "My first real job, and it threw me straight into cybersecurity. ColorTokens builds a zero-trust platform called XShield, and I spent two years working on its policy engine and container micro-segmentation. Seeing actual breach simulations, understanding lateral movement, and writing iptables rules to block it — that was the stuff that made me want to stay in this space. I ended up being the sole technical point of contact for container security across customer POCs, which was equal parts terrifying and formative.",
  },
];

export const projects = [
  {
    name: "PlexShare",
    date: "Aug — Dec 2022",
    url: "https://github.com/ishwargov/PlexShare",
    description:
      "Lab session monitoring app with screensharing, collaborative whiteboard, file uploads, and chat. Built the core whiteboard features — session persistence, serialization, and the networking layer between modules.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
  },
  {
    name: "Mail Tag Generator",
    date: "Jan — May 2023",
    url: "https://github.com/joelmathew003/Gmail-Mail-Tagging",
    description:
      "Chrome extension that generates contextual tags for Gmail messages in real time, using LDA topic modeling combined with GloVe embeddings for candidate ranking.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  },
  {
    name: "Android Malware Detection",
    date: "Jan — May 2022",
    url: "https://github.com/joelmathew003/Android-Malware-Detection",
    description:
      "Malware detection using Graph Neural Networks trained on API call graphs. Used GNNExplainer and SubgraphX to identify which subgraphs actually drive predictions.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  },
  {
    name: "Tiger Compiler",
    date: "Jan — May 2022",
    url: "https://github.com/joelmathew003/Tiger-Compiler",
    description:
      "End-to-end compiler for the Tiger language in Standard ML — lexer, parser, type checker, IR generation, and MIPS assembly output.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=600&q=80",
  },
];

export const skills = {
  Languages: ["Go", "Python", "C++", "C#"],
  "Infrastructure & Tools": [
    "Kubernetes",
    "Docker",
    "Linux",
    "Ansible",
    "Grafana",
    "Artifactory",
    "CI/CD",
    "Azure Pipelines",
  ],
  "AI/ML": ["TensorFlow", "PyTorch"],
};

export const achievements = [
  "ColorKudos Award — Individual, for contributions to the Port-Level Zero Trust Enforcement project (ColorTokens, 2024)",
  "ColorKudos Award — Team, for backend contributions to XShield's policy engine (ColorTokens, 2024)",
  "Scored 99.67 percentile in JEE Main (1.2M candidates) and 98.11 percentile in JEE Advanced (2019)",
  "Qualified at the state level for Kerala's Young Innovators Program for an autonomous pesticide-spraying robot (2019)",
];

export const taste = {
  films: [
    { title: "Before Sunset", note: "A whole film that's just two people walking and talking — and it says more than most trilogies", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80" },
    { title: "Parasite", note: "The tonal shifts are insane. Comedy, thriller, tragedy, all in one house", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { title: "City of God", note: "Raw, kinetic storytelling. Every frame feels alive", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80" },
    { title: "Portrait of a Lady on Fire", note: "Quietly devastating. The kind of film that stays with you for days", image: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&q=80" },
    { title: "Dune", note: "Villeneuve made sci-fi feel ancient and massive in a way nobody else has", image: "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=400&q=80" },
    { title: "Perfect Blue", note: "Satoshi Kon blurring reality until you can't tell what's real either", image: "https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&q=80" },
  ],
  anime: [
    { title: "Attack on Titan", note: "Started as action, ended as one of the best political thrillers I've seen in any medium", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80" },
    { title: "Cowboy Bebop", note: "Style, music, loneliness — nothing else sounds or feels like this", image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=80" },
    { title: "Steins;Gate", note: "Slow burn that completely rewires your brain once it clicks", image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?w=400&q=80" },
    { title: "Death Note", note: "The cat-and-mouse between Light and L is peak writing", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&q=80" },
    { title: "Naruto", note: "The show that started it all. Pain arc still hits different", image: "https://images.unsplash.com/photo-1533050487297-09b450131914?w=400&q=80" },
    { title: "Made in Abyss", note: "Beautiful and horrifying in equal measure. Deceptively dark", image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=400&q=80" },
  ],
  books: [
    { title: "And Then There Were None", note: "The tightest mystery ever written. Christie traps you on an island with no exit and no answers until the very last page", image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80" },
    { title: "The God of Small Things", note: "Arundhati Roy writes like she's translating emotion directly into language. Dense, heartbreaking, and impossibly beautiful", image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=80" },
    { title: "Think Again", note: "Adam Grant made me realize how rarely I actually revisit my own assumptions. Changed how I approach being wrong", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" },
    { title: "Crime and Punishment", note: "Dostoevsky gets inside guilt better than anyone. Raskolnikov's unraveling is uncomfortable in the best way", image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80" },
    { title: "The Girl with the Dragon Tattoo", note: "Lisbeth Salander is one of the most compelling characters in crime fiction. Methodical, cold, and completely riveting", image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&q=80" },
  ],
  music: [
    { title: "In Rainbows", note: "Radiohead at their most human. Warm and disorienting at the same time — like grief that's somehow made peace with itself", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    { title: "Kissland", note: "The Weeknd before the stadium era. Isolated, nocturnal, genuinely unsettling in the best way", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" },
    { title: "Blonde", note: "Frank Ocean made an album that sounds like memory. Non-linear, impressionistic, and somehow exactly right every time", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" },
    { title: "Utopia", note: "Travis's most ambitious swing. The production is genuinely alien — half of it still doesn't make sense and that's why it works", image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80" },
    { title: "Oncle Jazz", note: "Men I Trust make music that sounds like it's coming from another room. Dreamy, unhurried, completely its own thing", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  ],
};
