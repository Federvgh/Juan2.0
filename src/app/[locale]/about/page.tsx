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
    <section className="px-6 pb-24 max-w-6xl mx-auto">
      {/* Hero: photo + name + bio */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.4fr)] gap-10 md:gap-16 mb-20 md:mb-24">
        <ScrollReveal>
          <div className="relative aspect-[3/4] w-full max-w-sm md:max-w-none">
            <Image
              src={assetUrl("/images/about/profile.png")}
              alt="Juan Pablo Tazzioli"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale"
              priority
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="md:pt-12">
            <h1 className="text-center uppercase tracking-[0.25em] text-sm md:text-base">
              {a.title}
            </h1>
            <p className="mt-4 text-center text-lg md:text-xl">{a.subtitle}</p>
            <p className="mt-10 md:mt-14 text-sm leading-relaxed text-justify">
              {a.bio}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Two-col grid: experience (left) + education/tools/languages/focus (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left column: Selected Experience */}
        <div>
          <ScrollReveal>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-8">
              {a.selectedExperience}
            </h2>
          </ScrollReveal>
          <div className="space-y-10">
            {a.experiences.map((exp, i) => (
              <ScrollReveal key={exp.company + i} delay={i * 0.05}>
                <div>
                  <h3 className="text-sm">
                    {exp.company} — {exp.role}
                  </h3>
                  <p className="text-sm mt-1">
                    {exp.location} | {exp.period}
                  </p>
                  <p className="text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right column: Education, Tools, Languages, Focus */}
        <div className="space-y-10">
          {/* Education */}
          <ScrollReveal>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">
              {a.education}
            </h2>
            <div className="space-y-3">
              {a.educationItems.map((item, i) => (
                <div key={i}>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-sm">{item.institution}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Selected Tools */}
          <ScrollReveal delay={0.05}>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">
              {a.selectedTools}
            </h2>
            <p className="text-sm leading-relaxed">{a.toolsText}</p>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">
              {a.languages}
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {a.languageItems.map((item, i) => (
                <span key={i} className="text-sm">
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Areas of Focus */}
          <ScrollReveal delay={0.15}>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-4">
              {a.areasOfFocus}
            </h2>
            <p className="text-sm leading-relaxed">{a.focusText}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
