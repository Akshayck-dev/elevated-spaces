import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";
import { QuoteModal } from "./quote-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import { FullScreenMenu } from "./full-screen-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-caeris.png";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/construction" as const, label: "Construction" },
  { to: "/process" as const, label: "Process" },
  { to: "/materials" as const, label: "Materials" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  
  const isHome = pathname === "/";
  const forceDark = isHome && !isScrolled;

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
    <>
      <header 
        className={cn(
        "fixed top-0 left-0 right-0 z-[90] px-8 md:px-12 py-6 flex items-center justify-between transition-all duration-500",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/5 py-4" : "bg-transparent",
        forceDark ? "dark" : "",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Link to="/" className="relative z-10">
        <img src={logoImg} alt="Caeris Homes" className="h-20 md:h-24 w-auto object-contain dark:brightness-100 brightness-0 transition-all" />
      </Link>
      
      <nav className="hidden md:flex items-center gap-10 text-meta text-foreground/80">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="relative hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#C8A45D] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
            activeProps={{ className: "text-[#C8A45D] after:scale-x-100 after:origin-bottom-left" }}
          >
            {link.label}
          </Link>
        ))}
        
        {/* Mega Menu Trigger */}
        <div className="group relative">
          <button className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer text-meta uppercase">
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:rotate-180 transition-transform duration-300"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          
          {/* Mega Menu Dropdown */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-screen max-w-xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
            <div className="bg-background border border-border/10 p-8 grid grid-cols-2 gap-8 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-transparent" />
              <div>
                <h3 className="text-foreground font-display text-2xl mb-4 pb-2 border-b border-border/10">Architecture</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Conceptual Design</Link></li>
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Space Planning</Link></li>
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Landscape Integration</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-display text-2xl mb-4 pb-2 border-b border-border/10">Construction</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Turnkey Projects</Link></li>
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Project Management</Link></li>
                  <li><Link to="/" className="text-foreground/60 hover:text-[#C8A45D] transition-colors text-sm">Interior Fit-outs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center gap-4 z-10">
        <ThemeToggle />
        <Magnetic>
          <QuoteModal>
            <button className="hidden md:block text-meta bg-[#C8A45D] text-black px-5 py-3 hover:bg-white transition-colors cursor-pointer relative z-10">
              Get Free Quote
            </button>
          </QuoteModal>
        </Magnetic>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 text-meta uppercase hover:text-[#C8A45D] transition-colors"
        >
          <span className="hidden sm:inline">Menu</span>
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </header>

    <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
