# Abdul Rehman — Portfolio Intelligence Document
> Master reference for portfolio website development. Compiled from CV, Resume, LinkedIn PDF, and deep GitHub analysis (mani5100). Do not delete — used throughout the build session.

---

## 1. Identity & Contact

| Field | Value |
|---|---|
| Full Name | Abdul Rehman |
| Title | AI Engineer & Published Researcher |
| Location | Sargodha, Punjab, Pakistan |
| Email | m.abdulrehman.shoukat@gmail.com |
| Phone | +92-306-1439430 |
| LinkedIn | https://www.linkedin.com/in/abdulrehmanshoukat |
| GitHub | https://github.com/mani5100 |
| Google Scholar | Listed on CV (link to be added) |
| ORCID | Listed on CV (link to be added) |
| Scopus | Listed on CV (link to be added) |

---

## 2. Brand & Positioning

### Primary Headline
> "AI Engineer & Published Researcher @ VLCMatrix Lab | Machine Learning · Deep Learning · NLP · Agentic AI | Building Intelligent Systems"

### Hero Statement (use this on portfolio)
> "Most AI research never leaves the paper. Mine does."

### One-liner for hero subtext
> "I build AI systems that ship — from multi-agent pipelines that write code, to edge-deployed surveillance that detects threats in real time."

### Identity Summary
Recent BSCS graduate from University of Lahore (3.90 CGPA, ranked 2nd in class). Research assistant at VLCMatrix Lab. 6 peer-reviewed publications across IEEE (×4), Springer (×1), and Wiley (×1) — all as an undergraduate. Builds real, deployed systems corresponding to his research: a YOLO11 surveillance system running on Raspberry Pi, a multi-agent LangGraph code generation pipeline, a RAG document Q&A system, and a persistent-memory AI assistant. Currently working at Digitalytics on a voice AI system and a SaaS platform.

### Personality Signals
- Research-to-production mindset: publishes AND ships
- Self-directed: builds full-stack AI systems independently
- Proactive: gathered requirements from public-sector client remotely, iterated based on feedback
- Early adopter: LangGraph multi-agent + PIAIC Level 2 Agentic AI certification when most are still learning LangChain basics

---

## 3. Education

| Field | Value |
|---|---|
| Degree | BS Computer Science |
| Institution | University of Lahore, Sargodha Campus |
| Duration | March 2022 – February 2026 |
| CGPA | 3.90 / 4.00 |
| Class Rank | 2nd in class (entire graduating batch) |
| EQF Level | Level 6 |

> Key callout: 2nd in class WITH 6 publications simultaneously — these usually trade off.

---

## 4. Work Experience

### AI Engineer — Digitalytics *(Feb 2026 – Present)*
- Actively building `Digitalytics-voice` (voice AI system) and `Digitalytics-platform` (SaaS platform with billing dashboard)
- TypeScript codebase; near-daily commits on `deployment` branch; onboarded Feb 25, 2026
- Two active production repos under the `digitalytics` GitHub organization

### Research Lab Member — VLCMatrix Lab, University of Lahore *(July 2023 – Present)*
- Developed deep learning models for medical imaging, deepfake detection, and surveillance
- Managed full ML workflow: data preprocessing → model training → hyperparameter tuning → evaluation
- Designed and optimized architectures using TensorFlow and Keras
- Work directly resulted in 6 peer-reviewed publications across IEEE, Springer, and Wiley
- Lab: Vision, Language, and Cognition Matrix Lab (VLCMatrixLab)

### Software Developer (Remote) — Abbasia Library, Govt. Higher Secondary School *(Nov – Dec 2024)*
- Built a complete library management system from scratch for a public-sector client
- Modules: fine tracking, lost/overdue book tracking, issue card generation, user management
- Gathered requirements remotely with non-technical staff; applied iterative feedback
- Stack: Laravel, Tailwind CSS, PHP

