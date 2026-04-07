import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProjectFooterProps {
  myContribution: string;
  process: string;
}

export function ProjectFooter({ myContribution, process }: ProjectFooterProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 mt-12">
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide">
          My Contribution
        </h2>
        <p className="mt-3 text-base leading-relaxed">{myContribution}</p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="mt-10 text-sm font-bold uppercase tracking-wide">
          Process
        </h2>
        <p className="mt-3 text-base leading-relaxed">{process}</p>
      </ScrollReveal>
    </div>
  );
}
