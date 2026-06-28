import { Link } from "@tanstack/react-router";
import { MinimalInteriorIcon, MinimalConstructionIcon, MinimalPlanningIcon, ArchitectureIcon } from "@/components/icons";

import img1 from "@/assets/service-1.png";
import img2 from "@/assets/service-2.png";
import img3 from "@/assets/service-3.png";
import img4 from "@/assets/service-4.png";

export function Services() {
  const services = [
    {
      title: "Architectural Design",
      description: "We create visionary architectural blueprints that perfectly balance aesthetic beauty, structural integrity, and modern innovation.",
      icon: ArchitectureIcon,
      link: "/construction",
      img: img1
    },
    {
      title: "Interior Designing",
      description: "We create stunning interiors that reflect your personal style while ensuring absolute functionality, comfort, and luxury in every detail.",
      icon: MinimalInteriorIcon,
      link: "/construction",
      img: img2
    },
    {
      title: "Home Construction",
      description: "From laying the foundation to the final coat of paint, we build your home with precision, premium materials, and unwavering care.",
      icon: MinimalConstructionIcon,
      link: "/construction",
      img: img3
    },
    {
      title: "Planning",
      description: "Our meticulous architectural planning ensures every square foot is optimized for both breathtaking aesthetics and daily utility.",
      icon: MinimalPlanningIcon,
      link: "/construction",
      img: img4
    }
  ];

  return (
    <section className="bg-[#FAF9F6] text-foreground py-24 md:py-32 px-4 sm:px-8 md:px-12 xl:px-20 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28" data-reveal>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-[#C8A45D]" />
            <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase">
              What we do
            </p>
            <div className="h-[1px] w-10 bg-[#C8A45D]" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-[4rem] mb-6 leading-tight text-foreground font-normal">
            We Will Help You Build Your <br />
            <span className="text-[#C8A45D]">Dream Home</span>
          </h2>
          
          <div className="w-2 h-2 rotate-45 border border-[#C8A45D] mx-auto mb-6" />
          
          <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            From concept to completion, we provide end-to-end architectural and construction solutions crafted with passion, precision, and a commitment to excellence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-y-0">
          {services.map((service, i) => (
            <Link 
              key={i} 
              to={service.link} 
              className="group flex flex-col bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative pt-12 transition-all duration-500 overflow-visible mt-8 lg:mt-0" 
              data-reveal
            >
              {/* Floating Icon Circle */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#C8A45D] flex items-center justify-center shadow-[0_0_0_8px_white,0_10px_20px_rgba(200,164,93,0.3)] z-10 transition-transform duration-500 group-hover:scale-110">
                <service.icon className="w-10 h-10 text-white" strokeWidth={1} />
              </div>

              {/* Text Content */}
              <div className="text-center px-6 pb-8 pt-6 flex-1 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl mb-4 text-foreground group-hover:text-[#C8A45D] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/60 text-sm leading-relaxed font-light mb-4 flex-1">
                  {service.description}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="h-[200px] w-full overflow-hidden rounded-b-3xl mt-auto">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105" 
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
