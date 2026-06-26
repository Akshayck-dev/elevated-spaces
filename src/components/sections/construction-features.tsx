export function ConstructionFeatures() {
  const features = [
    {
      title: "Flexibility",
      subtitle: "An inclusive model",
      desc: "We are a team of creative architects who combine our skills along with practices to create beautiful and inspirational spaces."
    },
    {
      title: "Simplicity",
      subtitle: "More time to do less",
      desc: "It is important to us that you feel your home a place where you love to be. Therefore, we focus on creating timelessly elegant interiors which focus equally on quality and comfort."
    },
    {
      title: "Adaptability",
      subtitle: "Evolves with you over time",
      desc: "We handle all aspects of the construction process, from design conception to construction completion and provide unmatched construction project management."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-20 max-w-3xl" data-reveal>
          <p className="text-eyebrow mb-4 text-[#C8A45D]">Why Caeris Homes</p>
          <h2 data-scrub className="font-display text-4xl md:text-6xl mb-6 bg-clip-text text-transparent bg-[linear-gradient(to_right,#fff_50%,rgba(255,255,255,0.2)_50%)] bg-[length:200%_100%]">
            Experience, Excellence <br />
            <span className="text-[#C8A45D]">And Commitment</span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl">
            Guided by our years of experience, we build you customised luxurious homes which suit your needs and personality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-border/10 pt-16">
          {features.map((f, i) => (
            <div key={i} data-reveal className="relative">
              <div className="text-[#C8A45D] text-sm tracking-widest uppercase mb-4 opacity-50">0{i + 1}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-2">{f.title}</h3>
              <p className="text-[#C8A45D] mb-6 italic">{f.subtitle}</p>
              <p className="text-foreground/80 leading-loose max-w-[65ch]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
