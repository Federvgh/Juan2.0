import Link from "next/link";
import type { Project } from "@/lib/types";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

interface ProjectNavProps {
  prev: Project | undefined;
  next: Project | undefined;
  locale: string;
  dict: Dictionary;
}

export function ProjectNav({ prev, next, locale, dict }: ProjectNavProps) {
  return (
    <nav className="flex justify-between items-center max-w-3xl mx-auto px-6 py-16 border-t border-border">
      {prev ? (
        <Link
          href={`/${locale}/work/${prev.slug}/`}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          &larr;{" "}
          {dict.projects[prev.slug as keyof typeof dict.projects]?.title ??
            prev.slug}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${locale}/work/${next.slug}/`}
          className="text-sm text-muted hover:text-foreground transition-colors text-right"
        >
          {dict.projects[next.slug as keyof typeof dict.projects]?.title ??
            next.slug}{" "}
          &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
