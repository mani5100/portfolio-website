import {
  PersonalInfo,
  WorkExperience,
  Education,
  Skill,
  Project,
  Certification,
  Achievement,
} from "@/types";

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: "Abdul Rehman",
  title: "AI Engineer & Published Researcher",
  bio: "Most AI research never leaves the paper. Mine does. I build AI systems that ship — from multi-agent pipelines that write code, to edge-deployed surveillance that detects threats in real time.",
  email: "m.abdulrehman.shoukat@gmail.com",
  phone: "+92-306-1439430",
  location: "Sargodha, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/abdulrehmanshoukat",
  github: "https://github.com/mani5100",
  profileImage: "/profile.png",
  cvUrl: "/Abdul Rehman CV.pdf",
};

// ─── Work Experience ──────────────────────────────────────────────────────────
export const experiences: WorkExperience[] = [
  {
    id: "1",
    company: "Digitalytics",
    role: "AI Engineer",
    startDate: "Feb 2026",
    endDate: "Present",
    location: "Remote, Pakistan",
    description: [
      "Building Digitalytics-voice — a production voice AI system handling real-time speech interactions.",
      "Developing Digitalytics-platform — a SaaS platform with billing dashboard and full deployment pipeline.",
      "Working in TypeScript on the deployment branch with near-daily production commits.",
    ],
    technologies: ["TypeScript", "OpenAI API", "Node.js", "SaaS", "Voice AI"],
  },
  {
    id: "2",
    company: "VLCMatrix Lab, University of Lahore",
    role: "AI Researcher",
    startDate: "Jul 2023",
    endDate: "Present",
    location: "Sargodha, Pakistan",
    description: [
      "Developed deep learning models for medical image analysis, deepfake detection, and intelligent surveillance.",
      "Designed and optimized CNN, transformer, and hybrid architectures using TensorFlow and Keras.",
      "Managed full ML workflows: data preprocessing, model training, hyperparameter tuning, and evaluation.",
      "Authored and co-authored 6 peer-reviewed papers published across IEEE (×4), Springer, and Wiley.",
    ],
    technologies: [
      "TensorFlow",
      "Keras",
      "Python",
      "YOLO",
      "Computer Vision",
      "Deep Learning",
    ],
  },
  {
    id: "3",
    company: "Abbasia Library — Govt. Higher Secondary School",
    role: "Software Developer",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    location: "Bahawalpur, Pakistan (Remote)",
    description: [
      "Built a complete library management system for a public-sector client from scratch.",
      "Implemented modules for fine tracking, lost/overdue book tracking, issue card generation, and user management.",
      "Gathered requirements remotely with non-technical staff and applied iterative feedback cycles.",
    ],
    technologies: ["Laravel", "PHP", "Tailwind CSS", "SQL"],
  },
  {
    id: "4",
    company: "TechnDevs Inc.",
    role: "Web Developer",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Sargodha, Pakistan",
    description: [
      "Worked on real-world client projects in a professional team environment.",
      "Led backend development: routing, controller logic, and database management across active client projects.",
      "Collaborated with the development team using Git-based workflows.",
    ],
    technologies: ["Laravel", "WordPress", "SQL", "PHP"],
  },
  {
    id: "5",
    company: "Private Project",
    role: "Web Developer",
    startDate: "Feb 2025",
    endDate: "Mar 2025",
    location: "Sargodha, Pakistan (Remote)",
    description: [
      "Built a niche WordPress blog from scratch with responsive UI and SEO best practices.",
      "Achieved full Google indexing in 3 days using Google Search Console optimization.",
      "Delivered 95+ PageSpeed score on both mobile and desktop.",
    ],
    technologies: ["WordPress", "SEO", "Google Search Console", "HTML/CSS"],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    id: "1",
    institution: "University of Lahore, Sargodha Campus",
    degree: "Bachelor of Science",
    field: "Computer Science (BSCS)",
    startDate: "Mar 2022",
    endDate: "Feb 2026",
    location: "Sargodha, Pakistan",
    grade: "3.90 / 4.00 — 2nd in graduating batch",
    description:
      "Achieved 2nd-in-class ranking while simultaneously authoring 6 peer-reviewed publications across IEEE, Springer, and Wiley as an undergraduate.",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills: Skill[] = [
  {
    category: "AI & Agentic AI",
    items: [
      { name: "LangChain / LangGraph", level: "Advanced" },
      { name: "OpenAI Agents SDK", level: "Advanced" },
      { name: "RAG Systems", level: "Advanced" },
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "LangSmith", level: "Intermediate" },
      { name: "Pinecone / FAISS / Chroma", level: "Intermediate" },
    ],
  },
  {
    category: "ML & Deep Learning",
    items: [
      { name: "TensorFlow / Keras", level: "Advanced" },
      { name: "scikit-learn", level: "Advanced" },
      { name: "YOLO (Ultralytics)", level: "Advanced" },
      { name: "Computer Vision", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
      { name: "Transformer Models", level: "Intermediate" },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "SQL", level: "Intermediate" },
      { name: "C++", level: "Beginner" },
    ],
  },
  {
    category: "Web & Backend",
    items: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
      { name: "Streamlit", level: "Advanced" },
      { name: "Laravel", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
    ],
  },
  {
    category: "Data & APIs",
    items: [
      { name: "NumPy / Pandas", level: "Advanced" },
      { name: "OpenAI API (GPT-4o)", level: "Advanced" },
      { name: "Google Gemini API", level: "Intermediate" },
      { name: "HuggingFace", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Firebase / Firestore", level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Raspberry Pi 4", level: "Advanced" },
      { name: "VS Code", level: "Expert" },
      { name: "Kaggle / HuggingFace Hub", level: "Intermediate" },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: "1",
    title: "YOLO11 Intelligent Surveillance System",
    description:
      "Edge-deployed real-time AI surveillance system that detects dangerous objects and delivers spoken alerts with a live web dashboard.",
    longDescription:
      "Real-time AI surveillance deployed on Raspberry Pi 4 that detects fire, knives, guns, cigarettes, and vapes. Uses temporal verification to prevent false alarm spam, GPT-4o Vision as a second-layer false positive reducer, and Piper TTS for voice alerts. Ships a live web dashboard with real-time charts, event history, and start/stop controls via SSE.",
    technologies: [
      "Python",
      "YOLO11",
      "OpenAI GPT-4o",
      "Flask",
      "Chart.js",
      "Piper TTS",
      "Raspberry Pi 4",
    ],
    githubUrl: "https://github.com/mani5100/AI-Powered-Surveillance",
    featured: true,
    category: "AI / Edge Computing",
  },
  {
    id: "2",
    title: "LangGraph AppBuilder",
    description:
      "Multi-agent LangGraph system where Planner, Architect, and Coder agents collaborate to generate full working applications from a single prompt.",
    longDescription:
      "A multi-agent pipeline built on LangGraph where a Planner, Architect, and Coder agent collaborate autonomously. Given a user prompt, the system designs, architects, and writes a complete working project to disk — all with full tracing via LangSmith. Uses a shared StateGraph with custom sandboxed tools (write_file, read_file, run_cmd).",
    technologies: [
      "Python",
      "LangGraph",
      "LangSmith",
      "OpenAI",
      "StateGraph",
      "Agentic AI",
    ],
    githubUrl: "https://github.com/mani5100/LangGraph-AppBuilder",
    featured: true,
    category: "Agentic AI",
  },
  {
    id: "3",
    title: "claude-skills",
    description:
      "Claude Code skills automating PhD application workflows: professor discovery, personalized cold emails, and LinkedIn post creation.",
    longDescription:
      "A set of three Claude Code skills (/professor-finder, /professor-email, /linkedin-post-creator) that automate the full PhD application outreach pipeline. The professor finder crawls university websites to extract profiles, emails, research interests, and h-index. The email skill drafts 200–250 word personalized first-contact emails. Garnered community traction with 2 GitHub stars and 2 forks.",
    technologies: [
      "Python",
      "Shell",
      "Claude Code CLI",
      "Web Scraping",
      "Prompt Engineering",
    ],
    githubUrl: "https://github.com/mani5100/claude-skills",
    featured: true,
    category: "Automation / AI Tools",
  },
  {
    id: "4",
    title: "RAG-Based Document Q&A System",
    description:
      "Intelligent Q&A over uploaded PDF documents using LangChain and Pinecone vector database.",
    technologies: [
      "LangChain",
      "Pinecone",
      "OpenAI Embeddings",
      "Python",
      "RAG",
    ],
    featured: false,
    category: "AI / NLP",
  },
  {
    id: "5",
    title: "Quora Duplicate Question Detector",
    description:
      "FastAPI + Streamlit ML app that detects whether two questions are semantically equivalent using TF-IDF and feature engineering.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "scikit-learn",
      "TF-IDF",
      "NLP",
    ],
    githubUrl: "https://github.com/mani5100/Quora-Duplicate-Detector",
    featured: false,
    category: "Machine Learning",
  },
  {
    id: "6",
    title: "SMS Spam Classifier",
    description:
      "NLP text classifier using ensemble ML (Naive Bayes, Random Forest, SVM) to distinguish spam from legitimate SMS messages.",
    technologies: [
      "Python",
      "scikit-learn",
      "NLTK",
      "Streamlit",
      "Ensemble ML",
    ],
    githubUrl: "https://github.com/mani5100/SMS-Spam-Classification",
    featured: false,
    category: "Machine Learning",
  },
  {
    id: "7",
    title: "Movie Recommender System",
    description:
      "Content-based movie recommender using TMDB metadata, cosine similarity, and live poster fetching via the TMDB API.",
    technologies: [
      "Python",
      "scikit-learn",
      "NLTK",
      "Streamlit",
      "TMDB API",
      "Cosine Similarity",
    ],
    githubUrl: "https://github.com/mani5100/Movie-Recommender-System",
    featured: false,
    category: "Machine Learning",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: "1",
    name: "Generative AI Applications Specialist",
    issuer: "IBM",
    date: "Jul 2025",
  },
  {
    id: "2",
    name: "Fundamentals of AI Agents Using RAG and LangChain",
    issuer: "IBM",
    date: "Jun 2025",
  },
  {
    id: "3",
    name: "Project: Generative AI Applications with RAG and LangChain",
    issuer: "IBM",
    date: "Jun 2025",
  },
  {
    id: "4",
    name: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "Jun 2025",
  },
  {
    id: "5",
    name: "Level 2 Fundamentals of Agentic AI Professional Certification",
    issuer: "PIAIC",
    date: "Dec 2025",
  },
  {
    id: "6",
    name: "Agent Factory Fundamentals: Building Digital Full-Time Equivalents (FTEs)",
    issuer: "PIAIC",
    date: "Dec 2026",
  },
  {
    id: "7",
    name: "Fundamentals of Agentic AI Level 1",
    issuer: "PIAIC",
    date: "Nov 2025",
  },
  {
    id: "8",
    name: "Fundamentals of Modern AI Python Level 1",
    issuer: "PIAIC",
    date: "Nov 2025",
  },
  {
    id: "9",
    name: "Prompt and Context Engineering: Effective AI Communication Level 1",
    issuer: "PIAIC",
    date: "Oct 2025",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export const achievements: Achievement[] = [
  {
    id: "1",
    title: "2nd in Graduating Class",
    description:
      "Ranked 2nd in entire graduating batch with a CGPA of 3.90/4.00, achieved simultaneously while authoring 6 peer-reviewed publications.",
    date: "Feb 2026",
  },
  {
    id: "2",
    title: "6 Peer-Reviewed Publications as an Undergraduate",
    description:
      "Published 6 papers across IEEE (×4), Springer, and Wiley — including IEEE Transactions on Consumer Electronics — before completing a bachelor's degree.",
    date: "2024–2026",
  },
  {
    id: "3",
    title: "Edge AI Deployment on Raspberry Pi",
    description:
      "Deployed a fully functional AI surveillance system with real-time YOLO11 inference, GPT-4o second-layer verification, and TTS alerts on Raspberry Pi 4 hardware.",
    date: "2025",
  },
  {
    id: "4",
    title: "POCO-24 Workshop Panel Organizer",
    description:
      "Served as Panel Organizer at the POCO-24 Workshop (Panel of Conference Organizers) in November 2024.",
    date: "Nov 2024",
  },
];

// ─── Publications ─────────────────────────────────────────────────────────────
export interface Publication {
  id: string;
  title: string;
  venue: string;
  publisher: string;
  year: string;
  status: "Published" | "Accepted";
  url?: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    title:
      "AI-Powered Surveillance Systems: A Comprehensive Review of Technologies, Applications, Challenges, and Deployment Considerations",
    venue: "WIREs Data Mining and Knowledge Discovery",
    publisher: "Wiley",
    year: "2026",
    status: "Accepted",
  },
  {
    id: "2",
    title:
      "CADSNet: Cross-Aligned Dual-Stream Network for Building Damage Assessment Using Disaster Satellite Imagery",
    venue: "ICCA 2025",
    publisher: "IEEE",
    year: "2025",
    status: "Accepted",
  },
  {
    id: "3",
    title:
      "Enhancing Deepfake Video Detection: An Xception-CBAM-BiLSTM Framework with Attention Mechanisms",
    venue: "ICETCS 2025",
    publisher: "Springer",
    year: "2025",
    status: "Accepted",
  },
  {
    id: "4",
    title:
      "Enhanced Model for Sign Language Detection with Deep CNN: Achieving Perfect Accuracy in Hand Gesture Recognition",
    venue: "ICIC 2024",
    publisher: "IEEE",
    year: "2024",
    status: "Published",
  },
  {
    id: "5",
    title:
      "Data-Efficient Wheat Disease Detection using Shifted Window Transformer: Enhancing Accuracy, Sustainability, and Global Food Security",
    venue: "IEEE Transactions on Consumer Electronics",
    publisher: "IEEE",
    year: "2024",
    status: "Published",
  },
  {
    id: "6",
    title:
      "Optimizing Diabetic Foot Ulcer Detection: Leveraging SSD and YOLO Architectures",
    venue: "HONET 2024",
    publisher: "IEEE",
    year: "2024",
    status: "Published",
  },
];
