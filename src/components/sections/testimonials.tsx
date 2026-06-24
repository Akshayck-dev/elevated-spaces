import { useState } from "react";
import { splitChars } from "@/lib/split-chars";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  return (
    <section id="testimonials" className="px-8 md:px-12 py-32 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <div>
            <p className="text-eyebrow mb-3">Testimonials</p>
            <h2 data-split className="font-display text-5xl md:text-7xl">
              {splitChars("Real reviews, real results.")}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 border border-white/20 hover:border-[#C8A45D] hover:text-[#C8A45D] transition"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="w-12 h-12 border border-white/20 hover:border-[#C8A45D] hover:text-[#C8A45D] transition"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">
          <div className="mask-reveal aspect-[3/4] overflow-hidden bg-black">
            <img
              key={testimonials[idx].image}
              src={testimonials[idx].image}
              alt={testimonials[idx].name}
              className="w-full h-full object-cover animate-[fade-in_0.6s_ease-out]"
              loading="lazy"
            />
          </div>
          <div key={idx} className="animate-[fade-in_0.6s_ease-out]">
            <span className="font-display text-7xl text-[#C8A45D] leading-none">"</span>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed -mt-6">{testimonials[idx].quote}</p>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8">
              <span className="w-12 h-px bg-[#C8A45D]" />
              <div>
                <p className="font-display text-2xl">{testimonials[idx].name}</p>
                <p className="text-meta mt-1">{testimonials[idx].location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
