import { splitChars } from "@/lib/split-chars";

export function YourStory() {
  return (
    <section className="px-8 md:px-12 py-32 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto text-center" data-reveal>
        <p className="text-eyebrow mb-4">Your Space, Your Story</p>
        <h2 data-split className="font-display text-5xl md:text-7xl mb-8">
          {splitChars("A space to recharge life's batteries.")}
        </h2>
        <p className="text-white/60 leading-relaxed text-lg">
          Our aim is to deliver aesthetically appealing high-end residential homes. Guided by years of experience, we
          build customised luxurious homes that suit your needs, personality, and the life you intend to live.
        </p>
      </div>
    </section>
  );
}
