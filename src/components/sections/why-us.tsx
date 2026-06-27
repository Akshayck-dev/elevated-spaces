import { splitChars } from "@/lib/split-chars";
import { whyPillars } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section id="about" className="px-4 sm:px-8 md:px-12 xl:px-20 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" data-reveal>
          <p className="text-eyebrow mb-4">Why Maison Noire</p>
          <h2 data-split className="font-display text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
            {splitChars("Experience, excellence and commitment.")}
          </h2>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            Guided by years of experience, we build customised luxurious homes which suit your needs and personality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {whyPillars.map((pillar, i) => (
            <article key={pillar.title} data-reveal className="border border-border/10 p-6 sm:p-8 md:p-10 hover:bg-white/[0.02] transition-colors">
              <span className="text-eyebrow text-[#C8A45D]">0{i + 1}</span>
              <h3 className="font-display text-3xl md:text-4xl mt-4 mb-2">{pillar.title}</h3>
              <p className="text-meta text-foreground/50 mb-4">{pillar.subtitle}</p>
              <p className="text-foreground/60 leading-relaxed text-sm md:text-base">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
