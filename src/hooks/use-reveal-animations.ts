import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useRevealAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

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

      gsap.utils.toArray<HTMLElement>(".mask-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.4,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);
}
