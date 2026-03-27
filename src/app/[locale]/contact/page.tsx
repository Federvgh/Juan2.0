import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="px-6 min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto">
        <ScrollReveal>
          <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {c.description}
          </p>
        </ScrollReveal>

        <dl className="mt-10 space-y-5">
          <ScrollReveal delay={0.1}>
            <dt className="text-xs font-bold uppercase tracking-wide">
              {c.email}
            </dt>
            <dd className="mt-1">
              <a
                href="mailto:juanpablotazzioli@gmail.com"
                className="text-sm underline hover:text-muted transition-colors"
              >
                juanpablotazzioli@gmail.com
              </a>
            </dd>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <dt className="text-xs font-bold uppercase tracking-wide">
              {c.linkedin}
            </dt>
            <dd className="mt-1">
              <a
                href="https://www.linkedin.com/in/juanpablotazzioli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-muted transition-colors"
              >
                LinkedIn Profile
              </a>
            </dd>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <dt className="text-xs font-bold uppercase tracking-wide">
              {c.locationLabel}
            </dt>
            <dd className="mt-1 text-sm">{c.locationValue}</dd>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <dt className="text-xs font-bold uppercase tracking-wide">
              {c.portfolio}
            </dt>
            <dd className="mt-1">
              <a
                href="/portfolio.pdf"
                download
                className="text-sm underline hover:text-muted transition-colors"
              >
                {c.downloadPortfolio}
              </a>
            </dd>
          </ScrollReveal>
        </dl>
      </div>
    </section>
  );
}
