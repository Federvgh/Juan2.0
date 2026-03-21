import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, getAdjacentProjects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div>
      {/* Hero */}
      <div className="w-full">
        <Image
          src={project.heroImage}
          alt={`${project.title} — ${project.category}`}
          width={1920}
          height={1080}
          className="w-full h-[50vh] md:h-[70vh] object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">
          {project.category}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight mb-2">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {project.location} — {project.year}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground max-w-2xl mb-16">
          {project.description}
        </p>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`${project.title} — image ${i + 1}`}
              width={800}
              height={600}
              className="w-full rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
          {prev && (
            <Link
              href={`/works/${prev.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              &larr; {prev.title}
            </Link>
          )}
          <div />
          {next && (
            <Link
              href={`/works/${next.slug}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {next.title} &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
