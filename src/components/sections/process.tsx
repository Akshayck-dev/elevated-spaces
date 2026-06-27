import img1 from "@/assets/process-1.png";
import img2 from "@/assets/process-2.png";
import img3 from "@/assets/kerala-modern-1.png";
import img4 from "@/assets/process-4.png";
import img5 from "@/assets/indian-interior.png";
import { useProcessAnimations } from "@/hooks/use-process-animations";

export function Process() {
  useProcessAnimations();
  
  const steps = [
    { n: "01", t: "Consultation", d: "We meet in your space — or ours — to understand the life you intend to live.", img: img1 },
    { n: "02", t: "Concept Design", d: "Mood, material, light. A directional palette becomes the soul of the project.", img: img2 },
    { n: "03", t: "Visualization", d: "Photoreal renders and 3D walkthroughs. Every room seen before it is built.", img: img3 },
    { n: "04", t: "Execution", d: "Our in-house craftsmen and trusted ateliers bring the design into the world.", img: img4 },
    { n: "05", t: "Handover", d: "Styled, photographed, and handed over fully turnkey. Move in. Live well.", img: img5 },
  ];
  
  return (
    <section className="relative bg-background pt-16 md:pt-20 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative">
        
        {/* Left Sticky Column */}
        <div className="hidden md:block w-1/2 sticky top-32 h-[75dvh] overflow-hidden shadow-2xl order-1">
          {steps.map((s, i) => (
            <img 
              src={s.img} 
              key={s.n} 
              className="process-img absolute inset-0 w-full h-full object-cover" 
              alt={s.t} 
            />
          ))}
          {/* Overlay gradient for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Right Scrollable Column */}
        <div className="w-full md:w-1/2 flex flex-col md:pt-[15dvh] md:pb-[30dvh] order-2">
          <div className="process-header mb-16 md:mb-32">
            <p className="text-eyebrow mb-3 text-[#C8A45D]">Design Process</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground">
              <span className="italic">A method</span>, not a formula.
            </h2>
          </div>

          {steps.map((s, i) => (
            <div key={s.n} className={`process-text-step process-text-step-${i} min-h-[40dvh] md:min-h-[75dvh] flex flex-col justify-center relative mb-16 md:mb-0`}>
              <div className="md:hidden w-full h-[40dvh] mb-8 overflow-hidden">
                <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
              </div>
              <div className="step-number font-display text-7xl md:text-[12rem] leading-none text-foreground/5 -mb-6 md:-mb-14 select-none z-0 relative">
                {s.n}
              </div>
              <div className="step-content relative z-10 pl-6 md:pl-10 pb-12">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-border/20 hidden md:block">
                  <div className="progress-line w-full bg-[#C8A45D]" style={{ height: "0%" }} />
                </div>
                <h3 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 text-foreground">{s.t}</h3>
                <p className="text-foreground/60 text-lg md:text-xl max-w-md leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
