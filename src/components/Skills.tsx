"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { skills } from "@/data/portfolio";

const sectionHeaderVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* Chip emphasis scales with proficiency level */
function chipClass(level?: string) {
  const base =
    "text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors duration-200";
  switch (level) {
    case "Expert":
      return `${base} bg-primary/15 text-primary-light border-primary/30`;
    case "Advanced":
      return `${base} bg-primary/[0.07] text-text-primary border-primary/15`;
    case "Intermediate":
      return `${base} bg-white/[0.04] text-text-secondary border-white/10`;
    default:
      return `${base} bg-white/[0.02] text-text-muted border-white/5`;
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

export default function Skills() {
  const prefersReduced = useReducedMotion();
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="flex flex-col items-center text-center mb-12"
          variants={prefersReduced ? undefined : sectionHeaderVariant}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.p
            className="text-primary font-mono text-sm mb-2 tracking-wider uppercase"
            variants={prefersReduced ? undefined : fadeUpVariant}
          >
            What I work with
          </motion.p>
          <motion.h2
            className="section-title"
            variants={prefersReduced ? undefined : fadeUpVariant}
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={prefersReduced ? undefined : fadeUpVariant}
          />
        </motion.div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="card hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
              custom={index}
              variants={prefersReduced ? undefined : cardVariant}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              whileHover={prefersReduced ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-white/5">
                <span className="font-mono text-primary/60 text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-text-primary font-semibold text-xs uppercase tracking-widest">
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill.name} className={chipClass(skill.level)}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
