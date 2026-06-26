import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = el.dataset.parallax ? parseFloat(el.dataset.parallax) : 0.2;
        
        gsap.to(el, {
          yPercent: speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
}
