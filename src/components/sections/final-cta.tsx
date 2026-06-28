import { Link } from "@tanstack/react-router";
import { Magnetic } from "@/components/site/magnetic";
import { Calendar, ArrowRight, Clock, ShieldCheck, Award, Headset, Factory } from "lucide-react";
import heroImg from "@/assets/hero-bg.png";

export function FinalCTA() {
  const guarantees = [
    { title: "Timely\nDelivery", icon: Clock },
    { title: "Using German\nTechnology", icon: ShieldCheck },
    { title: "15 Years\nWarranty", icon: Award },
    { title: "Assured\nLifetime Service", icon: Headset },
    { title: "Delivery Directly\nFrom Our Factories", icon: Factory },
  ];

  return (
    <div className="relative">
      <section className="relative h-[100dvh] min-h-[800px] w-full overflow-hidden bg-[#FAF9F6] flex items-center">
        
        {/* Background Image (Right Side) */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10" />
          <img
            src={heroImg}
            alt="Luxury Villa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content (Left Side) */}
        <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 pt-10 pb-32">
          
          <div className="mb-12 flex items-center justify-between w-full lg:hidden">
             <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#C8A45D]" />
              <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase">BEGIN . 08</p>
              <div className="h-[1px] w-8 bg-[#C8A45D]" />
            </div>
          </div>

          <div className="max-w-3xl text-left" data-reveal>
            
            <div className="hidden lg:flex items-center gap-4 mb-16">
              <div className="h-[1px] w-8 bg-[#C8A45D]" />
              <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase">BEGIN . 08</p>
              <div className="h-[1px] w-8 bg-[#C8A45D]" />
            </div>

            <h2 className="font-display text-6xl md:text-[6rem] lg:text-[7.5rem] leading-[1.05] text-foreground mb-8 font-normal">
              Let's create <br />
              <span className="italic text-[#C8A45D]">your dream</span> <br />
              space.
            </h2>
            
            <div className="w-24 h-[2px] bg-[#C8A45D]/80 mb-8" />
            
            <p className="text-foreground/70 text-lg md:text-xl font-light mb-12 max-w-md">
              Thoughtful design. Timeless architecture. <br />
              Spaces that reflect you.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <Magnetic>
                <Link to="/quote" className="inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-4 font-bold tracking-wide uppercase text-sm rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1">
                  <Calendar className="w-5 h-5" />
                  SCHEDULE CONSULTATION
                </Link>
              </Magnetic>
              <Link to="/process" className="group inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-foreground border-b border-[#C8A45D] pb-1 hover:text-[#C8A45D] transition-colors">
                LEARN MORE 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-foreground group-hover:text-[#C8A45D]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Guarantees Bar over the bottom */}
      <section className="bg-transparent relative z-20 px-4 sm:px-8 md:px-12 xl:px-20 -mt-24 mb-16">
        <div className="max-w-[90rem] mx-auto bg-[#FAF9F6] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#C8A45D]/10 p-2 md:p-6 relative overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#C8A45D]/20">
            {guarantees.map((item, i) => (
              <div 
                key={i}
                className="flex items-center justify-center gap-4 p-6 group transition-all"
              >
                <div className="w-14 h-14 rounded-full border border-[#C8A45D]/30 flex flex-shrink-0 items-center justify-center bg-white shadow-sm">
                  <item.icon className="w-6 h-6 text-[#C8A45D]" strokeWidth={1.5} />
                </div>
                
                <p className="font-display text-sm lg:text-[15px] text-foreground font-medium leading-snug text-left whitespace-pre-line">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
