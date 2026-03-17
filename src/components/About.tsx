"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const stats = [
  { label: "Published Papers", value: "6" },
  { label: "Class Rank", value: "2nd" },
  { label: "CGPA", value: "3.90" },
  { label: "Certifications", value: "9" },
];

function useCountUp(target: string, isInView: boolean, prefersReduced: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView || prefersReduced) { setDisplay(target); return; }

    const match = target.match(/^(\d+\.?\d*)(.*)/);
    if (!match) { setDisplay(target); return; }

    const numericPart = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    const decimalPlaces = isDecimal ? (match[1].split(".")[1]?.length ?? 0) : 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((numericPart * eased).toFixed(decimalPlaces) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(target);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, prefersReduced]);

  return display;
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const bioParagraphVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const contactItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const statCardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22, delay: i * 0.1 },
  }),
};

const badgeVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18, delay: i * 0.08 },
  }),
};

function StatCard({ stat, index, inView, prefersReduced }: {
  stat: { label: string; value: string };
  index: number;
  inView: boolean;
  prefersReduced: boolean | null;
}) {
  const displayValue = useCountUp(stat.value, inView, !!prefersReduced);
  return (
    <motion.div
      className="card text-center hover:border-primary/50"
      custom={index}
      variants={prefersReduced ? undefined : statCardVariant}
      whileHover={prefersReduced ? undefined : { scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    >
      <p className="text-4xl font-bold gradient-text mb-2">{displayValue}</p>
      <p className="text-text-secondary text-sm">{stat.label}</p>
    </motion.div>
  );
}

export default function About() {
  const prefersReduced = useReducedMotion();
  const headerRef    = useRef(null);
  const bioRef       = useRef(null);
  const contactRef   = useRef(null);
  const statsRef     = useRef(null);
  const publisherRef = useRef(null);

  const headerInView    = useInView(headerRef,    { once: true, margin: "-80px" });
  const bioInView       = useInView(bioRef,       { once: true, margin: "-80px" });
  const contactInView   = useInView(contactRef,   { once: true, margin: "-80px" });
  const statsInView     = useInView(statsRef,     { once: true, margin: "-80px" });
  const publisherInView = useInView(publisherRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-12"
          variants={prefersReduced ? undefined : staggerContainer}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-primary font-mono text-sm mb-2 tracking-wider uppercase"
            variants={prefersReduced ? undefined : fadeUpVariant}
          >
            Get to know me
          </motion.p>
          <motion.h2
            className="section-title"
            variants={prefersReduced ? undefined : fadeUpVariant}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={prefersReduced ? undefined : fadeUpVariant}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <motion.div
              ref={bioRef}
              variants={prefersReduced ? undefined : staggerContainer}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
            >
              <motion.p
                className="text-text-secondary text-lg leading-relaxed mb-4"
                variants={prefersReduced ? undefined : bioParagraphVariant}
              >
                Recent BSCS graduate (ranked 2nd, CGPA 3.90) from the University
                of Lahore. As a research assistant at{" "}
                <span className="text-primary font-medium">VLCMatrix Lab</span>,
                I developed and evaluated deep learning models for medical
                imaging, deepfake detection, and intelligent surveillance.
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed mb-4"
                variants={prefersReduced ? undefined : bioParagraphVariant}
              >
                I&apos;ve independently shipped a RAG system for document Q&A, a
                multi-agent code generation pipeline, and an edge-deployed
                AI surveillance system on Raspberry Pi. I am currently building
                production AI at{" "}
                <span className="text-primary font-medium">Digitalytics</span>.
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                variants={prefersReduced ? undefined : bioParagraphVariant}
              >
                My work spans the full research-to-production pipeline — from
                authoring papers in IEEE, Springer, and Wiley journals, to
                shipping real systems that run on real hardware.
              </motion.p>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              ref={contactRef}
              className="mt-8 flex flex-col gap-3"
              variants={prefersReduced ? undefined : staggerContainer}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
            >
              <motion.div
                className="flex items-center gap-3 text-text-secondary"
                variants={prefersReduced ? undefined : contactItemVariant}
              >
                <FiMapPin className="text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-text-secondary"
                variants={prefersReduced ? undefined : contactItemVariant}
              >
                <FiMail className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </motion.div>
              {personalInfo.phone && (
                <motion.div
                  className="flex items-center gap-3 text-text-secondary"
                  variants={prefersReduced ? undefined : contactItemVariant}
                >
                  <FiPhone className="text-primary flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </motion.div>
              )}
              <motion.div
                className="flex items-center gap-3 text-text-secondary"
                variants={prefersReduced ? undefined : contactItemVariant}
              >
                <FiGithub className="text-primary flex-shrink-0" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/mani5100
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-text-secondary"
                variants={prefersReduced ? undefined : contactItemVariant}
              >
                <FiLinkedin className="text-primary flex-shrink-0" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/abdulrehmanshoukat
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 gap-4"
            variants={prefersReduced ? undefined : staggerContainer}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                stat={stat}
                index={i}
                inView={statsInView}
                prefersReduced={prefersReduced}
              />
            ))}

            {/* Publisher Badges */}
            <motion.div
              ref={publisherRef}
              className="col-span-2 card"
              custom={4}
              variants={prefersReduced ? undefined : statCardVariant}
            >
              <p className="text-text-muted text-xs uppercase tracking-wider mb-3 font-mono">
                Published in
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={prefersReduced ? undefined : staggerContainer}
                initial="hidden"
                animate={publisherInView ? "visible" : "hidden"}
              >
                {["IEEE ×4", "Wiley", "Springer"].map((pub, i) => (
                  <motion.span
                    key={pub}
                    className="tag"
                    custom={i}
                    variants={prefersReduced ? undefined : badgeVariant}
                  >
                    {pub}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
