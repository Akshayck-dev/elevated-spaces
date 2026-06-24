export function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "We meet in your space — or ours — to understand the life you intend to live." },
    { n: "02", t: "Concept Design", d: "Mood, material, light. A directional palette becomes the soul of the project." },
    { n: "03", t: "Visualization", d: "Photoreal renders and 3D walkthroughs. Every room seen before it is built." },
    { n: "04", t: "Execution", d: "Our in-house craftsmen and trusted ateliers bring the design into the world." },
    { n: "05", t: "Handover", d: "Styled, photographed, and handed over fully turnkey. Move in. Live well." },
  ];
  return (
    <section className="process relative bg-[#0c0c0c] pt-24">
      <div className="process-pin h-screen flex flex-col px-8 md:px-12 py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-eyebrow mb-3">Design Process · 03</p>
            <h2 className="font-display text-5xl md:text-7xl">
              <span className="italic">A method</span>, not a formula.
            </h2>
          </div>
          <p className="text-meta hidden md:block">05 Stages</p>
        </div>
        <div className="gold-line mb-12" />
        <div className="relative flex-1 grid place-items-center min-h-[50vh]">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="process-step absolute inset-0 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-center max-w-6xl mx-auto px-4"
              style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? "auto" : "none" }}
            >
              <div className="font-display text-[18vw] md:text-[14vw] leading-none text-[#C8A45D]/90 -tracking-[0.04em]">{s.n}</div>
              <div>
                <h3 className="font-display text-5xl md:text-7xl mb-6">{s.t}</h3>
                <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">{s.d}</p>
                <p className="text-meta mt-8">
                  Step {i + 1} of {steps.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