### Web Developer — TechnDevs Inc. *(June – Aug 2024)*
- Worked on real-world client projects in a professional team environment
- Backend focus: routing, controller logic, database management
- Stack: Laravel, WordPress, SQL

### Web Developer — Private Project (Remote) *(Feb – Mar 2025)*
- Built a niche WordPress blog from scratch with responsive UI and SEO best practices
- Full Google indexing achieved in 3 days; 95+ PageSpeed score
- Used Google Search Console for indexing management

---

## 5. Projects

### Project 1: YOLO11 Intelligent Surveillance System
**Status:** Final Year Project (FYP) — most complete project
**Repo:** https://github.com/mani5100/AI-Powered-Surveillance
**Tagline:** Real-time AI surveillance on Raspberry Pi that detects dangerous objects and delivers spoken alerts with a live web dashboard.

**Problem:** Traditional surveillance passively records. This system actively detects threats in real time, verifies them with a second AI layer, and immediately alerts via voice — reducing false positives and response time.

**Architecture:**
```
Raspberry Pi Camera
        ↓
YOLO11 (custom-trained: fire, knife, gun, cigarette, vape)
        ↓
OpenAI Vision API (GPT-4o) — false positive reduction layer
        ↓
  ┌──────────────────────────────────────┐
  │            │               │         │
Piper TTS   JSON Storage    Flask Web Dashboard
(Voice Alert) (History)     (SSE live feed, charts, REST API)
```

**Features:**
- Detects: Fire, Knife, Gun, Cigarette, Vape
- Temporal verification — consistent detection over time before alerting (prevents spamming)
- Cooldown system between alerts
- Natural voice alerts via Piper TTS; fallback to espeak
- Live web dashboard: real-time stats/charts, event history with filtering, system start/stop controls
- Server-Sent Events (SSE) for live notifications
- REST API: `GET /api/events`, `/api/status`, `/api/stats`, `POST /api/start`, `POST /api/stop`
- CLI flags: `--thresh` (confidence), `--resolution`, `--record` (video)
- Webhook URL support for external integrations

**Tech Stack:** Python, YOLO11 (Ultralytics), OpenAI Vision API (GPT-4o), Flask, Chart.js, Piper TTS, espeak, Raspberry Pi 4 (4GB+)


---

### Project 2: LangGraph AppBuilder — Multi-Agent Code Generation
**Repo:** https://github.com/mani5100/LangGraph-AppBuilder
**Tagline:** A multi-agent LangGraph system where Planner, Architect, and Coder agents collaborate to generate working applications from a single prompt.

**Problem:** Automate app scaffolding and boilerplate generation from natural language — a single text prompt triggers a full pipeline that plans, designs, and writes all project files.

**Architecture:**
```
User Prompt
    ↓
[Planner Agent] → structured project plan
    ↓
[Architect Agent] → ordered implementation task list
    ↓
[Coder Agent] → write_file / read_file / run_cmd tools → generatedProject/ folder
    ↓
LangSmith — full tracing, debugging, observability of every agent step
```

**Key Files:**
- `graph.py` — StateGraph definition
- `states.py` — shared state + per-agent prompt templates
- `tools.py` — custom sandboxed tools (write_file, read_file, list_dir, run_cmd)

**Tech Stack:** Python, LangGraph (StateGraph), LangSmith, OpenAI (LLM backend)


---

### Project 3: claude-skills — Academic & Professional Automation
**Repo:** https://github.com/mani5100/claude-skills *(2 stars, 2 forks — most community traction)*
**Tagline:** Claude Code skills that automate PhD application workflows: finding advisors, writing personalized cold emails, and creating LinkedIn posts.

**Three Skills:**

**`/professor-finder`**
- Takes: university name + research domain
- Crawls university websites exhaustively; extracts full professor profiles
- Output: email, office, website, education, research areas, publications, h-index, Google Scholar, lab info, current PhD students, awards
- Filters by research domain, covers all faculty ranks

