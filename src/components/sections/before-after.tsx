import { useRef, useState } from "react";
import after from "@/assets/after.jpg";
import before from "@/assets/before.jpg";
import { splitChars } from "@/lib/split-chars";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };
  return (
    <section className="px-8 md:px-12 py-32">
      <div className="max-w-4xl mb-12" data-reveal>
        <p className="text-eyebrow mb-3">Transformations · 04</p>
        <h2 data-split className="font-display text-5xl md:text-7xl mb-6">
          {splitChars("Before. After.")}
        </h2>
        <p className="text-foreground/60 max-w-xl leading-relaxed">
          Drag across to witness a tired apartment reimagined into a curated residence.
        </p>
      </div>
      <div
        ref={ref}
        className="mask-reveal relative w-full aspect-[16/10] overflow-hidden cursor-ew-resize select-none"
        onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
        onMouseDown={(e) => drag(e.clientX)}
        onTouchMove={(e) => drag(e.touches[0].clientX)}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-[#C8A45D]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-[#C8A45D] bg-background/60 backdrop-blur grid place-items-center text-[#C8A45D]">
            ◂ ▸
          </div>
        </div>
        <span className="absolute top-6 left-6 text-meta bg-background/50 px-3 py-1">Before</span>
        <span className="absolute top-6 right-6 text-meta bg-[#C8A45D] text-black px-3 py-1">After</span>
      </div>
    </section>
  );
}
