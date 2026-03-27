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
          <p className="mt-6 text-base leading-relaxed">{a.bio}</p>
          <p className="mt-4 text-sm text-muted">{a.location}</p>
        </ScrollReveal>
      </div>

      {/* Selected Experience */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-8">
          {a.selectedExperience}
        </h2>
      </ScrollReveal>
      <div className="space-y-8 mb-16">
        {a.experiences.map((exp, i) => (
          <ScrollReveal key={exp.company} delay={i * 0.05}>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                <h3 className="text-base font-semibold">{exp.company}</h3>
                <span className="text-xs text-muted">{exp.period}</span>
              </div>
              <p className="text-sm text-muted mt-1">
                {exp.role} — {exp.location}
              </p>
              <p className="text-sm mt-2 leading-relaxed">{exp.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Education */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.education}
        </h2>
      </ScrollReveal>
      <div className="space-y-2 mb-16">
        {a.educationItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <p className="text-sm">{item}</p>
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
            <p className="text-sm">{item}</p>
          </ScrollReveal>
        ))}
      </div>

      {/* Focus */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.focus}
        </h2>
      </ScrollReveal>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16">
        {a.focusItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <span className="text-sm">{item}</span>
          </ScrollReveal>
        ))}
      </div>

      {/* In Process */}
      <ScrollReveal>
        <h2 className="text-sm font-bold uppercase tracking-wide mb-6">
          {a.inProcess}
        </h2>
        <p className="text-sm text-muted">{a.inProcessDescription}</p>
      </ScrollReveal>
    </section>
  );
}
