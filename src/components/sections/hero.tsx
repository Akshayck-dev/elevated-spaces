import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Magnetic } from "@/components/site/magnetic";

export function Hero() {
  const images = [project1, project2, project3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero relative h-[100dvh] w-full overflow-hidden dark text-foreground">
      <div className="absolute inset-0 overflow-hidden bg-black">
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt="Hero architectural background"
            className={`absolute inset-0 w-full h-[120%] object-cover transition-opacity duration-[3000ms] ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "scale(1.15)" }}
          />
        ))}
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-12">
        <div className="text-eyebrow mb-8 hero-sub flex items-center gap-4">
          <span className="w-10 h-px bg-[#C8A45D]" />
          <span>Luxury Home Builders · Architects · Turnkey</span>
        </div>
        <h1 className="font-display text-[12vw] md:text-[8vw] text-foreground overflow-hidden max-w-5xl">
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

        <div className="hero-sub mt-12 flex flex-wrap gap-4">
          <Magnetic>
            <Link to="/quote" className="inline-block bg-[#C8A45D] text-black px-8 py-4 text-meta transition-all duration-500 hover:bg-white active:scale-[0.98] shadow-sm">
              Get a Free Quote
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/projects" className="inline-block border border-border/40 px-8 py-4 text-meta text-foreground transition-all duration-500 hover:border-border hover:bg-white/5 active:scale-[0.98]">
              View Projects →
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-meta text-foreground/60 flex-col items-center gap-2">
        <span className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
