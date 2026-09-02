export const profile = {
  name: "Vevan O Narain",
  initials: "VN",
  role: "CSE (AI/ML) — VIT Vellore",
  tagline: "I build systems that hold together under concurrency, ambiguity, and scale.",
  summary:
    "Third-year B.Tech CSE (AI/ML) student at VIT Vellore (9.44 GPA) with strong problem-solving skills and a solid foundation in data structures, algorithms, and computer science fundamentals. Experienced in building production-grade software systems, from CRDT-based collaborative editors to hybrid retrieval and machine learning applications.",
  email: "vevanonarain@gmail.com",
  phone: "+91-9811311028",
  links: {
    portfolio: "https://portfolio-vevan.vercel.app",
    github: "https://github.com/Vevan05",
    linkedin: "https://www.linkedin.com/in/vevan-o-narain/",
    leetcode: "https://leetcode.com/u/Vevan05/",
  },
  stats: [
    { value: "9.44", label: "CGPA" },
    { value: "200+", label: "LeetCode solved" },
    { value: "4", label: "systems shipped" },
  ],
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  href: string;
  status: string;
};

export const projects: Project[] = [
  {
    id: "vync",
    name: "Vync",
    tagline: "Real-time collaborative code editor",
    stack: ["React", "Node.js", "Socket.IO", "Yjs", "PostgreSQL", "Redis", "Docker"],
    bullets: [
      "Developed a Google Docs–style collaborative code editor using CRDTs (Yjs) to enable low-latency concurrent editing with conflict-free synchronization across distributed clients.",
      "Engineered conflict-free state reconciliation ensuring consistency across concurrent edits without merge conflicts.",
      "Sandboxed multi-language code execution in Docker containers with CPU and memory limits for secure, isolated execution.",
    ],
    href: "https://github.com/Vevan05/Vync",
    status: "shipped",
  },
  {
    id: "10kwery",
    name: "10Kwery",
    tagline: "SEC filing RAG system",
    stack: ["Python", "ChromaDB", "Sentence Transformers", "BM25", "Groq", "BS4"],
    bullets: [
      "Built an end-to-end Retrieval-Augmented Generation (RAG) system for querying SEC 10-K/10-Q filings, with citation-grounded answers and explicit refusal handling for out-of-corpus queries.",
      "Engineered a four-channel hybrid retrieval pipeline combining dense retrieval, BM25, table-specific retrieval, Reciprocal Rank Fusion (RRF), and windowed cross-encoder reranking with type-balanced final selection.",
      "Developed table-aware, section-aware document processing with token-overlap chunking and metadata filtering, achieving 0.900 MRR, 94% Hit@5, and 100% citation validity on an 18-question evaluation set.",
    ],
    href: "https://github.com/vevan05/10Kwery",
    status: "shipped",
  },
  {
    id: "leaf-disease",
    name: "Plant Leaf Disease Detection",
    tagline: "Transfer-learning classifier, 38 disease classes",
    stack: ["Python", "TensorFlow", "Keras", "ResNet50", "Streamlit", "Scikit-learn"],
    bullets: [
      "Fine-tuned ResNet50 using transfer learning on a dataset of over 50,000 plant leaf images, achieving 98.75% accuracy across 38 disease classes.",
      "Deployed a Streamlit application for real-time image upload and disease classification with prediction confidence scores.",
    ],
    href: "https://github.com/Vevan05/Plant-Leaf-Disease-Detection",
    status: "deployed",
  },
  {
    id: "emotion-detector",
    name: "Real-Time Emotion Detector",
    tagline: "Live facial emotion recognition",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "CNN", "NumPy"],
    bullets: [
      "Built a real-time facial emotion recognition system using OpenCV and a CNN trained on the FER-2013 dataset containing over 30,000 facial images.",
      "Classified seven facial emotions from live webcam input and applied image preprocessing and data augmentation to improve robustness across varying lighting and pose conditions.",
    ],
    href: "https://github.com/Vevan05/Real-Time-Emotion-Detector",
    status: "shipped",
  },
];

export const skillStrata = [
  {
    layer: "Languages",
    depth: "01",
    items: ["Python", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    layer: "Foundations",
    depth: "02",
    items: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "OOPs"],
  },
  {
    layer: "AI / ML",
    depth: "03",
    items: ["Scikit-learn", "TensorFlow", "PyTorch", "Sentence Transformers", "ChromaDB", "RAG"],
  },
  {
    layer: "Web",
    depth: "04",
    items: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Redis"],
  },
  {
    layer: "Tooling",
    depth: "05",
    items: ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Linux"],
  },
];

export const education = [
  {
    period: "2024 — 2028",
    title: "B.Tech, Computer Science & Engineering (AI & ML)",
    place: "Vellore Institute of Technology, Vellore",
    detail: "Cumulative GPA: 9.44 · Expected graduation: May 2028",
  },
  {
    period: "2024",
    title: "Senior Secondary (Class XII), CBSE",
    place: "Modern School, Barakhamba Road",
    detail: "90.2% · PCM with Computer Science",
  },
  {
    period: "2022",
    title: "Secondary (Class X), CBSE",
    place: "Modern School, Barakhamba Road",
    detail: "96%",
  },
];

export const certifications = [
  {
    name: "Machine Learning A-Z",
    issuer: "SuperDataScience Team",
    href: "https://ude.my/UC-d7a1b5fd-0619-40cc-a556-7da220ab4298",
  },
  {
    name: "The MERN Fullstack Guide",
    issuer: "Maximilian Schwarzmüller & Manuel Lorenz",
    href: "https://ude.my/UC-b522dcb0-50d8-40c2-bb6e-42658f63ff98",
  },
  {
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    href: "https://drive.google.com/file/d/1jb9tpDP7qSTyEOn-E3LWpmmfJYatAJ4R/view?usp=sharing",
    scoreReport: "https://drive.google.com/file/d/16R0Cjk6ztWGTGmfZ5FlmuzZ5MgbYGWcp/view?usp=sharing",
  },
];
