import { Play, PenTool, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import videoCover from "@/assets/projects_video.png";

export function ProjectsWhyChoose() {
  const features = [
    {
      icon: PenTool,
      title: "Tailored Designs",
      desc: "Homes designed around your lifestyle and aspirations."
    },
    {
      icon: ShieldCheck,
      title: "Quality Construction",
      desc: "Premium materials and finest craftsmanship."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      desc: "On-time completion with transparency at every step."
    },
    {
      icon: HeartHandshake,
      title: "After-Sales Support",
      desc: "We stand by you, even after handover."
    }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Video Card */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-[0_20px_50px_rgba(0,0,0,0.1)]" data-reveal>
            <img 
              src={videoCover} 
              alt="Interior Video" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white transition-all duration-300">
              <Play className="w-6 h-6 text-[#C8A45D] ml-1 fill-current" />
            </button>
          </div>

          {/* Right: Content */}
          <div data-reveal>
            <p className="text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-6">
              WHY CHOOSE CAERIS HOMES
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-normal leading-[1.1] mb-12">
              Built on Values. <br />
              Focused on <span className="text-[#C8A45D]">You.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 relative flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full text-[#C8A45D]/20" viewBox="0 0 100 100" fill="currentColor">
                      <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
                    </svg>
                    <feature.icon className="w-5 h-5 text-[#C8A45D] relative z-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground font-medium mb-2">{feature.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
