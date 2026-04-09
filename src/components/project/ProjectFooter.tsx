import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProjectFooterProps {
  myContribution: string;
  process: string;
}

export function ProjectFooter({ myContribution, process }: ProjectFooterProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 mt-12">
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-500">
          My Contribution
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{myContribution}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="mt-10 text-sm font-bold uppercase tracking-wide text-neutral-500">
          Process
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">{process}</p>
      </ScrollReveal>
    </div>
  );
}
