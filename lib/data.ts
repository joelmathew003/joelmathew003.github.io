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
    { title: "Your film here", note: "Add a note about why you love it" },
    { title: "Your film here", note: "Add a note about why you love it" },
    { title: "Your film here", note: "Add a note about why you love it" },
  ],
  anime: [
    { title: "Your anime here", note: "Add a note about why you love it" },
    { title: "Your anime here", note: "Add a note about why you love it" },
    { title: "Your anime here", note: "Add a note about why you love it" },
  ],
  books: [
    { title: "Your book here", note: "Add a note about why you love it" },
    { title: "Your book here", note: "Add a note about why you love it" },
    { title: "Your book here", note: "Add a note about why you love it" },
  ],
  music: [
    { title: "Your music here", note: "Add a note about why you love it" },
    { title: "Your music here", note: "Add a note about why you love it" },
    { title: "Your music here", note: "Add a note about why you love it" },
  ],
};
