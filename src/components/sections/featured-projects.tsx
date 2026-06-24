import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { splitChars } from "@/lib/split-chars";

export function FeaturedProjects() {
  const projects = [
    { img: project1, name: "Villa Aurelia", place: "Lake Como, Italy", type: "Luxury Villa", year: "2024" },
    { img: project2, name: "Penthouse 47", place: "Manhattan, NY", type: "Modern Apartment", year: "2024" },
    { img: project3, name: "Atrium HQ", place: "London, UK", type: "Office Interior", year: "2023" },
    { img: project4, name: "Maison Élysée", place: "Paris, FR", type: "Commercial Boutique", year: "2023" },
  ];
  return (
    <section className="h-scroll relative h-screen overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 px-8 md:px-12 py-8 z-10 flex justify-between items-end">
        <div>
          <p className="text-eyebrow mb-3">Featured Works · 01</p>
          <h2 data-split className="font-display text-5xl md:text-7xl">
            {splitChars("Selected Projects")}
          </h2>
        </div>
        <p className="text-meta hidden md:block">Scroll horizontally →</p>
      </div>
      <div className="h-track flex h-full items-center gap-8 px-8 md:px-12 pt-44 pb-16 will-change-transform">
        {projects.map((p, i) => (
          <article key={i} className="relative h-full w-[78vw] md:w-[55vw] shrink-0 group overflow-hidden">
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex justify-between items-end">
              <div>
                <p className="text-eyebrow mb-2">{`0${i + 1} · ${p.type}`}</p>
                <h3 className="font-display text-4xl md:text-6xl">{p.name}</h3>
                <p className="text-meta mt-2">{p.place}</p>
              </div>
              <p className="text-meta">{p.year}</p>
            </div>
          </article>
        ))}
        <div className="w-[40vw] shrink-0 flex flex-col justify-center pl-8">
          <p className="font-display text-5xl leading-tight">
            View
            <br />
            the full
            <br />
            <span className="italic text-[#C8A45D]">portfolio</span> →
          </p>
        </div>
      </div>
    </section>
  );
}
