import { Link } from "@tanstack/react-router";
import { splitChars } from "@/lib/split-chars";
import { projects } from "@/lib/site-data";

type ProjectsGridProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function ProjectsGrid({ limit, showViewAll = false }: ProjectsGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="px-8 md:px-12 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16" data-reveal>
          <div>
            <p className="text-eyebrow mb-3">Our Projects</p>
            <h2 data-split className="font-display text-5xl md:text-7xl">
              {splitChars("From vision to reality.")}
            </h2>
            <p className="text-foreground/60 mt-4 max-w-xl">
              On time and with unwavering commitment. Explore our newest residential commissions.
            </p>
          </div>
          {showViewAll && (
            <Link to="/projects" className="text-meta border-b border-[#C8A45D] text-[#C8A45D] pb-2 hover:text-foreground hover:border-border w-fit">
              View all projects →
            </Link>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project) => (
            <article key={project.slug} data-reveal className="group relative aspect-[4/5] overflow-hidden bg-background">
              <img
                src={project.img}
                alt={project.client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-2xl md:text-3xl">{project.client}</h3>
                <p className="text-meta mt-1 text-foreground/70">{project.location}</p>
                <Link
                  to="/projects"
                  className="mt-4 text-meta text-[#C8A45D] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                >
                  View project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
