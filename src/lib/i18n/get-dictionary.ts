import { defaultLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
  it: () => import("./dictionaries/it").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const key = (locale in dictionaries ? locale : defaultLocale) as Locale;
  return dictionaries[key]();
}
