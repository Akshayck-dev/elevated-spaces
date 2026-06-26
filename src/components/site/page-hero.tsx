import { splitChars } from "@/lib/split-chars";

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description?: string; image?: string }) {
  return (
    <section className="pt-40 pb-16 px-8 md:px-12 relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-eyebrow mb-4" data-reveal>
          {eyebrow}
        </p>
        <h1 data-split className="font-display text-6xl md:text-8xl leading-[0.95]">
          {splitChars(title)}
        </h1>
        {description && (
          <p className="text-foreground/60 max-w-xl mt-8 leading-relaxed" data-reveal>
            {description}
          </p>
        )}
      </div>

      {image && (
        <div className="mt-16 w-full aspect-[21/9] overflow-hidden relative" data-reveal>
          <div className="absolute inset-0 w-full h-[120%] -top-[10%]" data-parallax="0.15">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-background/20" />
        </div>
      )}
    </section>
  );
}
