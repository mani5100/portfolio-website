"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact",      href: "#contact" },
];

const navContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const navLinkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

const mobileOverlayVariants = {
  hidden:  { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit:    { x: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
};

const mobileItemVariants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReduced = useReducedMotion();

  /* Scroll: background + progress bar */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Body scroll lock when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] bg-gradient-to-r from-primary via-accent to-primary-light"
        style={{ width: `${scrollProgress}%`, transition: "width 80ms linear" }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

          {/* ── Logo ── */}
          <a href="#" className="relative group font-mono text-xl font-bold select-none">
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              AR
            </span>
            <span className="text-primary logo-dot">.</span>
            {/* glow on hover */}
            <span
              aria-hidden
              className="absolute inset-0 font-mono text-xl font-bold text-primary blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
            >
              AR.
            </span>
          </a>

          {/* ── Desktop links ── */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            variants={prefersReduced ? undefined : navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={prefersReduced ? undefined : navLinkVariants}
                  className={`nav-link relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {/* sliding pill active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-md"
                      style={{
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.25)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </motion.a>
              );
            })}

            {/* Resume button — slide-fill + glow on hover */}
            <motion.a
              href={personalInfo.resumeUrl}
              download
              variants={prefersReduced ? undefined : navLinkVariants}
              className="relative ml-4 overflow-hidden border border-primary/60 text-primary text-sm font-medium px-4 py-[7px] rounded-md group transition-colors duration-300 hover:text-white hover:border-primary inline-flex items-center gap-1.5 hover:shadow-[0_0_16px_rgba(99,102,241,0.45),0_0_32px_rgba(99,102,241,0.2)]"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Resume</span>
              <svg
                className="relative w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden relative w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200"
          >
            <span className={`absolute block w-5 h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
            <span className={`absolute block w-5 h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`absolute block w-5 h-[1.5px] bg-current rounded transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu — full-screen slide-in overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              variants={mobileOverlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-[56] w-[min(320px,85vw)] bg-surface/98 backdrop-blur-2xl border-l border-border flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/60">
                <span className="font-mono text-xl font-bold">
                  <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">AR</span>
                  <span className="text-primary logo-dot">.</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      custom={i}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Resume button */}
              <div className="px-4 pb-8">
                <a
                  href={personalInfo.resumeUrl}
                  download
                  onClick={() => setMenuOpen(false)}
                  className="w-full relative overflow-hidden border border-primary/60 text-primary hover:text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-300 inline-flex items-center justify-center gap-1.5 group hover:border-primary hover:shadow-[0_0_16px_rgba(99,102,241,0.45),0_0_32px_rgba(99,102,241,0.2)]"
                >
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative">Resume</span>
                  <svg className="relative w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
