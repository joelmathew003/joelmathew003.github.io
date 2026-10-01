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
      "Worked on the Secure Releases team, focused on making sure what ships to customers is authentic and hasn’t been tampered with. Got deep into cryptographic signing, provenance, auth, supply chain integrity, etc. which turned out to be fascinating. Built tooling around CMS-based image signing, migrated a flood of shared-token API calls to proper per-identity auth via OIDC, and set up audit logging pipelines that feed into CrowdStrike.",
  },
  {
    company: "ColorTokens Inc.",
    role: "Member of Technical Staff — II",
    date: "Jul 2023 — Jul 2025",
    summary:
      "Worked on a zero-trust platform called XShield, where I got to work with traffic visualization and breach simulations, understand lateral movement, and build the policy engine that generated the iptables rules to stop it. I also worked on an agent that enforced policies on container workloads using Istio and OPA, eventually becoming the sole technical point of contact for container security across customer POCs.",
  },
];

export const projects = [
  {
    name: "PlexShare",
    date: "Aug — Dec 2022",
    url: "https://github.com/ishwargov/PlexShare",
    description:
      "Lab session monitoring app with screensharing, collaborative whiteboard, file uploads, and chat. Built the core whiteboard features — session persistence, serialization, and the networking layer between modules.",
    image: "/projects/plexshare.png",
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
    image: "/projects/tiger-compiler.jpg",
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
    { title: "Before Sunrise", image: "https://upload.wikimedia.org/wikipedia/en/d/da/Before_Sunrise_poster.jpg" },
    { title: "Before Sunset", image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Before_Sunset_poster.jpg" },
    { title: "Parasite", image: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png" },
    { title: "City of God", image: "https://upload.wikimedia.org/wikipedia/en/1/10/CidadedeDeus.jpg" },
    { title: "Portrait of a Lady on Fire", image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Portrait_of_a_Lady_on_Fire.jpg" },
    { title: "Dune", image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg" },
    { title: "Perfect Blue", image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Perfectblueposter.png" },
    { title: "Maheshinte Prathikaaram", image: "https://upload.wikimedia.org/wikipedia/en/3/33/Maheshinte_Prathikaaram.jpg" },
    { title: "Premam", image: "https://upload.wikimedia.org/wikipedia/en/3/32/Premam_film_poster.jpg" },
  ],
  anime: [
    { title: "Neon Genesis Evangelion", image: "https://upload.wikimedia.org/wikipedia/en/7/72/Evangelion_retouched.png" },
    { title: "Attack on Titan", image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg" },
    { title: "Cowboy Bebop", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/Cowboy_Bebop_key_visual.jpg" },
    { title: "Steins;Gate", image: "https://upload.wikimedia.org/wikipedia/en/e/e4/Steins%3BGate_cover_art.jpg" },
    { title: "Death Note", image: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg" },
    { title: "Naruto", image: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg" },
    { title: "Made in Abyss", image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Made_in_Abyss_volume_1_cover.jpg" },
    { title: "Code Geass", image: "https://upload.wikimedia.org/wikipedia/en/7/74/Code_Geass_R1_box_set_cover.jpg" },
    { title: "Psycho-Pass", image: "https://upload.wikimedia.org/wikipedia/en/8/88/Psycho-Pass_key_visual.png" },
    { title: "Samurai Champloo", image: "https://upload.wikimedia.org/wikipedia/en/4/48/Samurai_Champloo_key_art.jpg" },
  ],
  books: [
    { title: "The Stand", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/The_Stand_%281978%29_front_cover%2C_first_edition.png" },
    { title: "And Then There Were None", image: "https://upload.wikimedia.org/wikipedia/en/2/26/And_Then_There_Were_None_US_First_Edition_Cover_1940.jpg" },
    { title: "The God of Small Things", image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Thegodofsmallthings.jpg" },
    { title: "Think Again", image: "https://is1-ssl.mzstatic.com/image/thumb/Publication126/v4/77/2b/28/772b28ee-2bff-dddf-312b-e6ee7fa271e8/9781984878113.d.jpg/600x600bb.jpg" },
    { title: "Crime and Punishment", image: "https://upload.wikimedia.org/wikipedia/en/4/4b/Crimeandpunishmentcover.png" },
    { title: "The Girl with the Dragon Tattoo", image: "https://is1-ssl.mzstatic.com/image/thumb/Publication122/v4/8b/e4/c9/8be4c93d-7638-0d1e-0fe2-e67eccfe8740/9780307272119.jpg/600x600bb.jpg" },
    { title: "Harry Potter and the Order of the Phoenix", image: "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg" },
    { title: "The Stranger", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/L%27%C3%89tranger_-_Albert_Camus.jpg" },
    { title: "The Witches", image: "https://upload.wikimedia.org/wikipedia/en/4/41/TheWitches.jpg" },
  ],
  music: [
    { title: "Submarine", image: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/0b/4d/b6/0b4db6bd-2d40-55a5-1714-67f5c816294d/075679659644.jpg/600x600bb.jpg" },
    { title: "In Rainbows", image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/dd/50/c7/dd50c790-99ac-d3d0-5ab8-e3891fb8fd52/634904032463.png/600x600bb.jpg" },
    { title: "Kissland", image: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Weeknd_-_Kiss_Land.png" },
    { title: "Blonde", image: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/f9/fe/68f9fec8-81b6-38b1-7e27-796c431436fa/814908025306.jpg/600x600bb.jpg" },
    { title: "Utopia", image: "https://upload.wikimedia.org/wikipedia/en/2/23/Travis_Scott_-_Utopia.png" },
    { title: "Oncle Jazz", image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/50/c6/94/50c694d6-36cd-8808-5da3-d677b7726b6c/artwork.jpg/600x600bb.jpg" },
    { title: "Cowboy Bebop Soundtrack — Yoko Kanno", image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5a/bb/df/5abbdf28-bf0e-0530-e5f8-0f0ca3150e0a/195081633657.jpg/600x600bb.jpg" },
  ],
};
