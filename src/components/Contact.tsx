"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiPhone, FiArrowUpRight } from "react-icons/fi";

/* ─── Animation variants ────────────────────────────────────────────── */
const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Main component ────────────────────────────────────────────────── */
export default function Contact() {
  const prefersReduced = useReducedMotion();
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">

        {/* Glowing CTA box */}
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto rounded-2xl border border-primary/30
                     shadow-2xl shadow-primary/10 p-10 sm:p-14 text-center"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 65%), #12121a",
          }}
          variants={prefersReduced ? undefined : containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={prefersReduced ? undefined : staggerVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Mono label */}
            <motion.p
              className="text-primary font-mono text-sm uppercase tracking-widest mb-4"
              variants={prefersReduced ? undefined : itemVariant}
            >
              What&apos;s Next?
            </motion.p>

            {/* Gradient headline */}
            <motion.h2
              className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
              variants={prefersReduced ? undefined : itemVariant}
            >
              Let&apos;s Build Something
            </motion.h2>

            {/* Body */}
            <motion.p
              className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto"
              variants={prefersReduced ? undefined : itemVariant}
            >
              I&apos;m open to new roles, freelance projects, and research
              collaborations. If you have something in mind — or just want to
              say hi — my inbox is always open.
            </motion.p>

            {/* Availability tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-10"
              variants={prefersReduced ? undefined : itemVariant}
            >
              <span className="tag">Open to Roles</span>
              <span className="tag">Freelance</span>
              <span className="tag">Research</span>
            </motion.div>

            {/* CTA button */}
            <motion.div
              variants={prefersReduced ? undefined : itemVariant}
              className="mb-10"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary px-10 py-4 text-base"
              >
                <FiMail size={18} />
                Say Hello
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="border-t border-border/50 mb-8"
              variants={prefersReduced ? undefined : itemVariant}
            />

            {/* Pill contact links */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              variants={prefersReduced ? undefined : itemVariant}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border
                           text-text-secondary text-sm hover:border-primary/50 hover:text-primary
                           transition-colors duration-200"
              >
                <FiMail size={13} />
                {personalInfo.email}
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border
                           text-text-secondary text-sm hover:border-primary/50 hover:text-primary
                           transition-colors duration-200"
              >
                <FiPhone size={13} />
                {personalInfo.phone}
              </a>

              <span
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border
                           text-text-secondary text-sm"
              >
                <FiMapPin size={13} />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Social text links */}
            <motion.div
              className="flex justify-center gap-6"
              variants={prefersReduced ? undefined : itemVariant}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors text-sm font-medium"
              >
                <FiGithub size={15} />
                GitHub
                <FiArrowUpRight size={12} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors text-sm font-medium"
              >
                <FiLinkedin size={15} />
                LinkedIn
                <FiArrowUpRight size={12} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
