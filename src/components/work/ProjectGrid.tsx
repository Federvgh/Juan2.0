"use client";

import { projects, featuredProject } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { FeaturedCard } from "./FeaturedCard";
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

  const featuredDict =
    dict.projects[featuredProject.slug as keyof typeof dict.projects];

  return (
    <div>
      {/* Featured project — full width hero */}
      <ScrollReveal>
        <FeaturedCard
          project={featuredProject}
          title={featuredDict?.title ?? featuredProject.slug}
          subtitle={featuredDict?.subtitle ?? ""}
          locale={locale}
        />
      </ScrollReveal>

      {/* Regular projects grid */}
      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {projects.map((project, i) => {
          const projectDict =
            dict.projects[project.slug as keyof typeof dict.projects];

          return (
            <ScrollReveal key={project.slug} delay={i * 0.05}>
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
    </div>
  );
}
