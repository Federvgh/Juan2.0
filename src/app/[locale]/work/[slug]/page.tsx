import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { projects, featuredProject, getProject, getAdjacentProjects } from "@/lib/projects";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectFooter } from "@/components/project/ProjectFooter";
import { BlockRenderer } from "@/components/project/BlockRenderer";
import { ProjectNav } from "@/components/project/ProjectNav";
import {
  StructuredData,
  projectSchema,
} from "@/components/seo/StructuredData";

export function generateStaticParams() {
  const allProjects = [featuredProject, ...projects];
  return locales.flatMap((locale) =>
    allProjects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const p = dict.projects[slug as keyof typeof dict.projects];
  const project = getProject(slug);

  return {
    title: p?.title ?? slug,
    description: p?.description ?? "",
    openGraph: {
      title: p?.title ?? slug,
      description: p?.subtitle ?? "",
      images: project ? [{ url: project.thumbnail.src }] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const dict = await getDictionary(locale);
  const projectDict =
    dict.projects[slug as keyof typeof dict.projects];
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="pb-8">
      <StructuredData
        data={projectSchema({
          title: projectDict?.title ?? slug,
          description: projectDict?.description ?? "",
          slug,
          image: project.thumbnail.src,
        })}
      />
      <ProjectHeader
        title={projectDict?.title ?? slug}
        subtitle={projectDict?.subtitle ?? ""}
        description={projectDict?.description ?? ""}
        myContribution={projectDict?.myContribution ?? ""}
        process={projectDict?.process ?? ""}
        hideContribution
      />

      {project.blocks.map((block) => (
        <BlockRenderer key={block._key} block={block} />
      ))}

      <ProjectFooter
        myContribution={projectDict?.myContribution ?? ""}
        process={projectDict?.process ?? ""}
      />

      <ProjectNav prev={prev} next={next} locale={locale} dict={dict} />
    </article>
  );
}
