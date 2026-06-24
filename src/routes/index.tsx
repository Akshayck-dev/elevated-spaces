import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@/lib/use-lenis";

import hero from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import marble from "@/assets/material-marble.jpg";
import wood from "@/assets/material-wood.jpg";
import lighting from "@/assets/material-lighting.jpg";
import furniture from "@/assets/material-furniture.jpg";
import finishes from "@/assets/material-finishes.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noire — Luxury Interior Design & Turnkey Construction" },
      { name: "description", content: "An international atelier crafting timeless interiors, architectural residences and turnkey luxury spaces." },
      { property: "og:title", content: "Maison Noire — Luxury Interior Design" },
      { property: "og:description", content: "Exceptional interiors. Built to last. Designed to be lived in." },
    ],
  }),
  component: Index,
});

/* ---------------- helpers ---------------- */

function splitChars(text: string) {
  return text.split("").map((c, i) => (
    <span key={i} className="split-char" style={{ display: c === " " ? "inline" : "inline-block" }}>
      {c === " " ? "\u00A0" : c}
    </span>
  ));
}

function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.6, ease: "power3.out" });
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1,0.3)" });
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <span ref={ref} className={`magnetic ${className}`}>{children}</span>;
}

/* ---------------- page ---------------- */

function Index() {
  useLenis();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".hero-char", {
        yPercent: 110,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.018,
        delay: 0.2,
      });
      gsap.from(".hero-sub > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.1,
        delay: 1.1,
      });
      gsap.to(".hero-img", {
        scale: 1,
        duration: 2.4,
        ease: "expo.out",
      });

      // Hero parallax
      gsap.to(".hero-img", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      // Section reveal pattern
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Headline char reveal
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const chars = el.querySelectorAll(".split-char");
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      // Image mask reveals
      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((el) => {
        gsap.fromTo(el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          });
      });

      // Horizontal projects
      const hSection = document.querySelector<HTMLElement>(".h-scroll");
      const hTrack = document.querySelector<HTMLElement>(".h-track");
      if (hSection && hTrack) {
        const dist = () => hTrack.scrollWidth - window.innerWidth;
        gsap.to(hTrack, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: hSection,
            pin: true,
            scrub: 1,
            end: () => `+=${dist()}`,
            invalidateOnRefresh: true,
          },
        });
      }

      // Counters
      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
          onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
        });
      });

      // Process pinned
      const proc = document.querySelector<HTMLElement>(".process");
      if (proc) {
        const steps = gsap.utils.toArray<HTMLElement>(".process-step");
        ScrollTrigger.create({
          trigger: proc,
          start: "top top",
          end: () => `+=${steps.length * window.innerHeight}`,
          pin: ".process-pin",
          scrub: true,
        });
        steps.forEach((step, i) => {
          gsap.fromTo(step,
            { opacity: 0.15, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: proc,
                start: `top+=${i * window.innerHeight} top`,
                end: `top+=${(i + 1) * window.innerHeight} top`,
                scrub: true,
              },
            });
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <WhyUs />
      <Process />
      <BeforeAfter />
      <Materials />
      <Stats />
      <Testimonials />
      <VideoTestimonials />

      <Showcase />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------------- sections ---------------- */

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex items-center justify-between mix-blend-difference">
      <a href="#" className="font-display text-2xl tracking-tight text-white">Maison<span className="text-[#C8A45D]">·</span>Noire</a>
      <nav className="hidden md:flex gap-10 text-meta text-white/80">
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#process" className="hover:text-white">Process</a>
        <a href="#materials" className="hover:text-white">Materials</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </nav>
      <Magnetic>
        <a href="#contact" className="text-meta border border-white/40 px-5 py-3 hover:border-white text-white">Book a consult</a>
      </Magnetic>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="Luxury villa interior"
          className="hero-img absolute inset-0 w-full h-[120%] object-cover"
          style={{ transform: "scale(1.15)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-20 px-8 md:px-12">
        <div className="text-eyebrow mb-8 hero-sub flex items-center gap-4">
          <span className="w-10 h-px bg-[#C8A45D]" />
          <span>Atelier · Est. 2008 · Worldwide</span>
        </div>
        <h1 className="font-display text-[14vw] md:text-[10vw] leading-[0.88] tracking-[-0.03em] text-white overflow-hidden">
          <span className="block overflow-hidden">
            {"CRAFTING".split("").map((c, i) => <span key={i} className="hero-char inline-block">{c}</span>)}
          </span>
          <span className="block overflow-hidden italic font-light text-[#C8A45D]">
            {"Exceptional".split("").map((c, i) => <span key={i} className="hero-char inline-block">{c}</span>)}
          </span>
          <span className="block overflow-hidden">
            {"INTERIORS".split("").map((c, i) => <span key={i} className="hero-char inline-block">{c}</span>)}
          </span>
        </h1>

        <div className="hero-sub mt-12 grid md:grid-cols-3 gap-8 items-end">
          <p className="md:col-span-1 text-white/70 max-w-md leading-relaxed">
            Luxury interior design and turnkey solutions tailored for modern lifestyles and timeless elegance.
          </p>
          <div className="md:col-span-1" />
          <div className="flex gap-4 md:justify-end">
            <Magnetic>
              <a href="#projects" className="bg-[#C8A45D] text-black px-7 py-4 text-meta hover:bg-white">View Projects →</a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="border border-white/40 px-7 py-4 text-meta text-white hover:border-white">Book Consultation</a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-meta text-white/60 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Residential", "Hospitality", "Commercial", "Yacht", "Penthouse", "Restoration", "Bespoke"];
  return (
    <div className="border-y border-white/10 py-6 overflow-hidden bg-[#0c0c0c]">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-3xl text-white/40 flex items-center gap-12">
            {t} <span className="text-[#C8A45D]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}

function FeaturedProjects() {
  const projects = [
    { img: project1, name: "Villa Aurelia", place: "Lake Como, Italy", type: "Luxury Villa", year: "2024" },
    { img: project2, name: "Penthouse 47", place: "Manhattan, NY", type: "Modern Apartment", year: "2024" },
    { img: project3, name: "Atrium HQ", place: "London, UK", type: "Office Interior", year: "2023" },
    { img: project4, name: "Maison Élysée", place: "Paris, FR", type: "Commercial Boutique", year: "2023" },
  ];
  return (
    <section id="projects" className="h-scroll relative h-screen overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 px-8 md:px-12 py-8 z-10 flex justify-between items-end">
        <div>
          <p className="text-eyebrow mb-3">Featured Works · 01</p>
          <h2 data-split className="font-display text-5xl md:text-7xl">{splitChars("Selected Projects")}</h2>
        </div>
        <p className="text-meta hidden md:block">Scroll horizontally →</p>
      </div>
      <div className="h-track flex h-full items-center gap-8 px-8 md:px-12 pt-44 pb-16 will-change-transform">
        {projects.map((p, i) => (
          <article key={i} className="relative h-full w-[78vw] md:w-[55vw] shrink-0 group overflow-hidden">
            <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex justify-between items-end">
              <div>
                <p className="text-eyebrow mb-2">{`0${i + 1} · ${p.type}`}</p>
                <h3 className="font-display text-4xl md:text-6xl">{p.name}</h3>
                <p className="text-meta mt-2">{p.place}</p>
              </div>
              <p className="text-meta">{p.year}</p>
            </div>
          </article>
        ))}
        <div className="w-[40vw] shrink-0 flex flex-col justify-center pl-8">
          <p className="font-display text-5xl leading-tight">View<br/>the full<br/><span className="italic text-[#C8A45D]">portfolio</span> →</p>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { n: "01", t: "Custom Design Approach", d: "Every commission begins with a private dialogue. Spaces shaped around the life inside them." },
    { n: "02", t: "Premium Materials", d: "Italian marble, walnut, hand-cast brass — sourced from heritage ateliers across Europe." },
    { n: "03", t: "Dedicated Project Management", d: "A single point of contact. Quiet rigor from the first sketch to the final detail." },
    { n: "04", t: "Transparent Pricing", d: "Fixed-fee proposals. No surprises. Every line item documented and justified." },
    { n: "05", t: "On-Time Delivery", d: "Milestones honored. We measure success in calendars, not promises." },
    { n: "06", t: "End-to-End Execution", d: "Concept, construction, styling, handover. One studio. One signature." },
  ];
  return (
    <section className="px-8 md:px-12 py-32 md:py-48 grid md:grid-cols-2 gap-16 md:gap-32 items-start">
      <div className="md:sticky md:top-32" data-reveal>
        <p className="text-eyebrow mb-6">Why Maison Noire · 02</p>
        <h2 data-split className="font-display text-6xl md:text-8xl mb-8">
          {splitChars("Designed to")}<br/>
          <span className="italic text-[#C8A45D]">{splitChars("be lived in.")}</span><br/>
          {splitChars("Built to last.")}
        </h2>
        <p className="text-white/60 max-w-md leading-relaxed">
          Six principles guide every project. They are not promises — they are the discipline by which we work.
        </p>
      </div>
      <div className="divide-y divide-white/10">
        {items.map((it) => (
          <div key={it.n} data-reveal className="py-10 grid grid-cols-[auto_1fr] gap-8 group hover:bg-white/[0.02] transition-colors px-4 -mx-4">
            <span className="text-eyebrow text-[#C8A45D]">{it.n}</span>
            <div>
              <h3 className="font-display text-3xl md:text-4xl mb-3 group-hover:translate-x-2 transition-transform">{it.t}</h3>
              <p className="text-white/60 leading-relaxed">{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Consultation", d: "We meet in your space — or ours — to understand the life you intend to live." },
    { n: "02", t: "Concept Design", d: "Mood, material, light. A directional palette becomes the soul of the project." },
    { n: "03", t: "Visualization", d: "Photoreal renders and 3D walkthroughs. Every room seen before it is built." },
    { n: "04", t: "Execution", d: "Our in-house craftsmen and trusted ateliers bring the design into the world." },
    { n: "05", t: "Handover", d: "Styled, photographed, and handed over fully turnkey. Move in. Live well." },
  ];
  return (
    <section id="process" className="process relative bg-[#0c0c0c]">
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
        <div className="relative flex-1 grid place-items-center">
          {steps.map((s, i) => (
            <div key={s.n} className="process-step absolute inset-0 grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-center max-w-6xl mx-auto px-4">
              <div className="font-display text-[18vw] md:text-[14vw] leading-none text-[#C8A45D]/90 -tracking-[0.04em]">{s.n}</div>
              <div>
                <h3 className="font-display text-5xl md:text-7xl mb-6">{s.t}</h3>
                <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">{s.d}</p>
                <p className="text-meta mt-8">Step {i + 1} of {steps.length}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
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
        <h2 data-split className="font-display text-5xl md:text-7xl mb-6">{splitChars("Before. After.")}</h2>
        <p className="text-white/60 max-w-xl leading-relaxed">Drag across to witness a tired apartment reimagined into a curated residence.</p>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-[#C8A45D] bg-black/60 backdrop-blur grid place-items-center text-[#C8A45D]">
            ◂ ▸
          </div>
        </div>
        <span className="absolute top-6 left-6 text-meta bg-black/50 px-3 py-1">Before</span>
        <span className="absolute top-6 right-6 text-meta bg-[#C8A45D] text-black px-3 py-1">After</span>
      </div>
    </section>
  );
}

function Materials() {
  const items = [
    { img: marble, t: "Italian Marble", n: "01" },
    { img: wood, t: "Natural Wood", n: "02" },
    { img: lighting, t: "Luxury Lighting", n: "03" },
    { img: furniture, t: "Designer Furniture", n: "04" },
    { img: finishes, t: "Custom Finishes", n: "05" },
  ];
  return (
    <section id="materials" className="bg-[#0c0c0c] py-32 px-8 md:px-12">
      <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto" data-reveal>
        <div>
          <p className="text-eyebrow mb-3">Material Library · 05</p>
          <h2 data-split className="font-display text-5xl md:text-7xl">{splitChars("Tactile by intent.")}</h2>
        </div>
        <p className="text-meta hidden md:block max-w-xs">Sourced from heritage workshops across Florence, Lyon and Kyoto.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mx-auto">
        {items.map((m, i) => (
          <article key={m.t} data-reveal className="group relative aspect-[3/4] overflow-hidden bg-black">
            <img src={m.img} alt={m.t} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <span className="text-eyebrow text-[#C8A45D]">{m.n}</span>
              <h3 className="font-display text-2xl md:text-3xl">{m.t}</h3>
            </div>
            <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A45D]/40 transition-colors" />
            <span className="sr-only">{i}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 500, suf: "+", l: "Projects Delivered" },
    { n: 15, suf: "+", l: "Years Experience" },
    { n: 98, suf: "%", l: "Client Satisfaction" },
    { n: 100, suf: "+", l: "Design Experts" },
  ];
  return (
    <section className="px-8 md:px-12 py-32 border-y border-white/10">
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {stats.map((s) => (
          <div key={s.l} data-reveal className="border-l border-white/10 pl-6">
            <div className="font-display text-6xl md:text-8xl text-[#C8A45D]">
              <span className="counter" data-count={s.n}>0</span><span>{s.suf}</span>
            </div>
            <p className="text-meta mt-4">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { p: client1, q: "They translated a feeling into a home. Every detail — every joinery line — carries meaning.", n: "Isabella Moretti", r: "Private Client · Villa Aurelia" },
    { p: client2, q: "From the first sketch we knew we had found our atelier. Discipline, taste, and absolute precision.", n: "Charles Whitford", r: "Founder · Whitford Capital" },
    { p: client3, q: "Maison Noire delivered a space that photographs beautifully and lives even better.", n: "Amelia Sterling", r: "Architect · Sterling Studio" },
  ];
  const [idx, setIdx] = useState(0);
  return (
    <section className="px-8 md:px-12 py-32 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <div>
            <p className="text-eyebrow mb-3">In Their Words · 06</p>
            <h2 data-split className="font-display text-5xl md:text-7xl">{splitChars("Clients & critics.")}</h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIdx((idx - 1 + items.length) % items.length)} className="w-12 h-12 border border-white/20 hover:border-[#C8A45D] hover:text-[#C8A45D] transition">←</button>
            <button onClick={() => setIdx((idx + 1) % items.length)} className="w-12 h-12 border border-white/20 hover:border-[#C8A45D] hover:text-[#C8A45D] transition">→</button>
          </div>
        </div>
        <div className="grid md:grid-cols-[400px_1fr] gap-12 items-center">
          <div className="mask-reveal aspect-square overflow-hidden bg-black">
            <img key={items[idx].p} src={items[idx].p} alt={items[idx].n} className="w-full h-full object-cover animate-[fade-in_0.6s_ease-out]" loading="lazy" />
          </div>
          <div key={idx} className="animate-[fade-in_0.6s_ease-out]">
            <span className="font-display text-8xl text-[#C8A45D] leading-none">"</span>
            <p className="font-display text-3xl md:text-5xl leading-tight -mt-8">{items[idx].q}</p>
            <div className="mt-10 flex items-center gap-4">
              <span className="w-12 h-px bg-[#C8A45D]" />
              <div>
                <p className="font-display text-2xl">{items[idx].n}</p>
                <p className="text-meta mt-1">{items[idx].r}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
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

  // Lock body scroll & ESC to close
  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const open = (i: number) => setActive(i);
  const close = () => {
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
    setActive(null);
  };

  // Try unmuted playback first, fallback to muted (autoplay-safe)
  const handleOpen = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.catch(() => { v.muted = true; v.play().catch(() => {}); });
    }
  };

  return (
    <section className="px-8 md:px-12 py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16" data-reveal>
          <div>
            <p className="text-eyebrow mb-3">Video Stories · 06b</p>
            <h2 data-split className="font-display text-5xl md:text-7xl">{splitChars("Hear them speak.")}</h2>
          </div>
          <p className="text-meta hidden md:block max-w-xs">Three minutes inside the rooms we built — told by the people who live there.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <button
              key={it.name}
              onClick={() => open(i)}
              data-reveal
              className="group relative aspect-[4/5] overflow-hidden bg-[#0c0c0c] text-left"
              aria-label={`Play video testimonial from ${it.name}`}
            >
              <img src={it.poster} alt={it.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="w-20 h-20 rounded-full border border-[#C8A45D] bg-black/40 backdrop-blur grid place-items-center text-[#C8A45D] text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C8A45D] group-hover:text-black">
                  ▶
                </span>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-eyebrow text-[#C8A45D]">0{i + 1} · Film</span>
                  <span className="text-meta bg-black/60 px-2 py-1">{it.duration}</span>
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

      {/* Modal */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial — ${items[active].name}`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/85 backdrop-blur-md animate-[fade-in_0.3s_ease-out]"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black border border-[#C8A45D]/30 animate-[scale-in_0.4s_ease-out]"
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
              className="w-full h-full object-cover bg-black"
            />
            <button
              onClick={close}
              aria-label="Close video"
              className="absolute -top-12 right-0 md:-right-2 text-white/80 hover:text-[#C8A45D] text-meta flex items-center gap-3"
            >
              <span className="w-10 h-10 border border-white/30 grid place-items-center hover:border-[#C8A45D]">✕</span>
              Close
            </button>
            <div className="absolute -bottom-14 left-0 right-0 flex justify-between text-meta text-white/70">
              <span>{items[active].name} · {items[active].role}</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Showcase() {

  const items = [
    { img: project1, n: "01", t: "Villa Aurelia", loc: "Lake Como, IT", area: "1,240 m²", style: "Contemporary Mediterranean", date: "Spring 2024" },
    { img: project2, n: "02", t: "Penthouse 47", loc: "Manhattan, US", area: "680 m²", style: "Modern Art Deco", date: "Winter 2024" },
    { img: project4, n: "03", t: "Maison Élysée", loc: "Paris, FR", area: "320 m²", style: "Haussmann Reimagined", date: "Autumn 2023" },
  ];
  return (
    <section className="py-32 px-8 md:px-12">
      <div className="max-w-7xl mx-auto mb-24 text-center" data-reveal>
        <p className="text-eyebrow mb-3">Project Stories · 07</p>
        <h2 data-split className="font-display text-6xl md:text-8xl">{splitChars("Spaces that")} <span className="italic text-[#C8A45D]">{splitChars("inspire.")}</span></h2>
      </div>
      <div className="space-y-32">
        {items.map((p, i) => (
          <article key={p.n} className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="mask-reveal aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.t} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div data-reveal>
              <p className="text-eyebrow mb-4">{p.n} · Featured</p>
              <h3 className="font-display text-5xl md:text-7xl mb-8">{p.t}</h3>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <Detail label="Location" value={p.loc} />
                <Detail label="Area" value={p.area} />
                <Detail label="Style" value={p.style} />
                <Detail label="Completed" value={p.date} />
              </div>
              <Magnetic>
                <a href="#" className="inline-block mt-10 text-meta border-b border-[#C8A45D] text-[#C8A45D] pb-2 hover:text-white hover:border-white">Read the case study →</a>
              </Magnetic>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-meta mb-2">{label}</p>
      <p className="font-display text-2xl">{value}</p>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#090909]">
      <div className="absolute inset-0 opacity-30">
        <img src={hero} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>
      <div className="relative text-center px-8 max-w-5xl">
        <p className="text-eyebrow mb-8" data-reveal>Begin · 08</p>
        <h2 data-split className="font-display text-7xl md:text-[11vw] leading-[0.9]">
          {splitChars("LET'S CREATE")}<br/>
          <span className="italic text-[#C8A45D]">{splitChars("your dream")}</span><br/>
          {splitChars("SPACE.")}
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mt-10 leading-relaxed" data-reveal>
          From concept to completion, we transform ideas into extraordinary living experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" data-reveal>
          <Magnetic>
            <a href="mailto:studio@maisonnoire.co" className="bg-[#C8A45D] text-black px-8 py-5 text-meta hover:bg-white">Schedule Consultation</a>
          </Magnetic>
          <Magnetic>
            <a href="#projects" className="border border-white/40 text-white px-8 py-5 text-meta hover:border-white">View Portfolio</a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-8 md:px-12 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h3 className="font-display text-7xl md:text-9xl tracking-tight leading-none">Maison<br/><span className="text-[#C8A45D] italic">Noire</span></h3>
            <p className="text-white/50 mt-8 max-w-sm leading-relaxed">An international atelier of architects and craftsmen — designing residences worthy of a lifetime.</p>
          </div>
          <FooterCol title="Services" items={["Interior Design", "Turnkey Construction", "Architectural Concept", "Art Curation", "Project Management"]} />
          <FooterCol title="Projects" items={["Residential", "Hospitality", "Commercial", "Yacht", "Restoration"]} />
          <FooterCol title="Contact" items={["studio@maisonnoire.co", "+1 (212) 555 0188", "12 Rue Saint-Honoré", "Paris · NYC · Milan"]} />
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-meta text-white/40">
          <p>© 2026 Maison Noire Atelier. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C8A45D]">Instagram</a>
            <a href="#" className="hover:text-[#C8A45D]">Pinterest</a>
            <a href="#" className="hover:text-[#C8A45D]">LinkedIn</a>
            <a href="#" className="hover:text-[#C8A45D]">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-eyebrow mb-6">{title}</p>
      <ul className="space-y-3 text-white/70">
        {items.map((i) => <li key={i}><a href="#" className="hover:text-[#C8A45D] transition-colors">{i}</a></li>)}
      </ul>
    </div>
  );
}
