import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            What I&apos;ve built
          </p>
          <h2 className="section-title">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Placeholder */}
                <div className="flex-1 w-full">
                  <div className="w-full aspect-video bg-surface-2 rounded-xl border border-border flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-text-muted font-mono text-sm">
                        {project.title}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <p className="text-primary font-mono text-xs mb-2 uppercase tracking-wider">
                    Featured Project
                  </p>
                  <h3 className="text-text-primary text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <div className="card mb-4">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-6 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "lg:justify-end" : ""
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={22} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-text-secondary text-center font-mono text-sm uppercase tracking-wider mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="card flex flex-col group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="tag">{project.category}</span>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-primary transition-colors"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-text-primary font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-xs text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
