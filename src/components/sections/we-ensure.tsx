import { Clock, ShieldCheck, Award, Headset, Factory } from "lucide-react";

export function WeEnsure() {
  const guarantees = [
    { title: "Timely\nDelivery", icon: Clock },
    { title: "Using German\nTechnology", icon: ShieldCheck },
    { title: "15 Years\nWarranty", icon: Award },
    { title: "Assured\nLifetime Service", icon: Headset },
    { title: "Delivery Directly\nFrom Our Factories", icon: Factory },
  ];

  return (
    <section className="bg-transparent relative z-20 px-4 sm:px-8 md:px-12 xl:px-20 -mt-24 mb-16">
      <div className="max-w-[90rem] mx-auto bg-[#FAF9F6] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#C8A45D]/10 p-2 md:p-6 relative overflow-hidden">
        
        {/* 5-Column Grid with vertical dividers matching the design */}
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
  );
}
