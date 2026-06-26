import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Loader() {
  const [stage, setStage] = useState<"initial" | "fadeLogo" | "exit">("initial");
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Random progress increment to make it look realistic
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 150);

    // Stage 1: Initial state shows logo
    const t1 = setTimeout(() => {
      setProgress(100); // Ensure it reaches 100% before fading
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
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
        stage === "exit" && "-translate-y-full"
      )}
    >
      <div
        className={cn(
          "transition-all duration-500 ease-out flex flex-col items-center w-full px-4",
          stage === "fadeLogo" ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
        )}
      >
        <div className="relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-muted-foreground/30 font-heading whitespace-nowrap">
          CAERIS HOMES
          
          {/* Red Filled Text */}
          <div 
            className="absolute left-0 top-0 overflow-hidden text-red-600 whitespace-nowrap transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          >
            CAERIS HOMES
          </div>
        </div>
      </div>
    </div>
  );
}
