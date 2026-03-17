"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/* ─── Terminal snippets ─────────────────────────────────────────────── */
const terminalSnippets: Record<
  string,
  { label: string; lines: { text: string; color: string }[] }
> = {
  "1": {
    label: "surveillance.py",
    lines: [
      { text: "> python surveillance.py",      color: "text-text-muted" },
      { text: "[INFO]  YOLO11 model loaded",   color: "text-blue-400" },
      { text: "[ALERT] Knife detected (0.94)", color: "text-red-400" },
      { text: "[TTS]   Speaking alert...",     color: "text-yellow-400" },
      { text: "[INFO]  Dashboard SSE active",  color: "text-blue-400" },
    ],
  },
  "2": {
    label: "builder.py",
    lines: [
      { text: '> python builder.py "Todo app"',    color: "text-text-muted" },
      { text: "[Planner]   Breaking down task...",  color: "text-accent" },
      { text: "[Architect] Designing structure...", color: "text-primary-light" },
      { text: "[Coder]     Writing app.py...",      color: "text-green-400" },
      { text: "[Done]      Project written to disk", color: "text-green-400" },
    ],
  },
  "3": {
    label: "claude-skills",
    lines: [
      { text: "> /professor-finder MIT AI Lab",    color: "text-text-muted" },
      { text: "[INFO]  Crawling faculty pages...", color: "text-blue-400" },
      { text: "[FOUND] 12 professors matched",     color: "text-green-400" },
      { text: "[EMAIL] Drafting cold email...",    color: "text-yellow-400" },
      { text: "[POST]  LinkedIn draft ready",      color: "text-accent" },
    ],
  },
};

/* ─── TerminalMockup sub-component ─────────────────────────────────── */
function TerminalMockup({ projectId }: { projectId: string }) {
  const snippet = terminalSnippets[projectId];
  if (!snippet) return null;
  return (
    <div className="w-full aspect-video bg-[#0d0d14] rounded-xl border border-border font-mono text-xs overflow-hidden flex flex-col">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50 flex-shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-text-muted text-[11px]">{snippet.label}</span>
      </div>
      {/* Lines */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        {snippet.lines.map((line, i) => (
          <p key={i} className={line.color}>{line.text}</p>
        ))}
        <span className="text-primary/70 animate-pulse mt-1">█</span>
      </div>
    </div>
  );
}

/* ─── Animation variants ────────────────────────────────────────────── */
const sectionHeaderVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const featuredCardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 },
  }),
};

const gridCardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.07 },
  }),
};

/* ─── Main component ────────────────────────────────────────────────── */
export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects    = projects.filter((p) => !p.featured);

  const prefersReduced = useReducedMotion();

  const headerRef   = useRef(null);
  const featuredRef = useRef(null);
  const otherRef    = useRef(null);

  const headerInView   = useInView(headerRef,   { once: true, margin: "-80px" });
  const featuredInView = useInView(featuredRef, { once: true, margin: "-80px" });
  const otherInView    = useInView(otherRef,    { once: true, margin: "-80px" });

  const categories = ["All", ...Array.from(new Set(otherProjects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-12"
          variants={sectionHeaderVariant}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-primary font-mono text-sm mb-2 tracking-wider uppercase"
            variants={fadeUpVariant}
          >
            What I&apos;ve built
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            Projects
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={fadeUpVariant}
          />
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div ref={featuredRef} className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                custom={index}
                variants={prefersReduced ? undefined : featuredCardVariant}
                initial="hidden"
                animate={featuredInView ? "visible" : "hidden"}
              >
                {/* Terminal mockup */}
                <div className="flex-1 w-full">
                  <TerminalMockup projectId={project.id} />
                </div>

                {/* Project info */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <p className="text-primary font-mono text-xs mb-2 uppercase tracking-wider">
                    Featured Project
                  </p>
                  <h3 className="text-text-primary text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <div className="card mb-4">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-6 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={22} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <p className="text-text-muted text-center font-mono text-xs uppercase tracking-wider mb-6">
              Other Noteworthy Projects
            </p>

            {/* Filter tabs */}
            <div className="flex gap-2 justify-center mb-8 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                    activeFilter === cat
                      ? "bg-primary border-primary text-white"
                      : "border-border text-text-muted hover:text-text-primary hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Animated grid */}
            <div ref={otherRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    layout
                    custom={i}
                    variants={prefersReduced ? undefined : gridCardVariant}
                    initial="hidden"
                    animate={otherInView ? "visible" : "hidden"}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    whileHover={prefersReduced ? undefined : { y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="card flex flex-col hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="tag">{project.category}</span>
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-primary transition-colors"
                            aria-label="GitHub"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-primary transition-colors"
                            aria-label="Live Demo"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h4 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="font-mono text-xs text-text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
