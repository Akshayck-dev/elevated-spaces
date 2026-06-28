import { Home, Users, HardHat, Handshake, Globe } from "lucide-react";

export function ProjectsStats() {
  const stats = [
    {
      icon: Home,
      value: "1000+",
      label: "Homes Delivered",
      desc: "Successfully completed residential projects."
    },
    {
      icon: Users,
      value: "12+",
      label: "Years of Experience",
      desc: "Delivering excellence since over a decade."
    },
    {
      icon: HardHat,
      value: "100+",
      label: "Expert Team",
      desc: "Architects, engineers & professionals."
    },
    {
      icon: Handshake,
      value: "500+",
      label: "Happy Clients",
      desc: "Trusted by families across the globe."
    },
    {
      icon: Globe,
      value: "10+",
      label: "Cities",
      desc: "Projects across India and international locations."
    }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32">
      <div className="max-w-[90rem] mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#C8A45D]/10 p-8 lg:p-12" data-reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 md:divide-x divide-border/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <stat.icon className="w-10 h-10 text-[#C8A45D] mb-4" strokeWidth={1} />
              <h4 className="font-display text-4xl text-foreground mb-1">{stat.value}</h4>
              <p className="text-[#C8A45D] text-xs font-bold tracking-widest uppercase mb-4">{stat.label}</p>
              <p className="text-foreground/60 text-xs md:text-sm leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
