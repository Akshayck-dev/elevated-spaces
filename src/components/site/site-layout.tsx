import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ScrollTrigger } from "@/lib/gsap";
import { useLenis } from "@/lib/use-lenis";
import { Footer } from "./footer";
import { FloatingContact } from "./floating-contact";
import { Nav } from "./nav";
import { Loader } from "./loader";
import { QuoteModal } from "./quote-modal";

export function SiteLayout({ children }: { children: ReactNode }) {
  useLenis();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <main className="bg-background text-foreground">
      <Loader />
      <Nav />
      {children}
      <Footer />
      <FloatingContact />
      <QuoteModal />
    </main>
  );
}
