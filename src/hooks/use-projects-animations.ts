import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useRevealAnimations } from "./use-reveal-animations";

export function useProjectsAnimations() {
  useRevealAnimations();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });
    return () => ctx.revert();
  }, []);
}
