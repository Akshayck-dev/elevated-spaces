import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import { Magnetic } from "@/components/site/magnetic";
import { splitChars } from "@/lib/split-chars";

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-meta mb-2">{label}</p>
      <p className="font-display text-2xl">{value}</p>
    </div>
  );
}

export function Showcase() {
  const items = [
    {
      img: project1,
      n: "01",
      t: "Villa Aurelia",
      loc: "Lake Como, IT",
      area: "1,240 m²",
      style: "Contemporary Mediterranean",
      date: "Spring 2024",
    },
    {
      img: project2,
      n: "02",
      t: "Penthouse 47",
      loc: "Manhattan, US",
      area: "680 m²",
      style: "Modern Art Deco",
      date: "Winter 2024",
    },
    {
      img: project4,
      n: "03",
      t: "Maison Élysée",
      loc: "Paris, FR",
      area: "320 m²",
      style: "Haussmann Reimagined",
      date: "Autumn 2023",
    },
  ];
  return (
    <section className="py-32 px-8 md:px-12">
      <div className="max-w-7xl mx-auto mb-24 text-center" data-reveal>
        <p className="text-eyebrow mb-3">Project Stories · 07</p>
        <h2 data-split className="font-display text-6xl md:text-8xl">
          {splitChars("Spaces that")} <span className="italic text-[#C8A45D]">{splitChars("inspire.")}</span>
        </h2>
      </div>
      <div className="space-y-32">
        {items.map((p, i) => (
          <article
            key={p.n}
            className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="mask-reveal aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.t} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div data-reveal>
              <p className="text-eyebrow mb-4">{p.n} · Featured</p>
              <h3 className="font-display text-5xl md:text-7xl mb-8">{p.t}</h3>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <Detail label="Location" value={p.loc} />
                <Detail label="Area" value={p.area} />
                <Detail label="Style" value={p.style} />
                <Detail label="Completed" value={p.date} />
              </div>
              <Magnetic>
                <a href="#" className="inline-block mt-10 text-meta border-b border-[#C8A45D] text-[#C8A45D] pb-2 hover:text-white hover:border-white">
                  Read the case study →
                </a>
              </Magnetic>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
