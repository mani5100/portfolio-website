import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Skills",       href: "#skills" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Education",    href: "#education" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-10 px-4">
      <div className="container-max">

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-primary transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            Designed &amp; Built by{" "}
            <span className="text-primary font-medium">{personalInfo.name}</span>
            {" "}· © {year}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors duration-200"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors duration-200"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
