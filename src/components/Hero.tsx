"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const heroTextContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroTextItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const profileEntrance = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 22, delay: 0.2 } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-24"
    >
      <div className="container-max w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-primary font-mono text-sm mb-4 tracking-wider uppercase"
              variants={heroTextItem}
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight"
              variants={heroTextItem}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-6"
              variants={heroTextItem}
            >
              {personalInfo.title}
            </motion.h2>
            <motion.p
              className="text-text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              variants={heroTextItem}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              variants={heroTextItem}
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={prefersReduced ? undefined : { scale: 1.04, y: -2 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href={personalInfo.cvUrl}
                download
                className="btn-outline"
                whileHover={prefersReduced ? undefined : { scale: 1.04, y: -2 }}
                whileTap={prefersReduced ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-6 justify-center lg:justify-start"
              variants={heroTextItem}
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
                whileHover={prefersReduced ? undefined : { scale: 1.15 }}
                whileTap={prefersReduced ? undefined : { scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
              >
                <FiGithub size={22} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
                whileHover={prefersReduced ? undefined : { scale: 1.15 }}
                whileTap={prefersReduced ? undefined : { scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
              >
                <FiLinkedin size={22} />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="Email"
                whileHover={prefersReduced ? undefined : { scale: 1.15 }}
                whileTap={prefersReduced ? undefined : { scale: 0.9 }}
                transition={{ type: "spring", stiffness: 500, damping: 18 }}
              >
                <FiMail size={22} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            variants={profileEntrance}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              animate={prefersReduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            >
              {/* Rotating conic glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-full opacity-20"
                style={{
                  background: "conic-gradient(from 0deg, #6366f1, #a78bfa, #6366f1)",
                  filter: "blur(12px)",
                }}
                animate={prefersReduced ? undefined : { rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              />
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl scale-125" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-surface-2">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  style={{ left: '17px' }}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={prefersReduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        >
          <a
            href="#about"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
