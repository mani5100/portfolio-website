"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-24"
    >
      <div className="container-max w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href={personalInfo.cvUrl} download className="btn-outline">
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FiMail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl scale-110" />
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
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <a
            href="#about"
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
