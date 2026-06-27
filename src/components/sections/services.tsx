import { ArchitectureIcon, ConstructionIcon, InteriorIcon, TurnkeyIcon } from "@/components/icons";
import { splitChars } from "@/lib/split-chars";
import { services } from "@/lib/site-data";

export function Services() {
  const icons = [ArchitectureIcon, ConstructionIcon, InteriorIcon, TurnkeyIcon];

  return (
    <section id="services" className="px-4 sm:px-8 md:px-12 xl:px-20 py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" data-reveal>
          <p className="text-eyebrow mb-4">What we do</p>
          <h2 data-split className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            {splitChars("We will help you build your dream home.")}
          </h2>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            We are experienced architectural consultants who make your dream of a beautiful, luxurious home a reality —
            delivering aesthetically appealing high-end residential spaces worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i] || Compass;
            return (
              <article
                key={service.title}
                data-reveal
                className="group border border-border/10 bg-background/40 p-6 sm:p-8 hover:border-[#C8A45D]/50 transition-colors"
              >
                <div className="flex items-center justify-end mb-6 sm:mb-8">
                  <div className="w-12 h-12 rounded-full border border-border/20 flex items-center justify-center group-hover:border-[#C8A45D]/50 group-hover:bg-[#C8A45D]/10 transition-all duration-300">
                    <Icon className="text-foreground/50 group-hover:text-[#C8A45D] transition-colors" size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-display text-3xl mb-4 group-hover:text-[#C8A45D] transition-colors">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
