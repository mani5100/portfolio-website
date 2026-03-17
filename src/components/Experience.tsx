"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const sectionHeaderVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 260, damping: 22, delay: i * 0.1 },
  }),
};

export default function Experience() {
  const prefersReduced = useReducedMotion();
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding">
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
            Where I&apos;ve worked
          </motion.p>
          <motion.h2
            className="section-title"
            variants={prefersReduced ? undefined : fadeUpVariant}
          >
            Work Experience
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={prefersReduced ? undefined : fadeUpVariant}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line — animated draw-down */}
          <motion.div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #6366f1 0%, #a78bfa 60%, #1e1e2e 100%)",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={
              prefersReduced
                ? { duration: 0 }
                : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
            }
          />

          {/* Cards */}
          <div ref={timelineRef} className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex gap-8"
                custom={index}
                variants={prefersReduced ? undefined : cardVariant}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 pt-6 justify-center">
                  {exp.endDate === "Present" ? (
                    <div className="relative flex items-center justify-center w-3 h-3">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                      <div className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/40 relative z-10" />
                    </div>
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-surface-2 border-2 border-primary/40 relative z-10" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 card hover:shadow-lg hover:shadow-primary/5 ${
                    exp.endDate === "Present"
                      ? "border-primary/40 shadow-md shadow-primary/10"
                      : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-text-primary font-semibold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-sm text-text-muted items-start sm:items-end">
                      {exp.endDate === "Present" && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium w-fit">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      )}
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={13} />
                        {exp.startDate} — {exp.endDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex gap-2"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
