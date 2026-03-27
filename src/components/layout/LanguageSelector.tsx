"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n/config";

interface LanguageSelectorProps {
  locale: string;
}

export function LanguageSelector({ locale }: LanguageSelectorProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    const newPath = pathname.replace(/^\/(en|es|it)/, `/${newLocale}`);
    router.push(newPath);
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="text-muted mx-1">/</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`uppercase transition-colors duration-200 ${
              locale === loc
                ? "text-foreground font-bold"
                : "text-muted hover:text-foreground"
            }`}
            aria-label={`Switch to ${loc}`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
