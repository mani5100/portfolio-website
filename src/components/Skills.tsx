import { skills } from "@/data/portfolio";

const levelColor: Record<string, string> = {
  Beginner: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Advanced: "bg-primary/20 text-primary-light border-primary/30",
  Expert: "bg-accent/20 text-accent border-accent/30",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            What I work with
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card">
              <h3 className="text-text-primary font-semibold mb-4 pb-3 border-b border-border">
                {skillGroup.category}
              </h3>
              <div className="flex flex-col gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-text-secondary text-sm">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${
                          levelColor[skill.level] || levelColor["Intermediate"]
                        }`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
