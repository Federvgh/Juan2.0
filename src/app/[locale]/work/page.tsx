import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ProjectGrid } from "@/components/work/ProjectGrid";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section className="px-8 md:px-12 lg:px-20 pb-24">
      <ProjectGrid dict={dict} locale={locale} />
    </section>
  );
}
