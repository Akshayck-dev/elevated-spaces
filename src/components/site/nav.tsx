import { Link } from "@tanstack/react-router";
import { Magnetic } from "./magnetic";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/process" as const, label: "Process" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="font-display text-2xl tracking-tight text-white">
        Maison<span className="text-[#C8A45D]">·</span>Noire
      </Link>
      <nav className="hidden md:flex gap-10 text-meta text-white/80">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hover:text-white"
            activeProps={{ className: "text-[#C8A45D]" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Magnetic>
        <Link to="/contact" className="text-meta bg-[#C8A45D] text-black px-5 py-3 hover:bg-white transition-colors">
          Get Free Quote
        </Link>
      </Magnetic>
    </header>
  );
}
