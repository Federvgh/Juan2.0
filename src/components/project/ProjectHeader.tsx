import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  myContribution: string;
  process: string;
  hideContribution?: boolean;
}

export function ProjectHeader({
  title,
  subtitle,
  description,
  myContribution,
  process,
  hideContribution = false,
}: ProjectHeaderProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 mb-12">
      <ScrollReveal>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-muted mt-2">{subtitle}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="mt-8 text-base leading-relaxed">{description}</p>
      </ScrollReveal>

      {!hideContribution && (
        <>
          <ScrollReveal delay={0.2}>
            <h2 className="mt-10 text-sm font-bold uppercase tracking-wide">
              My Contribution
            </h2>
            <p className="mt-3 text-base leading-relaxed">{myContribution}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h2 className="mt-10 text-sm font-bold uppercase tracking-wide">
              Process
            </h2>
            <p className="mt-3 text-base leading-relaxed">{process}</p>
          </ScrollReveal>
        </>
      )}
    </div>
  );
}
