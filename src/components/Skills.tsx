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
              className="card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
              custom={index}
              variants={prefersReduced ? undefined : cardVariant}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              whileHover={prefersReduced ? undefined : { y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <h3 className="text-text-primary font-semibold text-xs uppercase tracking-widest mb-4 pb-3 border-b border-border">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-text-secondary text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
