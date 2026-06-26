import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useProcessAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Section Header
      gsap.from(".process-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 80%",
        },
      });

      // Select all images and steps
      const images = gsap.utils.toArray<HTMLElement>(".process-img");
      const steps = gsap.utils.toArray<HTMLElement>(".process-text-step");

      // Set initial state for images (hide all except the first)
      images.forEach((img, i) => {
        if (i > 0) {
          gsap.set(img, { opacity: 0 });
        } else {
          gsap.set(img, { opacity: 1 });
        }
      });

      steps.forEach((step, i) => {
        // 2. Image Opacity Reveal (Scroll-Tied)
        if (i > 0) {
          gsap.to(images[i], {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
              end: "top 20%",
              scrub: 1, // Add 1 second of smoothing to prevent scroll wheel lag
            },
          });
        }

        // 3. Text Fade-Up (Triggered)
        const textContent = step.querySelector(".step-content");
        if (textContent) {
          gsap.from(textContent, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
            },
          });
        }

        // 4. Parallax Step Numbers (Scroll-Tied)
        const number = step.querySelector(".step-number");
        if (number) {
          gsap.fromTo(number,
            { y: -30 },
            {
              y: 50,
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        // 5. Progress Line Drawing (Scroll-Tied)
        const progressLine = step.querySelector(".progress-line");
        if (progressLine) {
          gsap.fromTo(progressLine,
            { height: "0%" },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top 60%",
                end: "bottom 60%",
                scrub: 1,
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);
}
