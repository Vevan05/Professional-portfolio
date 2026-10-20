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
    portfolio: "https://vevan-portfolio.vercel.app",
    github: "https://github.com/Vevan05",
    linkedin: "https://www.linkedin.com/in/vevan-o-narain/",
    leetcode: "https://leetcode.com/u/Vevan05/",
  },
  resume: "/Vevan_O_Narain_Resume.pdf",
  stats: [
    { value: "9.44", label: "CGPA" },
    { value: "250+", label: "LeetCode solved" },
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
  demo?: string;
  status: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "hybrid-search-engine",
    name: "Hybrid Search Engine with A/B Testing",
    tagline: "HNSW, BM25, RRF, and int8 quantization",
    stack: ["Python", "NumPy", "FastAPI", "React", "TypeScript", "ONNX"],
    bullets: [
      "Built hybrid search from scratch (HNSW, BM25, RRF, int8 quantization) without a vector DB: 1.00 Recall@10 on 16,770 chunks.",
      "Fixed two silent bugs: int8 used 3 of 256 levels (cosine 0.71 → 0.9999) and an HNSW link cap reached 41 of 5,000 nodes.",
      "A/B testing with SHA-256 bucketing, z-tests, Welch's t-tests, and SRM detection; 4.3% A/A false-positive rate.",
      "FastAPI backend with SSE streaming, offline evaluation (recall, MRR, nDCG), React dashboard, and 36 pytest tests.",
    ],
    href: "https://github.com/Vevan05/Cairn",
    demo: "https://cairn-ivory.vercel.app/",
    status: "deployed",
  },
  {
    id: "vync",
    name: "Vync",
    tagline: "Real-time collaborative code editor",
    stack: ["React", "Node.js", "Socket.IO", "Yjs", "PostgreSQL", "Redis", "Docker"],
    bullets: [
      "Google Docs–style collaborative code editor using CRDTs (Yjs) for low-latency, conflict-free concurrent editing.",
      "Verified convergence with a fuzz harness: 10,000 concurrent edits across 20 clients, with zero divergence.",
      "Sandboxed 5 languages in Docker (128 MB memory, 0.5 CPU, network disabled), with containment tested against fork and memory bombs.",
      "Measured p50 execution latency of 0.5–0.9 s (interpreted) and 1.4–4.9 s (compiled).",
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
      "End-to-end RAG system over SEC 10-K/10-Q filings with citation-grounded answers and refusal for out-of-corpus queries.",
      "Four-channel hybrid retrieval (dense, BM25, table-specific) fused with RRF and cross-encoder reranking.",
      "Table- and section-aware chunking: 0.933 MRR, 93% Hit@5, and 100% citation validity on a 60-question eval set.",
    ],
    href: "https://github.com/vevan05/10Kwery",
    status: "shipped",
  },
  {
    id: "harvest-hub",
    name: "Harvest Hub — Smart Crop Yield Prediction Platform",
    tagline: "Full-stack crop yield prediction platform",
    stack: ["Python", "Flask", "Scikit-learn", "React", "Vite", "JavaScript", "WeatherAPI", "Google Gemini API"],
    bullets: [
      "Full-stack crop yield platform with an ML model that predicts yields from crop, season, soil, and nutrient inputs.",
      "Geolocation and WeatherAPI supply location-specific temperature and rainfall for context-aware predictions.",
      "Google Gemini API generates localized, multilingual farming advice from crop and soil conditions.",
      "React dashboard on a Flask REST API connects inputs, model inference, weather, and AI recommendations.",
    ],
    href: "https://github.com/Vevan05/harvest-hub",
    status: "shipped",
  },
  {
    id: "leaf-disease",
    name: "Plant Leaf Disease Detection",
    tagline: "Transfer-learning classifier, 38 disease classes",
    stack: ["Python", "TensorFlow", "Keras", "ResNet50", "Streamlit", "Scikit-learn"],
    bullets: [
      "Fine-tuned ResNet50 via transfer learning on 50,000+ plant leaf images, reaching 98.75% accuracy across 38 disease classes.",
      "Deployed a Streamlit app for real-time image upload with disease predictions and confidence scores.",
    ],
    href: "https://github.com/Vevan05/Plant-Leaf-Disease-Detection",
    status: "shipped",
  },
  {
    id: "emotion-detector",
    name: "Real-Time Emotion Detector",
    tagline: "Live facial emotion recognition",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "CNN", "NumPy"],
    bullets: [
      "Real-time facial emotion recognition with OpenCV and a CNN trained on FER-2013 (30,000+ images).",
      "Classifies seven emotions from live webcam input, with preprocessing and augmentation for varied lighting and pose.",
    ],
    href: "https://github.com/Vevan05/Real-Time-Emotion-Detector",
    status: "shipped",
  },
  {
    id: "machine-learning-repo",
    name: "Machine Learning Repository",
    tagline: "Hands-on ML learning repository from Udemy course",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "NLTK", "Matplotlib"],
    bullets: [
      "Hands-on repo covering 40+ ML topics from the Udemy 'Machine Learning A-Z' course, from regression to deep learning.",
      "Per-topic Python scripts and Jupyter notebooks with datasets, spanning clustering, association rules, RL, NLP, and RNNs.",
      "Includes dimensionality reduction (PCA, LDA, Kernel PCA) and gradient boosting (XGBoost, CatBoost, LightGBM).",
      "Each topic folder contains .ipynb notebooks and a data.csv for hands-on practice.",
    ],
    href: "https://github.com/Vevan05/Machine-Learning",
    status: "tutorial",
    featured: true,
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