**`/professor-email`**
- Requires `/professor-finder` output + user's CV (PDF)
- Analyzes alignment between user background and professor's research
- Drafts a 200–250 word personalized first-contact email
- Returns: subject line + email body + explanation of why it works

**`/linkedin-post-creator`**
- 4 post types: Achievement, Project Completion, Learning Journey, Professional Update
- Strong hook (first 2–3 lines), strategic formatting, 4–6 relevant hashtags
- Auto-reviews for hook strength, formatting quality, hashtag relevance

**Tech Stack:** Python, Shell, Claude Code CLI (`.claude/skills/`), integrated with `/pdf` skill for CV parsing


---

### Project 4: Quora Duplicate Question Detector
**Repo:** https://github.com/mani5100/Quora-Duplicate-Detector
**Tagline:** FastAPI-powered ML app that detects whether two questions are semantically equivalent.

**Pipeline:**
1. Input: two question strings
2. Feature engineering: character counts, word counts, common words, word ratio
3. TF-IDF vectorization
4. Trained scikit-learn classifier (`model.pkl`)
5. FastAPI backend serves prediction; Streamlit frontend provides UI

**Tech Stack:** Python, FastAPI, Streamlit, scikit-learn, TF-IDF, Pandas, NumPy, Pickle
**Demo screenshots:** `Duplicate.png`, `NotDuplicate.png` (in repo)


---

### Project 5: SMS Spam Classifier
**Repo:** https://github.com/mani5100/SMS-Spam-Classification
**Tagline:** NLP text classifier using ensemble ML methods to distinguish spam from legitimate SMS messages.

**Pipeline:** tokenization → stopword removal → stemming → CountVectorizer/TF-IDF → multi-model comparison → ensemble prediction → Streamlit UI

**Models compared:** Naive Bayes, Random Forest, Extra Trees, SVM
**Ensemble methods:** VotingClassifier, StackingClassifier
**Dataset:** UCI SMS Spam Collection (5,572 messages)
**Tech Stack:** Python, scikit-learn, NLTK, Pandas, NumPy, Seaborn, Matplotlib, Streamlit
**Demo screenshots:** `HAM Message.png`, `Spam Message.png` (in repo)

---

### Project 6: Movie Recommender System
**Repo:** https://github.com/mani5100/Movie-Recommender-System
**Tagline:** Content-based movie recommender with live TMDB poster fetching.

**Pipeline:** TMDB metadata (genres + cast + crew + keywords + overview) → combined tag string → stemming (NLTK) → bag-of-words (CountVectorizer) → cosine similarity matrix → top 5 recommendations → TMDB API poster fetch → Streamlit UI

**Tech Stack:** Python, scikit-learn, NLTK, Pandas, NumPy, Streamlit, Requests, TMDB API, python-dotenv
**Demo screenshot:** `Recommendations.png` (in repo)

---

### Project 7: RAG-Based Document Q&A System *(not on GitHub)*
**Tagline:** Intelligent Q&A over uploaded PDF documents using LangChain + Pinecone.

**How it works:** PDF upload → chunking → vector embeddings (Pinecone) → semantic retrieval (LangChain RetrievalQA) → grounded response generation
**Tech Stack:** LangChain, Pinecone, OpenAI embeddings, Python

---

### Project 8: AI Conversational Agent with Persistent Memory *(not on GitHub)*
**Tagline:** General-purpose AI assistant with cross-session persistent memory using OpenAI Agents SDK.

**How it works:** OpenAI Agents SDK with tool-calling capabilities; conversation history and memory stored persistently; context-aware across multiple sessions
**Tech Stack:** OpenAI Agents SDK, Python

---

## 6. Publications

