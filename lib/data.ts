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
    location: "Bangalore, India",
    role: "Software Engineer",
    date: "July 2025 — September 2026",
    bullets: [
      "Built Grafana dashboards on Artifactory access logs to surface upload activity, caller IP, and invoking tool, giving the release team visibility into release-repository usage that hadn't existed before.",
      "Traced ~100K daily calls to Artifactory (at peak) made under a single shared token back to their originating call sites, then migrated each to per-identity authentication via Dex/OIDC token exchange, closing an unaudited access path.",
      "Implemented CMS-based cryptographic signing for EOS VM image releases, which previously shipped with no way to verify authenticity, and authored the customer-facing TOI for signature verification.",
      "Enabled SSH audit logging across release build servers, with events forwarded to CrowdStrike Falcon SIEM for centralized monitoring.",
      "Engineered a standardized release pipeline for Arista's WiFi product by integrating it with the EOS release framework and automating workflows across the release lifecycle.",
    ],
  },
  {
    company: "ColorTokens Inc.",
    location: "Bangalore, India",
    role: "Member of Technical Staff — II",
    date: "July 2023 — July 2025",
    bullets: [
      "Developed and integrated a dynamic rule engine for policy enforcement within XShield, a zero-trust management platform, reducing infrastructure overhead for key components by over 50% while improving scalability.",
      "Designed and implemented Layer 3 network policy enforcement within the container micro-segmentation framework using Istio and OPA, enabling fine-grained control over network traffic paths.",
      "Implemented an opt-in north-south traffic visibility feature, a platform-level switch enabling packet telemetry collection on the server agent, improving control over traffic monitoring and analytics.",
      "Sole technical point of contact for container micro-segmentation across customer POCs, resolving production issues end to end.",
    ],
  },
];

export const projects = [
  {
    name: "PlexShare",
    date: "Aug — Dec 2022",
    url: "https://github.com/ishwargov/PlexShare",
    description:
      "Lab session monitoring app in C# with screensharing, collaborative whiteboard, file uploads, and chat. Built key whiteboard features including session persistence, serialization, and inter-module networking.",
    detail:
      "Stress-tested with ~30 concurrent users screen-sharing and whiteboarding simultaneously in a live trial.",
  },
  {
    name: "Mail Tag Generator",
    date: "Jan — May 2023",
    url: "https://github.com/joelmathew003/Gmail-Mail-Tagging",
    description:
      "Personalized email tagging system combining LDA topic modeling with GloVe embeddings for candidate tag ranking.",
    detail:
      "Implemented as a Chrome extension in JavaScript, generating contextually relevant tags for Gmail messages in real time.",
  },
  {
    name: "Android Malware Detection using GNN",
    date: "Jan — May 2022",
    url: "https://github.com/joelmathew003/Android-Malware-Detection",
    description:
      "Android malware detection approach using Graph Neural Networks trained on API call graphs.",
    detail:
      "Applied explainability techniques including GNNExplainer and SubgraphX to identify influential subgraphs and investigate model predictions.",
  },
  {
    name: "Tiger Compiler",
    date: "Jan — May 2022",
    url: "https://github.com/joelmathew003/Tiger-Compiler",
    description:
      "Compiler for the Tiger programming language in Standard ML using ML-Lex and ML-Yacc, generating MIPS assembly code.",
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
