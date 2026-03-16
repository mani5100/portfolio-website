import { personalInfo } from "@/data/portfolio";
import { FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const stats = [
  { label: "Published Papers", value: "6" },
  { label: "Class Rank", value: "2nd" },
  { label: "CGPA", value: "3.90" },
  { label: "Certifications", value: "9" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            Get to know me
          </p>
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Recent BSCS graduate (ranked 2nd, CGPA 3.90) from the University
              of Lahore. As a research assistant at{" "}
              <span className="text-primary font-medium">VLCMatrix Lab</span>,
              I developed and evaluated deep learning models for medical
              imaging, deepfake detection, and intelligent surveillance.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              I&apos;ve independently shipped a RAG system for document Q&A, a
              multi-agent code generation pipeline, and an edge-deployed
              AI surveillance system on Raspberry Pi. I am currently building
              production AI at{" "}
              <span className="text-primary font-medium">Digitalytics</span>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              My work spans the full research-to-production pipeline — from
              authoring papers in IEEE, Springer, and Wiley journals, to
              shipping real systems that run on real hardware.
            </p>

            {/* Contact Details */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-text-secondary">
                <FiMapPin className="text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <FiMail className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div className="flex items-center gap-3 text-text-secondary">
                  <FiPhone className="text-primary flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-text-secondary">
                <FiGithub className="text-primary flex-shrink-0" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/mani5100
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <FiLinkedin className="text-primary flex-shrink-0" />
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/abdulrehmanshoukat
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card text-center hover:scale-105 transition-transform duration-300 hover:border-primary/50"
              >
                <p className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            ))}

            {/* Publisher Badges */}
            <div className="col-span-2 card">
              <p className="text-text-muted text-xs uppercase tracking-wider mb-3 font-mono">
                Published in
              </p>
              <div className="flex flex-wrap gap-2">
                {["IEEE ×4", "Wiley", "Springer"].map((pub) => (
                  <span key={pub} className="tag">
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
