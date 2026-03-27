interface StructuredDataProps {
  data: Record<string, unknown>;
}

// Safe: data is hardcoded structured data from our own code, not user input
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Pablo Tazzioli",
    jobTitle: "Industrial Designer",
    url: "https://juanpablotazzioli.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Industrial Design",
      "Automotive Interior Design",
      "Product Design",
      "3D Modeling",
    ],
  };
}

export function projectSchema(project: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Juan Pablo Tazzioli",
    },
    image: `https://juanpablotazzioli.com${project.image}`,
    url: `https://juanpablotazzioli.com/en/work/${project.slug}/`,
  };
}
