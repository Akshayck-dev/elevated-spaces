import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/Villa_design_and_construction_an…_202606261727.mp4";
import { Magnetic } from "@/components/site/magnetic";

export function Hero() {
  return (
    <section className="hero relative h-screen w-full overflow-hidden dark text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hero-img absolute inset-0 w-full h-[120%] object-cover"
          style={{ transform: "scale(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-8 md:px-12 pt-24">
        <div className="text-eyebrow mb-8 hero-sub flex items-center gap-4">
          <span className="w-10 h-px bg-[#C8A45D]" />
          <span>Luxury Home Builders · Architects · Turnkey</span>
        </div>
        <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.9] tracking-[-0.03em] text-foreground overflow-hidden max-w-5xl">
          <span className="block overflow-hidden">
            {"We Build Your".split("").map((c, i) => (
              <span key={i} className="hero-char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
          <span className="block overflow-hidden italic font-light text-[#C8A45D]">
            {"Dream Home".split("").map((c, i) => (
              <span key={i} className="hero-char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-sub text-foreground/70 max-w-xl leading-relaxed mt-8 text-lg">
          Experienced architectural consultants crafting beautiful, luxurious residences — from concept and construction
          to interiors and turnkey handover.
        </p>

        <div className="hero-sub mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <Link to="/contact" className="bg-[#C8A45D] text-black px-8 py-4 text-meta hover:bg-white">
              Get a Free Quote
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/projects" className="border border-border/40 px-8 py-4 text-meta text-foreground hover:border-border">
              View Projects →
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-meta text-foreground/60 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
