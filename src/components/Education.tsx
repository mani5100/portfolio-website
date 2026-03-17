"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";
import { FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

/* ─── Issuer color map ──────────────────────────────────────────────── */
const issuerColor: Record<string, string> = {
  IBM:   "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PIAIC: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

/* ─── Animation variants ────────────────────────────────────────────── */
const sectionHeaderVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const certGridVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const certCardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Main component ────────────────────────────────────────────────── */
export default function Education() {
  const prefersReduced = useReducedMotion();

  const headerRef = useRef(null);
  const degreeRef = useRef(null);
  const certRef   = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const degreeInView = useInView(degreeRef, { once: true, margin: "-80px" });
  const certInView   = useInView(certRef,   { once: true, margin: "-80px" });

  const edu = education[0];

  return (
    <section id="education" className="section-padding bg-surface/30">
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
            Academic background
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUpVariant}>
            Education
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            variants={fadeUpVariant}
          />
        </motion.div>

        {/* Degree card — full width */}
        <motion.div
          ref={degreeRef}
          className="card mb-12 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
          variants={prefersReduced ? undefined : fadeUpVariant}
          initial="hidden"
          animate={degreeInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-text-primary font-semibold text-xl">
                {edu.degree} in {edu.field}
              </h3>
              <p className="text-primary font-medium mt-1">{edu.institution}</p>
            </div>
            {edu.grade && (
              <span className="text-xs px-3 py-1.5 rounded-full border bg-primary/10 text-primary border-primary/30 font-mono flex-shrink-0 self-start whitespace-nowrap">
                {edu.grade}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-4 text-text-muted text-sm">
            <span className="flex items-center gap-1.5">
              <FiCalendar size={13} />
              {edu.startDate} — {edu.endDate}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={13} />
              {edu.location}
            </span>
          </div>

          {edu.description && (
            <p className="mt-4 text-text-secondary text-sm leading-relaxed border-t border-border/50 pt-4">
              {edu.description}
            </p>
          )}
        </motion.div>

        {/* Certifications */}
        <h3 className="text-text-primary font-semibold text-xl mb-6 flex items-center gap-2">
          <span className="text-primary">▹</span> Certifications
        </h3>

        <motion.div
          ref={certRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={prefersReduced ? undefined : certGridVariant}
          initial="hidden"
          animate={certInView ? "visible" : "hidden"}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={prefersReduced ? undefined : certCardVariant}
              className="card flex flex-col gap-3
                         hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300"
            >
              {/* Issuer pill + date */}
              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${issuerColor[cert.issuer] || "tag"}`}>
                  {cert.issuer}
                </span>
                <span className="text-xs text-text-muted font-mono">{cert.date}</span>
              </div>

              {/* Cert name */}
              <h4 className="text-text-primary font-medium text-sm leading-snug flex-1">
                {cert.name}
              </h4>

              {/* Credential link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-xs hover:text-primary-light transition-colors flex items-center gap-1 self-start"
                >
                  View Credential <FiExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
