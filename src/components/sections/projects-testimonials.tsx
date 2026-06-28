import { ArrowLeft, ArrowRight } from "lucide-react";
import avatar1 from "@/assets/avatar_1.png";
import avatar2 from "@/assets/avatar_2.png";
import avatar3 from "@/assets/avatar_3.png";

export function ProjectsTestimonials() {
  const testimonials = [
    {
      text: "Caeris Homes turned our dream into reality. Their attention to detail and commitment is truly unmatched.",
      name: "Arjun & Neha",
      location: "Kochi, Kerala",
      avatar: avatar2
    },
    {
      text: "The entire experience was seamless and transparent. We couldn't have asked for a better team to build our home.",
      name: "Rakesh Nambiar",
      location: "Trivandrum, Kerala",
      avatar: avatar1
    },
    {
      text: "Professional, reliable and creative – Caeris Homes exceeded our expectations in every way.",
      name: "Marco Moretti",
      location: "Lake Como, Italy",
      avatar: avatar3
    }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-reveal>
          <div>
            <p className="text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              CLIENTS SPEAK
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-normal">
              Trusted by Families, Loved for Generations.
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-[#FAF9F6] p-8 md:p-10 rounded-2xl relative" data-reveal>
              <div className="text-[#C8A45D] font-serif text-5xl leading-none absolute top-8 left-8">
                “
              </div>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed mt-6 mb-8 min-h-[80px]">
                {item.text}
              </p>
              <div>
                <p className="font-bold text-foreground text-sm mb-1">- {item.name}</p>
                <p className="text-[#C8A45D] text-xs font-medium">{item.location}</p>
              </div>

              {/* Avatar overlapping bottom right */}
              <div className="absolute -bottom-4 right-8 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
