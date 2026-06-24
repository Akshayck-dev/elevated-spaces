import finishes from "@/assets/material-finishes.jpg";
import furniture from "@/assets/material-furniture.jpg";
import lighting from "@/assets/material-lighting.jpg";
import marble from "@/assets/material-marble.jpg";
import wood from "@/assets/material-wood.jpg";
import { splitChars } from "@/lib/split-chars";

export function Materials() {
  const items = [
    { img: marble, t: "Italian Marble", n: "01" },
    { img: wood, t: "Natural Wood", n: "02" },
    { img: lighting, t: "Luxury Lighting", n: "03" },
    { img: furniture, t: "Designer Furniture", n: "04" },
    { img: finishes, t: "Custom Finishes", n: "05" },
  ];
  return (
    <section className="bg-[#0c0c0c] pt-24 py-32 px-8 md:px-12">
      <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto" data-reveal>
        <div>
          <p className="text-eyebrow mb-3">Material Library · 05</p>
          <h2 data-split className="font-display text-5xl md:text-7xl">
            {splitChars("Tactile by intent.")}
          </h2>
        </div>
        <p className="text-meta hidden md:block max-w-xs">Sourced from heritage workshops across Florence, Lyon and Kyoto.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mx-auto">
        {items.map((m, i) => (
          <article key={m.t} data-reveal className="group relative aspect-[3/4] overflow-hidden bg-black">
            <img
              src={m.img}
              alt={m.t}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <span className="text-eyebrow text-[#C8A45D]">{m.n}</span>
              <h3 className="font-display text-2xl md:text-3xl">{m.t}</h3>
            </div>
            <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A45D]/40 transition-colors" />
            <span className="sr-only">{i}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
