import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useProcessAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const proc = document.querySelector<HTMLElement>(".process");
      if (!proc) return;

      const steps = gsap.utils.toArray<HTMLElement>(".process-step");
      if (steps.length === 0) return;

      gsap.set(steps, { opacity: 0, scale: 0.96, pointerEvents: "none" });
      gsap.set(steps[0], { opacity: 1, scale: 1, pointerEvents: "auto" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: proc,
          start: "top top",
          end: () => `+=${steps.length * window.innerHeight}`,
          pin: ".process-pin",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < steps.length; i++) {
        tl.to(steps[i - 1], { opacity: 0, scale: 0.96, pointerEvents: "none", duration: 1, ease: "none" }).to(
          steps[i],
          { opacity: 1, scale: 1, pointerEvents: "auto", duration: 1, ease: "none" },
          "<",
        );
      }

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}
