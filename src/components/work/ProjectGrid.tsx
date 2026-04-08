"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

interface ProjectGridProps {
  dict: Dictionary;
  locale: string;
  columns?: 2 | 3;
}

export function ProjectGrid({ dict, locale, columns = 3 }: ProjectGridProps) {
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-14`}>
      {projects.map((project, i) => {
        const projectDict =
          dict.projects[project.slug as keyof typeof dict.projects];

        const isLastRow =
          columns === 3
            ? i >= projects.length - (projects.length % 3 || 3)
            : i >= projects.length - (projects.length % 2 || 2);
        const itemsInLastRow =
          columns === 3
            ? projects.length % 3 || 3
            : projects.length % 2 || 2;
        const shouldCenter = isLastRow && itemsInLastRow < (columns === 3 ? 3 : 2);

        return (
          <ScrollReveal
            key={project.slug}
            delay={i * 0.05}
            className={shouldCenter && columns === 3 && itemsInLastRow === 1 ? "lg:col-start-2" : ""}
          >
            <ProjectCard
              project={project}
              title={projectDict?.title ?? project.slug}
              subtitle={projectDict?.subtitle ?? ""}
              locale={locale}
              priority={i < 3}
            />
          </ScrollReveal>
        );
      })}
    </div>
  );
}
