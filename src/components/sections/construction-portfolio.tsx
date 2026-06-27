import port1 from '@/assets/construction-1.png';
import port2 from '@/assets/construction-2.png';
import { Link } from '@tanstack/react-router';

export function ConstructionPortfolio() {
  const projects = [
    { name: "Raw Concrete Villa", location: "Kochi", img: port1 },
    { name: "Tropical Estate", location: "Alappuzha", img: port2 },
    { name: "Urban Structure", location: "Trivandrum", img: port1 }, // Reusing for demo
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 mb-12 md:mb-16" data-reveal>
        <p className="text-eyebrow mb-3 text-[#C8A45D]">Our Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
          Under Construction
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 xl:px-20 pb-12 max-w-[1400px] mx-auto">
        {projects.map((p, i) => (
          <article key={i} className="group cursor-pointer relative aspect-[16/10] sm:aspect-square md:aspect-[16/10] overflow-hidden bg-surface" data-reveal>
            <div className="absolute inset-0 w-full h-[120%] -top-[10%]" data-parallax="0.1">
              <img 
                src={p.img} 
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-display text-3xl md:text-4xl text-white mb-2">{p.name}</h3>
              <p className="text-white/70 uppercase tracking-widest text-sm mb-6">{p.location}</p>
              
              <Link to="/projects" className="inline-flex items-center text-sm font-medium text-[#C8A45D] uppercase tracking-widest group/link">
                View Project
                <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
