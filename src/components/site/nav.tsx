import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";
import { QuoteModal } from "./quote-modal";
import { cn } from "@/lib/utils";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/process" as const, label: "Process" },
  { to: "/materials" as const, label: "Materials" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add background when scrolled past 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[90] px-8 md:px-12 py-6 flex items-center justify-between transition-all duration-500",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Link to="/" className="font-display tracking-tight text-white relative z-10 flex flex-col items-center leading-none mt-1">
        <span className="text-2xl uppercase tracking-[0.15em]">Caeris</span>
        <span className="text-[0.65rem] tracking-[0.3em] text-[#C8A45D] uppercase mt-1">Homes</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-meta text-white/80">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hover:text-white transition-colors"
            activeProps={{ className: "text-[#C8A45D]" }}
          >
            {link.label}
          </Link>
        ))}
        
        {/* Mega Menu Trigger */}
        <div className="group relative">
          <button className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-meta uppercase">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          {/* Mega Menu Dropdown */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
            <div className="bg-[#0c0c0c] border border-white/10 p-8 grid grid-cols-2 gap-8 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-transparent" />
              <div>
                <h3 className="text-white font-display text-2xl mb-4 pb-2 border-b border-white/10">Architecture</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Conceptual Design</Link></li>
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Space Planning</Link></li>
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Landscape Integration</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-display text-2xl mb-4 pb-2 border-b border-white/10">Construction</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Turnkey Projects</Link></li>
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Project Management</Link></li>
                  <li><Link to="/" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Interior Fit-outs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Magnetic>
        <QuoteModal>
          <button className="text-meta bg-[#C8A45D] text-black px-5 py-3 hover:bg-white transition-colors cursor-pointer relative z-10">
            Get Free Quote
          </button>
        </QuoteModal>
      </Magnetic>
    </header>
  );
}
