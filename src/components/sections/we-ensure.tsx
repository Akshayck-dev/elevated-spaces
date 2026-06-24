import { splitChars } from "@/lib/split-chars";
import { guarantees } from "@/lib/site-data";

export function WeEnsure() {
  return (
    <section className="px-8 md:px-12 py-32 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-reveal>
          <p className="text-eyebrow mb-3">We Ensure</p>
          <h2 data-split className="font-display text-5xl md:text-6xl">
            {splitChars("Built with confidence.")}
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {guarantees.map((item) => (
            <li
              key={item}
              data-reveal
              className="border border-white/10 bg-black/30 px-6 py-8 text-center hover:border-[#C8A45D]/40 transition-colors"
            >
              <span className="block w-2 h-2 bg-[#C8A45D] rounded-full mx-auto mb-4" />
              <p className="font-display text-xl">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-center text-white/50 mt-12 max-w-2xl mx-auto leading-relaxed" data-reveal>
          Our dedicated team works seamlessly across design studios and partner ateliers, ensuring top-notch quality and
          innovation at every step.
        </p>
      </div>
    </section>
  );
}
