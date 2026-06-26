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
  { to: "/" as const, label: "Architecture" },
  { to: "/construction" as const, label: "Construction" },
  { to: "/projects" as const, label: "Interior" }, // Mapping to projects for now
  { to: "/process" as const, label: "Turnkey projects" }, // Mapping to process for now
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
        "fixed top-0 left-0 right-0 z-[90] px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-500",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/5 py-4" : "bg-transparent",
        forceDark ? "dark" : "",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Link to="/" className="relative z-10">
        <img src={logoImg} alt="Caeris Homes" className="h-16 md:h-20 w-auto object-contain dark:brightness-100 brightness-0 transition-all" />
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-foreground/90">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="relative hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 drop-shadow-sm"
            activeProps={{ className: "text-white after:scale-x-100 after:origin-bottom-left" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 z-10">
        <ThemeToggle />
        <Magnetic>
          <QuoteModal>
            <button className="hidden md:block bg-white text-black font-medium px-6 py-2.5 hover:bg-gray-100 transition-colors cursor-pointer shadow-sm rounded-sm">
              Get a Free Quote
            </button>
          </QuoteModal>
        </Magnetic>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center w-10 h-10 bg-white text-black hover:bg-gray-100 transition-colors shadow-sm rounded-sm"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>
    </header>

    <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
