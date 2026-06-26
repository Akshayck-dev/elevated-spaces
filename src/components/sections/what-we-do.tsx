import { splitChars } from "@/lib/split-chars";

export function WhatWeDo() {
  const points = [
    "We craft beautiful, inspiring spaces that open a property's full potential.",
    "We manage every stage of construction, from design to completion, offering exceptional project management that saves time and money.",
    "We aim to make your home a place you love by creating timeless, elegant interiors that balance quality and comfort.",
    "We handle residential projects of all sizes on a turnkey basis, managing every stage from engineering to construction.",
  ];

  return (
    <section className="px-8 md:px-12 py-32 border-y border-border/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div data-reveal>
          <p className="text-eyebrow mb-4">What we do</p>
          <h2 data-split className="font-display text-5xl md:text-7xl leading-tight">
            {splitChars("We Build Your Dream Home")}
          </h2>
        </div>
        <div className="space-y-6">
          {points.map((point, i) => (
            <p key={i} data-reveal className="text-foreground/70 leading-relaxed border-l border-[#C8A45D]/40 pl-6">
              {point}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
