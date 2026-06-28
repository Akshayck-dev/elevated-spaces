import { ArrowLeft, ArrowRight, Play, ArrowRight as ArrowRightIcon } from "lucide-react";
import heroImg from "@/assets/projects_hero.png";

export function ProjectsHero() {
  return (
    <section className="relative w-full h-[800px] min-h-[100dvh] bg-[#FAF9F6] flex items-center overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[75%] z-0 h-full">
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10" />
        <img
          src={heroImg}
          alt="Luxury Villa Construction"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 pt-20">
        
        {/* Top Right Arrows */}
        <div className="absolute top-10 right-4 sm:right-8 md:right-12 xl:right-20 flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-xl text-left" data-reveal>
          <p className="text-[#C8A45D] text-[11px] font-bold tracking-[0.25em] uppercase mb-8">
            OUR PROJECTS
          </p>
          
          <h1 className="font-display text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-foreground mb-8 font-normal">
            From Vision <br />
            to <span className="text-[#C8A45D]">Reality</span>
          </h1>
          
          <div className="w-12 h-[2px] bg-[#C8A45D] mb-8" />
          
          <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-12 max-w-sm">
            Every project we build is a reflection of trust, creativity, and precision. Explore our latest residential commissions across India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-4 font-bold tracking-widest uppercase text-xs rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1">
              VIEW ALL PROJECTS <ArrowRightIcon className="w-4 h-4" />
            </button>
            <button className="group inline-flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-foreground hover:text-[#C8A45D] transition-colors">
              <span className="w-10 h-10 rounded-full border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] group-hover:bg-[#C8A45D] group-hover:text-white transition-all">
                <Play className="w-3 h-3 ml-0.5 fill-current" />
              </span>
              WATCH OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
