import { Users, PencilRuler, HardHat, Key, Heart } from "lucide-react";

export function ProjectsProcess() {
  const steps = [
    {
      icon: Users,
      title: "Consultation",
      desc: "Understanding your needs and vision."
    },
    {
      icon: PencilRuler,
      title: "Design & Planning",
      desc: "Creating designs that inspire and function."
    },
    {
      icon: HardHat,
      title: "Execution",
      desc: "Precision construction with quality checks."
    },
    {
      icon: Key,
      title: "Handover",
      desc: "Delivering your dream home, ready to live."
    },
    {
      icon: Heart,
      title: "After Care",
      desc: "Continued support for complete peace of mind."
    }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto text-center" data-reveal>
        <p className="text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-4">
          OUR PROCESS
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground font-normal mb-8">
          A Seamless Journey, From Start to Finish
        </h2>
        <div className="flex items-center justify-center gap-4 mb-20">
          <div className="h-[1px] w-12 bg-[#C8A45D]/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C8A45D]" />
          <div className="h-[1px] w-12 bg-[#C8A45D]/40" />
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] border-t-2 border-dashed border-[#C8A45D]/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-full border border-[#C8A45D]/30 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border border-white m-1 shadow-sm" />
                  <step.icon className="w-8 h-8 text-[#C8A45D] relative z-10" strokeWidth={1} />
                </div>
                
                <h4 className="font-display text-lg text-foreground font-medium mb-3">
                  {step.title}
                </h4>
                
                <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
