import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetUrl } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/juan-pablo-tazzioli-629b8565/";
const EMAIL = "juanpablotazzioli@gmail.com";
const PHONE = "+34603503082";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const c = dict.contact;

  return (
    <section className="px-6 pb-24 pt-8 md:pt-16 max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="text-2xl md:text-4xl leading-snug text-center max-w-4xl mx-auto mb-20 md:mb-32">
          {c.description}
        </p>
      </ScrollReveal>

      <div className="flex justify-center md:justify-end">
        <dl className="space-y-8 md:mr-12 lg:mr-24">
          <ScrollReveal delay={0.1}>
            <dt className="text-sm font-semibold">{c.email}</dt>
            <dd className="mt-2">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm hover:underline transition-colors"
              >
                {EMAIL}
              </a>
            </dd>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <dt className="text-sm font-semibold">{c.linkedin}</dt>
            <dd className="mt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline transition-colors"
              >
                {c.linkedin}
              </a>
            </dd>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <dt className="text-sm font-semibold">{c.phone}</dt>
            <dd className="mt-2">
              <a
                href={`tel:${PHONE}`}
                className="text-sm hover:underline transition-colors"
              >
                {PHONE}
              </a>
            </dd>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <dt className="text-sm font-semibold">{c.locationLabel}</dt>
            <dd className="mt-2 text-sm">{c.locationValue}</dd>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <dt className="text-sm font-semibold">{c.portfolio}</dt>
            <dd className="mt-2">
              <a
                href={assetUrl("/JuanPabloTazzioli_Portfolio_2026.pdf")}
                download
                className="text-sm hover:underline transition-colors"
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
