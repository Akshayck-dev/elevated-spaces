import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/lib/site-data";

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href?: string; to?: "/" | "/projects" | "/process" | "/contact" };
}) {
  return (
    <div className="md:col-span-2">
      <p className="text-eyebrow mb-6">{title}</p>
      <ul className="space-y-3 text-white/70">
        {items.map((i) => (
          <li key={i.label}>
            {i.to ? (
              <Link to={i.to} className="hover:text-[#C8A45D] transition-colors">
                {i.label}
              </Link>
            ) : i.href ? (
              <a href={i.href} className="hover:text-[#C8A45D] transition-colors">
                {i.label}
              </a>
            ) : (
              <span>{i.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black px-8 md:px-12 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <h3 className="font-display text-7xl md:text-9xl tracking-tight leading-none">
              Maison
              <br />
              <span className="text-[#C8A45D] italic">Noire</span>
            </h3>
            <p className="text-white/50 mt-8 max-w-sm leading-relaxed">
              Luxury home builders and architects — designing and delivering dream residences on a turnkey basis.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-8 text-meta border border-[#C8A45D] text-[#C8A45D] px-6 py-3 hover:bg-[#C8A45D] hover:text-black transition-colors"
            >
              Let's collaborate on a project
            </Link>
          </div>
          <FooterCol
            title="Services"
            items={[
              { label: "Architecture" },
              { label: "Construction" },
              { label: "Interior Design" },
              { label: "Turnkey Projects" },
            ]}
          />
          <FooterCol
            title="Quick Links"
            items={[
              { label: "Projects", to: "/projects" },
              { label: "Our Process", to: "/process" },
              { label: "Get a Quote", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Contact"
            items={[
              { label: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { label: CONTACT.phone, href: CONTACT.phoneHref },
              { label: "12 Rue Saint-Honoré, Paris" },
              { label: "Paris · NYC · Milan" },
            ]}
          />
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-meta text-white/40">
          <p>© 2026 Maison Noire Atelier. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C8A45D]">
              Instagram
            </a>
            <a href="#" className="hover:text-[#C8A45D]">
              Pinterest
            </a>
            <a href="#" className="hover:text-[#C8A45D]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
