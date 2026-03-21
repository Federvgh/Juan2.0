interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={i} className="relative pl-8">
            {/* Dot */}
            <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-foreground bg-background" />

            <p className="text-xs font-mono text-muted-foreground mb-1">
              {item.year}
            </p>
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
