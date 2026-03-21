import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-2">
        Portfolio
      </p>
      <h1 className="text-3xl font-semibold tracking-tight mb-12">Works</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/works/${project.slug}`}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg bg-surface">
              <Image
                src={project.heroImage}
                alt={`${project.title} — ${project.category}`}
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-medium">{project.title}</h2>
              <p className="text-sm text-muted-foreground">
                {project.category} — {project.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
