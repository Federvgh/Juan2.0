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
    <nav className="flex justify-center gap-24 md:gap-32 items-start max-w-3xl mx-auto px-6 py-24">
      {prev ? (
        <Link
          href={`/${locale}/work/${prev.slug}/`}
          className="group text-center transition-colors"
        >
          <span className="text-base text-[#888] group-hover:text-foreground transition-colors">
            &larr; Previous Project
          </span>
          <p className="text-sm text-muted mt-1">
            {dict.projects[prev.slug as keyof typeof dict.projects]?.title ??
              prev.slug}
          </p>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${locale}/work/${next.slug}/`}
          className="group text-center transition-colors"
        >
          <span className="text-base text-[#888] group-hover:text-foreground transition-colors">
            Next Project &rarr;
          </span>
          <p className="text-sm text-muted mt-1">
            {dict.projects[next.slug as keyof typeof dict.projects]?.title ??
              next.slug}
          </p>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
