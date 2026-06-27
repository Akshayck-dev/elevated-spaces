import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";
import { FullScreenMenu } from "./full-screen-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo-caeris.png";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/construction" as const, label: "Services" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/projects" as const, label: "Gallery" }, // Mapping to projects for now
  { to: "/quote" as const, label: "Contact" },
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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

  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header 
        className={cn(
        "fixed top-0 left-0 right-0 z-[90] px-4 sm:px-6 md:px-10 flex items-center justify-between transition-all duration-500",
        isTransparent ? "bg-transparent py-6" : "bg-white border-b border-black/5 py-4 shadow-sm",
        isHidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Link to="/" className="relative z-10">
        <img src={logoImg} alt="Logo" className="h-16 md:h-20 w-auto object-contain transition-all" />
      </Link>
      
      <nav className={cn(
        "hidden md:flex items-center gap-8 text-[15px] font-medium transition-colors duration-500",
        isTransparent ? "text-white/90" : "text-black/80"
      )}>
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={cn(
              "relative transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
              isTransparent ? "hover:text-white after:bg-white drop-shadow-sm" : "hover:text-black after:bg-black"
            )}
            activeProps={{ className: isTransparent ? "text-white after:scale-x-100 after:origin-bottom-left" : "text-black after:scale-x-100 after:origin-bottom-left font-semibold" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 z-10">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className={cn(
            "flex items-center justify-center min-w-[44px] min-h-[44px] transition-colors shadow-sm rounded-sm",
            isTransparent ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-black/90"
          )}
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
