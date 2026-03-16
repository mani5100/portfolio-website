import { publications } from "@/data/portfolio";
import { FiExternalLink } from "react-icons/fi";

const publisherColor: Record<string, string> = {
  IEEE: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Wiley: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Springer: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function Publications() {
  return (
    <section id="publications" className="section-padding">
      <div className="container-max">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary font-mono text-sm mb-2 tracking-wider uppercase">
            Research output
          </p>
          <h2 className="section-title">Publications</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <p className="text-text-secondary max-w-xl">
            6 peer-reviewed papers as an undergraduate across IEEE, Wiley, and
            Springer — covering AI surveillance, deepfake detection, medical
            imaging, satellite imagery analysis, and agricultural AI.
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div
              key={pub.id}
              className="card flex gap-5 items-start group hover:border-primary/40 transition-all duration-300"
            >
              {/* Index */}
              <span className="font-mono text-text-muted text-sm flex-shrink-0 pt-0.5">
                [{String(index + 1).padStart(2, "0")}]
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-text-primary font-medium leading-snug mb-2 group-hover:text-primary-light transition-colors">
                  {pub.title}
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block ml-2 text-text-muted hover:text-primary"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </h3>
                <p className="text-text-muted text-sm">
                  <span className="text-accent">{pub.venue}</span>
                  {" · "}
                  {pub.year}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-2 flex-shrink-0 items-end">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                    publisherColor[pub.publisher] || "tag"
                  }`}
                >
                  {pub.publisher}
                </span>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full border ${
                    pub.status === "Published"
                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                      : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                  }`}
                >
                  {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
