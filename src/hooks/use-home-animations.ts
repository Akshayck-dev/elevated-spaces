import { useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useRevealAnimations } from "./use-reveal-animations";

export function useHomeAnimations() {
  useRevealAnimations();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      gsap.to(".hero-img", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.2,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);
}
