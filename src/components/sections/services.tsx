import { splitChars } from "@/lib/split-chars";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="px-8 md:px-12 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20" data-reveal>
          <p className="text-eyebrow mb-4">What we do</p>
          <h2 data-split className="font-display text-5xl md:text-7xl mb-6">
            {splitChars("We will help you build your dream home.")}
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            We are experienced architectural consultants who make your dream of a beautiful, luxurious home a reality —
            delivering aesthetically appealing high-end residential spaces worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              data-reveal
              className="group border border-border/10 bg-background/40 p-8 hover:border-[#C8A45D]/50 transition-colors"
            >
              <span className="text-eyebrow text-[#C8A45D]">0{i + 1}</span>
              <h3 className="font-display text-3xl mt-4 mb-4 group-hover:text-[#C8A45D] transition-colors">{service.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
