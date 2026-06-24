import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function useProcessAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const textSteps = gsap.utils.toArray<HTMLElement>(".process-text-step");
      const images = gsap.utils.toArray<HTMLElement>(".process-img");
      
      if (textSteps.length === 0 || images.length === 0) return;

      // Initialize images (first one visible, rest hidden)
      gsap.set(images, { opacity: 0 });
      gsap.set(images[0], { opacity: 1 });

      textSteps.forEach((step, i) => {
        // Find the border element to highlight
        const borderEl = step.querySelector('.step-border');
        
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            // Fade in current image, fade out others
            gsap.to(images, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
            gsap.to(images[i], { opacity: 1, duration: 0.6, ease: "power2.inOut" });
            
            // Highlight text border
            if (borderEl) {
              gsap.to(borderEl, { borderColor: "#C8A45D", duration: 0.3 });
            }
          },
          onEnterBack: () => {
            gsap.to(images, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
            gsap.to(images[i], { opacity: 1, duration: 0.6, ease: "power2.inOut" });
            
            if (borderEl) {
              gsap.to(borderEl, { borderColor: "#C8A45D", duration: 0.3 });
            }
          },
          onLeave: () => {
            if (borderEl) {
              gsap.to(borderEl, { borderColor: "rgba(200, 164, 93, 0.3)", duration: 0.3 });
            }
          },
          onLeaveBack: () => {
            if (borderEl) {
              gsap.to(borderEl, { borderColor: "rgba(200, 164, 93, 0.3)", duration: 0.3 });
            }
          }
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);
}
