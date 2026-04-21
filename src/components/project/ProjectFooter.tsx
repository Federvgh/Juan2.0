import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ExternalLink } from "@/lib/types";

interface ProjectFooterProps {
  myContribution: string;
  process: string;
  externalLinks?: ExternalLink[];
}

export function ProjectFooter({
  myContribution,
  process,
  externalLinks,
}: ProjectFooterProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 mt-12">
      <ScrollReveal>
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500">
          My Contribution
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{myContribution}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="mt-10 text-sm font-medium uppercase tracking-wide text-neutral-500">
          Process
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{process}</p>
      </ScrollReveal>

      {externalLinks && externalLinks.length > 0 && (
        <ScrollReveal delay={0.2}>
          <div className="mt-10 space-y-2">
            {externalLinks.map((link) => (
              <div key={link.url}>
                <p className="text-sm uppercase tracking-wide text-neutral-500">
                  {link.kind === "official" ? "Official Link" : "Video Reference"}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-muted transition-colors"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
}
