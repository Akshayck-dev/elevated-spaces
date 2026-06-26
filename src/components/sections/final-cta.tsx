import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Magnetic } from "@/components/site/magnetic";
import { splitChars } from "@/lib/split-chars";

export function FinalCTA() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 opacity-30">
        <img src={hero} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>
      <div className="relative text-center px-8 max-w-5xl">
        <p className="text-eyebrow mb-8" data-reveal>
          Begin · 08
        </p>
        <h2 data-split className="font-display text-7xl md:text-[11vw] leading-[0.9]">
          {splitChars("LET'S CREATE")}
          <br />
          <span className="italic text-[#C8A45D]">{splitChars("your dream")}</span>
          <br />
          {splitChars("SPACE.")}
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto mt-10 leading-relaxed" data-reveal>
          From concept to completion, we transform ideas into extraordinary living experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" data-reveal>
          <Magnetic>
            <a href="mailto:studio@maisonnoire.co" className="bg-[#C8A45D] text-black px-8 py-5 text-meta hover:bg-white">
              Schedule Consultation
            </a>
          </Magnetic>
          <Magnetic>
            <Link to="/projects" className="border border-border/40 text-foreground px-8 py-5 text-meta hover:border-border">
              View Portfolio
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
