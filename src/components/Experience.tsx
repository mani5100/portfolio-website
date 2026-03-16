import { experiences } from "@/data/portfolio";
import { FiCalendar, FiMapPin } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            Where I&apos;ve worked
          </p>
          <h2 className="section-title">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 pt-6 justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/30 relative z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 card hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-text-primary font-semibold text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-text-muted">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
