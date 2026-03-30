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
    <nav className="flex justify-center gap-16 px-6 py-24">
      {prev ? (
        <Link
          href={`/${locale}/work/${prev.slug}/`}
          className="group block text-right transition-colors"
        >
          <span className="block text-lg font-medium text-[#666] group-hover:text-foreground transition-colors">
            &larr; Previous Project
          </span>
          <span className="block text-xs text-[#aaa] mt-1.5">
            {dict.projects[prev.slug as keyof typeof dict.projects]?.title ??
              prev.slug}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${locale}/work/${next.slug}/`}
          className="group block transition-colors"
        >
          <span className="block text-lg font-medium text-[#666] group-hover:text-foreground transition-colors">
            Next Project &rarr;
          </span>
          <span className="block text-xs text-[#aaa] mt-1.5">
            {dict.projects[next.slug as keyof typeof dict.projects]?.title ??
              next.slug}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
