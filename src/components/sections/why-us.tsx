import { Users, Gem, Calendar, CheckCircle, Settings, Award, Headset, Factory, PenTool, LayoutTemplate, Home } from "lucide-react";
import whyUsImg from "@/assets/whyus-villa.png";

export function WhyUs() {
  const topFeatures = [
    {
      title: "Client-Centric Approach",
      desc: "Your vision is our starting point.",
      icon: Users
    },
    {
      title: "Uncompromising Quality",
      desc: "We use the finest materials and craftsmanship.",
      icon: Gem
    },
    {
      title: "On-Time, Every Time",
      desc: "We value your time and deliver on our promises.",
      icon: Calendar
    }
  ];

  const principles = [
    {
      num: "01",
      title: "Flexibility",
      subtitle: "Designed Around You",
      desc: "We adapt to your needs and preferences, creating spaces as unique as you are.",
      icon: PenTool
    },
    {
      num: "02",
      title: "Simplicity",
      subtitle: "Less Complexity, More Living",
      desc: "Smart planning and minimalist designs that bring clarity, comfort and calm to your home.",
      icon: LayoutTemplate
    },
    {
      num: "03",
      title: "Adaptability",
      subtitle: "Built for the Future",
      desc: "Homes that evolve with your life, ensuring long-term value and timeless appeal.",
      icon: Home
    }
  ];

  const bottomGuarantees = [
    { title: "Certified Quality\nAssurance", icon: CheckCircle },
    { title: "Advanced Building\nTechnology", icon: Settings },
    { title: "10 Year Structural\nWarranty", icon: Award },
    { title: "Dedicated Project\nSupport", icon: Headset },
    { title: "Transparent Process\n& On-Time Delivery", icon: Factory },
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-24 relative z-10">
          
          <div className="max-w-xl" data-reveal>
            <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase mb-6">
              WHY CAERIS HOMES
            </p>
            
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-normal leading-[1.1] mb-6">
              Crafted Around You. <br />
              <span className="text-[#C8A45D]">Built to Perfection.</span>
            </h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#C8A45D]" />
              <div className="w-2 h-2 rotate-45 border border-[#C8A45D]" />
            </div>

            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-md">
              With years of expertise and a passion for design, we create bespoke homes that reflect your lifestyle, your values, and your vision of luxury.
            </p>

            <div className="space-y-8">
              {topFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#C8A45D] flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_rgba(200,164,93,0.15)] transition-transform group-hover:scale-110">
                    <item.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-foreground/60 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0" data-reveal>
            <div 
              className="absolute inset-0 overflow-hidden shadow-2xl"
              style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 5% 50%)' }}
            >
              <img 
                src={whyUsImg} 
                alt="Luxury Villa Design" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Core Principles */}
        <div className="mb-24" data-reveal>
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-foreground font-normal mb-6">
              Our Core Principles
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#C8A45D]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#C8A45D]" />
              <div className="h-[1px] w-12 bg-[#C8A45D]/40" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((item, i) => (
              <div key={i} className="bg-[#FAF9F6] rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="bg-[#8A8175] text-white w-12 h-10 flex items-center justify-center text-sm font-bold mb-8 rounded-sm">
                  {item.num}
                </div>
                
                <h4 className="font-display text-2xl text-foreground mb-2">
                  {item.title}
                </h4>
                
                <p className="text-[#C8A45D] text-sm font-medium italic mb-4">
                  {item.subtitle}
                </p>
                
                <p className="text-foreground/60 text-sm leading-relaxed mb-6 max-w-[85%]">
                  {item.desc}
                </p>

                <div className="absolute right-6 bottom-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <item.icon className="w-24 h-24 text-[#C8A45D]" strokeWidth={0.5} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Guarantees Bar */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#C8A45D]/10 p-6 md:p-8" data-reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/10">
            {bottomGuarantees.map((item, i) => (
              <div 
                key={i}
                className="flex flex-col xl:flex-row items-center justify-center gap-4 p-4 text-center xl:text-left group"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C8A45D]">
                  <item.icon className="w-8 h-8 transition-transform group-hover:scale-110" strokeWidth={1} />
                </div>
                <p className="font-display text-[13px] lg:text-sm text-foreground font-medium leading-snug whitespace-pre-line">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
