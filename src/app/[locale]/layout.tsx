import { locales } from "@/lib/i18n/config";
import { Header } from "@/components/layout/Header";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div lang={locale}>
      <Header />
      <main className="pt-24">{children}</main>
    </div>
  );
}
