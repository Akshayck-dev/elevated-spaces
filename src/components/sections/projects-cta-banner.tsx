import { Phone, ArrowRight } from "lucide-react";
import bgImg from "@/assets/projects_hero.png";
import { Link } from "@tanstack/react-router";

export function ProjectsCTABanner() {
  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto relative rounded-[2rem] overflow-hidden" data-reveal>
        <img 
          src={bgImg} 
          alt="CTA Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3A2E20]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C8A45D] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <Phone className="w-8 h-8 text-white fill-current" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Let's Build Something <br />
              Extraordinary Together
            </h2>
          </div>

          <Link to="/contact" className="inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-5 font-bold tracking-widest uppercase text-xs rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1">
            TALK TO US TODAY <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
