import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-8 px-4">
      <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>
          Designed &amp; Built by{" "}
          <span className="text-primary font-medium">{personalInfo.name}</span>
        </p>
        <p>© {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
