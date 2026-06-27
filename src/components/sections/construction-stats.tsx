import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function ConstructionStats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { n: 1000, suf: "+", l: "Completed projects" },
    { n: 10, suf: "+", l: "Years of experience" },
    { n: 100, suf: "+", l: "Team members" },
    { n: 500, suf: "+", l: "Active clients" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>('.counter-num');
      
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count') || '0', 10);
        
        gsap.to(counter, {
          innerHTML: target,
          duration: 2.5,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 sm:px-8 md:px-12 xl:px-20 py-12 md:py-16 bg-background border-y border-border/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
        {stats.map((s) => (
          <div key={s.l} data-reveal className="border-l border-border/10 pl-6 flex flex-col justify-center">
            <div className="font-display text-5xl md:text-6xl lg:text-7xl text-[#C8A45D]">
              <span className="counter-num" data-count={s.n}>
                0
              </span>
              <span>{s.suf}</span>
            </div>
            <p className="text-foreground/70 mt-4 text-sm md:text-base tracking-wide uppercase">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
