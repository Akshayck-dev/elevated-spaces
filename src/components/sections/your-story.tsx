import aboutImg from "@/assets/about-villa.png";

export function YourStory() {
  return (
    <section className="bg-[#FAF9F6] relative overflow-hidden py-16 md:py-24">
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* Left Column */}
        <div className="pl-4 sm:pl-8 md:pl-12 xl:pl-20 pr-4 md:pr-0 z-20">
          <div className="flex items-center gap-4 mb-6" data-reveal>
            <div className="h-[1px] w-8 bg-[#C8A45D]" />
            <p className="text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase">ABOUT US</p>
            <div className="h-[1px] w-8 bg-[#C8A45D]" />
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-foreground font-normal" data-reveal>
            A space to recharge <br />
            <span className="text-[#C8A45D] italic">life's</span> batteries.
          </h2>
          
          <div className="w-2 h-2 rotate-45 border border-[#C8A45D] mb-8" data-reveal />
          
          <p className="text-foreground/60 leading-relaxed text-lg max-w-lg" data-reveal>
            Our aim is to deliver aesthetically appealing high-end residential homes. Guided by years of experience, we build customised luxurious homes that suit your needs, personality, and the life you intend to live.
          </p>
        </div>
        
        {/* Right Column (Image) */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full pr-4 md:pr-8" data-reveal>
           {/* Gradient fade on the left edge of the image to blend it with background */}
           <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" />
           
           <img 
             src={aboutImg} 
             alt="Luxury Villa Exterior" 
             className="w-full h-full object-cover rounded-3xl shadow-2xl" 
           />
        </div>
      </div>
    </section>
  );
}