| # | Year | Title | Venue | Publisher | Status |
|---|---|---|---|---|---|
| 1 | 2026 | AI-Powered Surveillance Systems: A Comprehensive Review of Technologies, Applications, Challenges, and Deployment Considerations | WIREs Data Mining and Knowledge Discovery | **Wiley** | Accepted |
| 2 | 2025 | CADSNet: Cross-Aligned Dual-Stream Network for Building Damage Assessment Using Disaster Satellite Imagery | ICCA 2025 | **IEEE** | Accepted |
| 3 | 2025 | Enhancing Deepfake Video Detection: An Xception-CBAM-BiLSTM Framework with Attention Mechanisms | ICETCS 2025 | **Springer** | Accepted |
| 4 | 2024 | Enhanced Model for Sign Language Detection with Deep CNN: Achieving Perfect Accuracy in Hand Gesture Recognition | ICIC 2024 | **IEEE** | Published |
| 5 | 2024 | Data-Efficient Wheat Disease Detection using Shifted Window Transformer: Enhancing Accuracy, Sustainability, and Global Food Security | IEEE Transactions on Consumer Electronics | **IEEE** | Published |
| 6 | 2024 | Optimizing Diabetic Foot Ulcer Detection: Leveraging SSD and YOLO Architectures | HONET 2024 | **IEEE** | Published |

**Research domains covered:** Surveillance, Satellite/Disaster Response, Deepfake Detection, Sign Language, Agricultural AI, Medical Imaging

---

## 7. Certifications

| Certification | Issuer | Date |
|---|---|---|
| Generative AI Applications Specialist | IBM | July 2025 |
| Fundamentals of AI Agents Using RAG and LangChain | IBM | June 2025 |
| Project: Generative AI Applications with RAG and LangChain | IBM | June 2025 |
| Generative AI: Prompt Engineering Basics | IBM | June 2025 |
| Level 2 Fundamentals of Agentic AI Professional Certification | PIAIC | Dec 2025 |
| Fundamentals of Agentic AI Level 1 | PIAIC | Nov 2025 |
| Fundamentals of Modern AI Python Level 1 | PIAIC | Nov 2025 |
| Prompt and Context Engineering: Effective AI Communication Level 1 | PIAIC | Oct 2025 |

---

## 8. Conferences & Presentations

| Date | Event | Role |
|---|---|---|
| Oct 27, 2025 | International Conference on Emerging Trends in Cybersecurity | Presenter |
| Dec 10, 2024 | International Conference on Sciences for Future Trends | Presenter |
| Nov 20–21, 2024 | International Conference on Innovative Computing (ICIC) | Presenter (own paper) |
| Nov 23, 2024 | POCO-24 Workshop | Panel Organizer (not just attendee) |

---

## 9. Technical Skills

### AI / ML / Deep Learning *(proven across multiple projects)*
LangChain, LangGraph, LangSmith, OpenAI Agents SDK, YOLO11, TensorFlow, Keras, scikit-learn, NLP (TF-IDF, bag-of-words, stemming, cosine similarity), Computer Vision, Prompt Engineering, RAG, Pinecone (vector DB), FAISS, Chroma, SentenceTransformers

### Frameworks & APIs *(used in production projects)*
FastAPI, Flask, Streamlit, OpenAI API, Google Gemini, HuggingFace Inference API, TMDB API

### Languages
Python (primary), TypeScript (Digitalytics), JavaScript, PHP, SQL, Java, C++

### Tools & Platforms
Docker, Git, GitHub, VS Code, Raspberry Pi 4, Pydantic, python-dotenv, Kaggle, Google Search Console, Hugging Face, LangSmith

### Web Dev *(secondary skillset)*
Laravel, WordPress, Tailwind CSS, HTML/CSS

### Databases
PostgreSQL, SQL, Pinecone, JSON storage, Firebase (Firestore)

---

## 10. Assets Available

| File | Description |
|---|---|
| `Abdul Rehman CV.pdf` | Full academic CV |
| `Abdul Rehman Resume.pdf` | One-page resume |
| `LinkedIn PDF.pdf` | LinkedIn profile export |
| `Abdul Rehman.png` | Profile photo (5MB, high-res) |

---

