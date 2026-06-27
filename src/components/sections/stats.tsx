export function Stats() {
  const stats = [
    { n: 500, suf: "+", l: "Projects Delivered" },
    { n: 15, suf: "+", l: "Years Experience" },
    { n: 98, suf: "%", l: "Client Satisfaction" },
    { n: 100, suf: "+", l: "Design Experts" },
  ];
  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-16 border-y border-border/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {stats.map((s) => (
          <div key={s.l} data-reveal className="border-l border-border/10 pl-6">
            <div className="font-display text-5xl md:text-6xl lg:text-8xl text-[#C8A45D]">
              <span className="counter" data-count={s.n}>
                0
              </span>
              <span>{s.suf}</span>
            </div>
            <p className="text-meta mt-4">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
