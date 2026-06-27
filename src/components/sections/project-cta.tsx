import { Link } from "@tanstack/react-router";
import { Magnetic } from "@/components/site/magnetic";
import { splitChars } from "@/lib/split-chars";

export function ProjectCTA() {
  return (
    <section className="px-4 sm:px-8 md:px-12 xl:px-20 py-12 bg-[#C8A45D] text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div data-reveal>
          <p className="text-meta mb-3 opacity-70">Let's begin</p>
          <h2 data-split className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            {splitChars("Have a project in mind?")}
          </h2>
        </div>
        <Magnetic>
          <Link
            to="/contact"
            className="inline-block bg-background text-foreground px-10 py-5 text-meta hover:bg-background transition-colors w-fit"
          >
            Talk to us today →
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
