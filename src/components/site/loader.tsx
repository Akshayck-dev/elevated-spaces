import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Loader() {
  const [stage, setStage] = useState<"initial" | "fadeLogo" | "exit">("initial");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Stage 1: Initial state shows logo
    const t1 = setTimeout(() => {
      setStage("fadeLogo");
    }, 2000);

    // Stage 2: Slide out the curtain
    const t2 = setTimeout(() => {
      setStage("exit");
    }, 2500);

    // Stage 3: Remove from DOM
    const t3 = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
        stage === "exit" && "-translate-y-full"
      )}
    >
      <div
        className={cn(
          "font-display tracking-tight text-white transition-all duration-500 ease-out flex flex-col items-center gap-2",
          stage === "fadeLogo" ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        )}
      >
        <div className="flex flex-col items-center leading-none mb-4">
          <span className="text-6xl md:text-8xl uppercase tracking-[0.15em] text-white">Caeris</span>
          <span className="text-xl md:text-2xl tracking-[0.3em] text-[#C8A45D] uppercase mt-2">Homes</span>
        </div>
        <span className="text-meta text-white/50 tracking-[0.2em] uppercase text-center max-w-[80vw]">Architecture | Interior Design | Construction</span>
      </div>
    </div>
  );
}
