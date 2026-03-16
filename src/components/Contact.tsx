import { personalInfo } from "@/data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            Get in touch
          </p>
          <h2 className="section-title">Contact</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-text-secondary text-lg leading-relaxed mb-10">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project in mind, or just want to say hi — my inbox is
            always open!
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary text-lg px-8 py-4 mb-12 mx-auto"
          >
            <FiMail size={20} />
            Say Hello
          </a>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            {/* Email */}
            <div className="card flex items-center gap-3 min-w-[220px]">
              <FiMail className="text-primary flex-shrink-0" size={18} />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-secondary hover:text-primary transition-colors text-sm"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Location */}
            <div className="card flex items-center gap-3 min-w-[220px]">
              <FiMapPin className="text-primary flex-shrink-0" size={18} />
              <span className="text-text-secondary text-sm">
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-10">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 hover:border-primary/50 hover:text-primary text-text-secondary transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-4 hover:border-primary/50 hover:text-primary text-text-secondary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="card p-4 hover:border-primary/50 hover:text-primary text-text-secondary transition-all duration-300"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
