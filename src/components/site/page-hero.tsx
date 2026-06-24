import { splitChars } from "@/lib/split-chars";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="pt-40 pb-16 px-8 md:px-12">
      <p className="text-eyebrow mb-4" data-reveal>
        {eyebrow}
      </p>
      <h1 data-split className="font-display text-6xl md:text-8xl leading-[0.95]">
        {splitChars(title)}
      </h1>
      {description && (
        <p className="text-white/60 max-w-xl mt-8 leading-relaxed" data-reveal>
          {description}
        </p>
      )}
    </section>
  );
}
