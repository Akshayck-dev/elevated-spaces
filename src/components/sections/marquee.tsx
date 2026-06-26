export function Marquee() {
  const items = ["Residential", "Hospitality", "Commercial", "Yacht", "Penthouse", "Restoration", "Bespoke"];
  return (
    <div className="border-y border-border/10 py-6 overflow-hidden bg-background">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl text-foreground/40 flex items-center gap-12">
            {t} <span className="text-[#C8A45D]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}
