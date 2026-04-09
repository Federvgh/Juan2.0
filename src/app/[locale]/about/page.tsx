import Image from "next/image";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetUrl } from "@/lib/utils";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const a = dict.about;

  return (
    <section className="px-6 pb-24 max-w-5xl mx-auto">
      {/* Hero: photo + bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16">
        <ScrollReveal>
          <div className="relative aspect-[3/4] w-full max-w-sm">
            <Image
              src={assetUrl("/images/about/profile.png")}
              alt="Juan Pablo Tazzioli"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
            {a.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed">{a.subtitle}</p>
          <p className="mt-4 text-sm font-semibold text-neutral-500">
            {a.availability}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted whitespace-pre-line">
            {a.bio}
          </p>
          <p className="mt-4 text-xs text-muted">{a.location}</p>
        </ScrollReveal>
      </div>

      {/* Selected Experience */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-8">
          {a.selectedExperience}
        </h2>
      </ScrollReveal>
      <div className="space-y-16 mb-16">
        {a.experiences.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 0.05}>
            <div>
              <h3 className="text-base font-semibold">{exp.company}</h3>
              <p className="text-sm text-muted mt-1">
                {exp.role} — {exp.location} | {exp.period}
              </p>
              <p className="text-sm mt-2 leading-relaxed text-muted">
                {exp.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Selected Services */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.selectedServices}
        </h2>
      </ScrollReveal>
      <div className="space-y-2 mb-16">
        {a.serviceItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <p className="text-sm text-muted">{item}</p>
          </ScrollReveal>
        ))}
      </div>

      {/* Skills / Tools */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.skillsTools}
        </h2>
      </ScrollReveal>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16">
        {a.skillItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <span className="text-sm text-muted">{item}</span>
          </ScrollReveal>
        ))}
      </div>

      {/* Languages */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.languages}
        </h2>
      </ScrollReveal>
      <div className="space-y-2 mb-16">
        {a.languageItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <p className="text-sm text-muted">{item}</p>
          </ScrollReveal>
        ))}
      </div>

      {/* Links */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.links ?? "Links"}
        </h2>
      </ScrollReveal>
      <div className="space-y-2">
        <ScrollReveal delay={0.05}>
          <a
            href="https://www.linkedin.com/in/juanpablotazzioli/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:text-muted transition-colors"
          >
            LinkedIn
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <a
            href="/portfolio.pdf"
            download
            className="text-sm underline hover:text-muted transition-colors block"
          >
            Download PDF Portfolio
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
