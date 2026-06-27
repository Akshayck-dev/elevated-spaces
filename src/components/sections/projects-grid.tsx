import { Link } from "@tanstack/react-router";
import { splitChars } from "@/lib/split-chars";
import { projects } from "@/lib/site-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectsGridProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function ProjectsGrid({ limit, showViewAll = false }: ProjectsGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16" data-reveal>
            <div>
              <p className="text-eyebrow mb-3">Our Projects</p>
              <h2 data-split className="font-display text-4xl md:text-5xl lg:text-7xl">
                {splitChars("From vision to reality.")}
              </h2>
              <p className="text-foreground/60 mt-4 max-w-xl">
                On time and with unwavering commitment. Explore our newest residential commissions.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {showViewAll && (
                <Link to="/projects" className="text-meta border-b border-[#C8A45D] text-[#C8A45D] pb-2 pt-2 hover:text-foreground hover:border-border w-fit inline-block mr-2 lg:mr-4">
                  View all projects →
                </Link>
              )}
              {/* Navigation Buttons */}
              <div className="hidden md:flex gap-2 relative">
                <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 bg-background border-border hover:bg-surface hover:text-[#C8A45D] transition-colors" />
                <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 bg-background border-border hover:bg-surface hover:text-[#C8A45D] transition-colors" />
              </div>
            </div>
          </div>

          <CarouselContent className="-ml-4 sm:-ml-6">
            {items.map((project) => (
              <CarouselItem key={project.slug} className="pl-4 sm:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <article className="group relative aspect-[4/5] rounded-2xl overflow-hidden h-full shadow-lg cursor-grab active:cursor-grabbing">
                  <img
                    src={project.img}
                    alt={project.client}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-display text-3xl md:text-4xl text-white mb-2">{project.client}</h3>
                      <p className="text-white/80 font-light tracking-wide">{project.location}</p>
                      <Link
                        to="/projects"
                        className="mt-6 py-2 text-[#C8A45D] opacity-0 group-hover:opacity-100 transition-all duration-500 inline-block font-medium uppercase tracking-widest text-xs lg:text-sm"
                      >
                        View project →
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
