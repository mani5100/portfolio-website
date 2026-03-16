import { education, certifications } from "@/data/portfolio";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            Academic background
          </p>
          <h2 className="section-title">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-text-primary font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="text-primary">▹</span> Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="card">
                  <h4 className="text-text-primary font-semibold text-lg">
                    {edu.degree} in {edu.field}
                  </h4>
                  <p className="text-primary font-medium mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-text-muted text-sm">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} />
                      {edu.startDate} — {edu.endDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} />
                      {edu.location}
                    </span>
                  </div>
                  {edu.grade && (
                    <p className="mt-2 text-text-secondary text-sm">
                      Grade: <span className="text-accent">{edu.grade}</span>
                    </p>
                  )}
                  {edu.description && (
                    <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-text-primary font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="text-primary">▹</span> Certifications
            </h3>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="card flex items-start gap-4">
                    <FiAward className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="text-text-primary font-semibold">
                        {cert.name}
                      </h4>
                      <p className="text-primary text-sm mt-1">{cert.issuer}</p>
                      <p className="text-text-muted text-xs mt-1">{cert.date}</p>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-light text-xs hover:underline mt-1 inline-block"
                        >
                          View Credential →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card text-center text-text-muted py-12">
                Certifications coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
