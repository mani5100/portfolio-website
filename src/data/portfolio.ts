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
  bio: "AI Engineer building agentic AI, RAG systems, and LLM-powered backends, with a research background in deep learning and computer vision. I focus on the hard part of AI engineering: making models dependable on messy, real-world data.",
  email: "m.abdulrehman.shoukat@gmail.com",
  phone: "+92-306-1439430",
  location: "Sargodha, Punjab, Pakistan",
  linkedin: "https://www.linkedin.com/in/abdulrehmanshoukat",
  github: "https://github.com/mani5100",
  profileImage: "/zommedin.jpeg",
  resumeUrl: "/Abdul Rehman Resume.pdf",
};

// ─── Work Experience ──────────────────────────────────────────────────────────
export const experiences: WorkExperience[] = [
  {
    id: "1",
    company: "Nextbridge Ltd.",
    role: "Trainee AI Engineer",
    startDate: "Jul 2026",
    endDate: "Present",
    location: "Lahore, Pakistan",
    description: [
      "Engineering LLM systems with LangGraph and FastAPI on self-hosted Ollama models, including a text-to-SQL database agent, a Graph RAG pipeline on Neo4j, a hybrid-search RAG chatbot on Qdrant, and a multi-agent coding assistant with a Docker sandbox.",
      "Trained computer vision models for PPE compliance detection on construction sites.",
      "Built a multi-person pose estimation pipeline that tracks consistent person IDs across video frames.",
    ],
    technologies: ["LangGraph", "FastAPI", "Ollama", "Neo4j", "Qdrant", "YOLO", "Docker"],
  },
  {
    id: "2",
    company: "Digitalytics",
    role: "AI Automation Engineer (Part-time)",
    startDate: "Jan 2026",
    endDate: "Present",
    location: "Remote",
    description: [
      "Building AI-powered EHR automation pipelines that extract, validate, and enter structured data from documents into web-based systems.",
      "Deploying AI voice agents on Retell AI with Twilio telephony.",
      "Building n8n workflows that connect LLMs with third-party APIs.",
    ],
    technologies: ["Retell AI", "Twilio", "n8n", "OpenAI", "Python"],
  },
  {
    id: "3",
    company: "VLCMatrix Lab, University of Lahore",
    role: "Research Lab Member",
    startDate: "Jul 2023",
    endDate: "Feb 2026",
    location: "Sargodha, Pakistan",
    description: [
      "Spent nearly three years on deep learning for medical imaging, deepfake detection, and agriculture.",
      "Managed end-to-end machine learning workflows: data preprocessing, model training, hyperparameter tuning, and evaluation.",
      "Research contributed to 8 peer-reviewed papers published across IEEE, Springer, and Wiley.",
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
    grade: "3.90 / 4.00, 2nd in graduating batch",
    description:
      "Achieved 2nd-in-class ranking while simultaneously authoring 8 peer-reviewed publications across IEEE, Springer, and Wiley as an undergraduate.",
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
    title: "Database Agent",
    description:
      "A LangGraph agent that converts natural-language questions into safe, governed SQL across Postgres, MySQL, CSV, and Excel.",
    longDescription:
      "A LangGraph database agent that turns natural-language questions into governed, safe SQL over Postgres, MySQL, CSV, and Excel. It builds an LLM-generated YAML semantic layer, compiles queries with SQLGlot, retrieves schema context from Qdrant, and auto-generates charts from the results.",
    technologies: [
      "Python",
      "LangGraph",
      "SQLGlot",
      "Qdrant",
      "PostgreSQL",
      "MySQL",
    ],
    githubUrl: "https://github.com/mani5100/database-agent",
    featured: true,
    category: "Agentic AI",
  },
  {
    id: "2",
    title: "RAG Assistant",
    description:
      "A production-grade employee RAG chatbot with hybrid dense plus BM25 search, reranking, memory, and voice support.",
    longDescription:
      "An employee RAG assistant with hybrid dense and BM25 retrieval in Qdrant, FlashRank reranking, and a web-search fallback. It automates HR requests through the Gmail API, keeps Postgres-backed multi-turn memory, and adds voice interaction with Whisper and Piper.",
    technologies: [
      "Python",
      "Qdrant",
      "BM25",
      "FlashRank",
      "Whisper",
      "Piper",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/mani5100/production-rag",
    featured: true,
    category: "RAG / LLM",
  },
  {
    id: "3",
    title: "Graph RAG",
    description:
      "A Graph RAG pipeline that builds a Neo4j knowledge graph from PDFs and answers questions over it.",
    longDescription:
      "A Graph RAG pipeline that converts PDF documents into a Neo4j knowledge graph using LLM entity extraction and embedding-based deduplication. It runs multi-strategy Cypher retrieval with query-intent filtering and result ranking to answer questions, served locally on Ollama.",
    technologies: [
      "Python",
      "Neo4j",
      "Ollama",
      "Cypher",
      "LLM",
      "RAG",
    ],
    githubUrl: "https://github.com/mani5100/graph-rag",
    featured: true,
    category: "RAG / LLM",
  },
  {
    id: "4",
    title: "YOLO11 Intelligent Surveillance System",
    description:
      "Edge-deployed real-time AI surveillance system that detects dangerous objects and delivers spoken alerts with a live web dashboard.",
    longDescription:
      "Real-time AI surveillance deployed on Raspberry Pi that detects fire, knives, guns, cigarettes, and vapes. It uses temporal verification to prevent false-alarm spam, GPT-4o Vision as a second-layer false-positive reducer, and Piper TTS for voice alerts. Ships a live web dashboard with real-time charts, event history, and start/stop controls via SSE.",
    technologies: [
      "Python",
      "YOLO11",
      "OpenAI GPT-4o",
      "Flask",
      "Piper TTS",
      "Raspberry Pi",
    ],
    githubUrl: "https://github.com/mani5100/AI-Powered-Surveillance",
    featured: true,
    category: "Computer Vision",
  },
  {
    id: "5",
    title: "Real Estate Backend",
    description:
      "A FastAPI platform with JWT role-based access, lead management, WebSocket updates, signed webhooks, and a tool-calling AI agent, load-tested with pytest, Locust, and Newman.",
    technologies: [
      "Python",
      "FastAPI",
      "JWT",
      "WebSocket",
      "PostgreSQL",
      "Locust",
    ],
    githubUrl: "https://github.com/mani5100/Real-Estate-Backend",
    featured: false,
    category: "Backend / APIs",
  },
  {
    id: "6",
    title: "LangGraph AppBuilder",
    description:
      "A multi-agent LangGraph system where Planner, Architect, and Coder agents collaborate to generate full working applications from a single prompt.",
    technologies: [
      "Python",
      "LangGraph",
      "LangSmith",
      "OpenAI",
      "Agentic AI",
    ],
    githubUrl: "https://github.com/mani5100/LangGraph-AppBuilder",
    featured: false,
    category: "Agentic AI",
  },
  {
    id: "7",
    title: "Coding Agent",
    description:
      "A modular coding agent built with LangChain and Ollama that writes, edits, and executes code inside a Docker sandbox.",
    technologies: [
      "Python",
      "LangChain",
      "Ollama",
      "Docker",
    ],
    githubUrl: "https://github.com/mani5100/coding-agent",
    featured: false,
    category: "Agentic AI",
  },
  {
    id: "8",
    title: "RAG Portfolio",
    description:
      "A RAG web app where users upload documents and get AI-powered answers streamed back in real time.",
    technologies: [
      "Python",
      "RAG",
      "FastAPI",
      "Streaming",
    ],
    githubUrl: "https://github.com/mani5100/rag-portfolio",
    featured: false,
    category: "RAG / LLM",
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
      "Ranked 2nd in entire graduating batch with a CGPA of 3.90/4.00, achieved simultaneously while authoring 8 peer-reviewed publications.",
    date: "Feb 2026",
  },
  {
    id: "2",
    title: "8 Peer-Reviewed Publications as an Undergraduate",
    description:
      "Published 8 papers across IEEE, Springer, and Wiley, including IEEE Transactions on Consumer Electronics, before completing a bachelor's degree.",
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
      "From Benchmarks to Deployment: A Comprehensive Review of Agentic AI Evaluation",
    venue: "Artificial Intelligence Review",
    publisher: "Springer",
    year: "2026",
    status: "Published",
  },
  {
    id: "2",
    title:
      "AI-Powered Surveillance Systems: A Comprehensive Review of Technologies, Applications, Challenges, and Deployment Considerations",
    venue: "WIREs Data Mining and Knowledge Discovery",
    publisher: "Wiley",
    year: "2026",
    status: "Published",
  },
  {
    id: "3",
    title:
      "Enhancing Deepfake Video Detection: An Xception-CBAM-BiLSTM Framework with Attention Mechanisms",
    venue: "ICETCS 2025",
    publisher: "Springer",
    year: "2026",
    status: "Accepted",
  },
  {
    id: "4",
    title:
      "CADSNet: Cross-Aligned Dual-Stream Network for Building Damage Assessment Using Disaster Satellite Imagery",
    venue: "ICCA 2025",
    publisher: "IEEE",
    year: "2025",
    status: "Published",
  },
  {
    id: "5",
    title:
      "A Multi-Agent Reinforcement Learning Approach for Seamless and Safe Autonomous Vehicle Platooning",
    venue: "Intl. Conf. on Intelligent Technology, Systems & Service",
    publisher: "IEEE",
    year: "2025",
    status: "Published",
  },
  {
    id: "6",
    title:
      "Data-Efficient Wheat Disease Detection using Shifted Window Transformer: Enhancing Accuracy, Sustainability, and Global Food Security",
    venue: "IEEE Transactions on Consumer Electronics",
    publisher: "IEEE",
    year: "2025",
    status: "Published",
  },
  {
    id: "7",
    title:
      "Enhanced Model for Sign Language Detection with Deep CNN: Achieving Perfect Accuracy in Hand Gesture Recognition",
    venue: "ICIC 2024",
    publisher: "IEEE",
    year: "2024",
    status: "Published",
  },
  {
    id: "8",
    title:
      "Optimizing Diabetic Foot Ulcer Detection: Leveraging SSD and YOLO Architectures",
    venue: "HONET 2024",
    publisher: "IEEE",
    year: "2024",
    status: "Published",
  },
];
