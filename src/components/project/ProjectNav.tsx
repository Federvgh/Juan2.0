import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectNavProps {
  prev: Project | undefined;
  next: Project | undefined;
  locale: string;
}

export function ProjectNav({ prev, next, locale }: ProjectNavProps) {
  return (
    <nav className="flex justify-center gap-8 md:gap-16 px-6 py-16 md:py-24">
      {prev ? (
        <Link
          href={`/${locale}/work/${prev.slug}/`}
          className="text-lg font-medium text-[#666] hover:text-foreground transition-colors"
        >
          &larr; Previous
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/${locale}/work/${next.slug}/`}
          className="text-lg font-medium text-[#666] hover:text-foreground transition-colors"
        >
          Next &rarr;
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
