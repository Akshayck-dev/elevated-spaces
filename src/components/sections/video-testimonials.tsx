import { useEffect, useRef, useState } from "react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import { splitChars } from "@/lib/split-chars";

export function VideoTestimonials() {
  const items = [
    {
      poster: client1,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      name: "Isabella Moretti",
      role: "Villa Aurelia · Lake Como",
      duration: "1:42",
    },
    {
      poster: client2,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      name: "Charles Whitford",
      role: "Whitford Capital · NYC",
      duration: "2:18",
    },
    {
      poster: client3,
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      name: "Amelia Sterling",
      role: "Sterling Studio · London",
      duration: "1:55",
    },
  ];
  const [active, setActive] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const open = (i: number) => setActive(i);
  const close = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setActive(null);
  };

  const handleOpen = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    }
  };

  return (
    <section className="px-8 md:px-12 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <div>
            <p className="text-eyebrow mb-3">Video Stories · 06b</p>
            <h2 data-split className="font-display text-5xl md:text-7xl">
              {splitChars("Hear them speak.")}
            </h2>
          </div>
          <p className="text-meta hidden md:block max-w-xs">
            Three minutes inside the rooms we built — told by the people who live there.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <button
              key={it.name}
              onClick={() => open(i)}
              data-reveal
              className="group relative aspect-[4/5] overflow-hidden bg-background text-left"
              aria-label={`Play video testimonial from ${it.name}`}
            >
              <img
                src={it.poster}
                alt={it.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="w-20 h-20 rounded-full border border-[#C8A45D] bg-background/40 backdrop-blur grid place-items-center text-[#C8A45D] text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C8A45D] group-hover:text-black">
                  ▶
                </span>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-eyebrow text-[#C8A45D]">0{i + 1} · Film</span>
                  <span className="text-meta bg-background/60 px-2 py-1">{it.duration}</span>
                </div>
                <div>
                  <h3 className="font-display text-3xl">{it.name}</h3>
                  <p className="text-meta mt-1">{it.role}</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A45D]/50 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial — ${items[active].name}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-background/85 backdrop-blur-md animate-[fade-in_0.3s_ease-out]"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-background border border-[#C8A45D]/30 animate-[scale-in_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={items[active].src}
              poster={items[active].poster}
              controls
              autoPlay
              playsInline
              onLoadedMetadata={handleOpen}
              className="w-full h-full object-cover bg-background"
            />
            <button
              onClick={close}
              aria-label="Close video"
              className="absolute -top-12 right-0 md:-right-2 text-foreground/80 hover:text-[#C8A45D] text-meta flex items-center gap-3"
            >
              <span className="w-10 h-10 border border-border/30 grid place-items-center hover:border-[#C8A45D]">✕</span>
              Close
            </button>
            <div className="absolute -bottom-14 left-0 right-0 flex justify-between text-meta text-foreground/70">
              <span>
                {items[active].name} · {items[active].role}
              </span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
