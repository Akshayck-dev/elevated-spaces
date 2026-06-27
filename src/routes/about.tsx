import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { splitChars } from "@/lib/split-chars";
import heroImg from "@/assets/hero.jpg";
import project1 from "@/assets/project-1.jpg";
import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Eye } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Creo Homes" },
      { name: "description", content: "Best Home Builders In Kerala" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <PageHero 
        eyebrow="CREO HOMES"
        title="Best Home Builders In Kerala"
        image={heroImg}
      />

      {/* Intro Text Section */}
      <section className="py-16 px-4 sm:px-6 md:px-10 xl:px-20 max-w-5xl mx-auto text-center">
        <p className="text-foreground/80 text-xl md:text-2xl leading-relaxed font-medium" data-reveal>
          As leading Luxury Builders and Architects in Kerala, we specialize in crafting
          beautiful, sustainable, and luxurious homes. With over a decade of experience in
          architecture and homebuilding, our mission is to design energy-efficient, resource-conscious,
          and healthy living spaces tailored to your unique needs and budget. Our team encourages creative
          collaboration and explores diverse design possibilities to ensure every project reflects both your vision
          and our commitment to excellence.
        </p>
      </section>

      {/* Philosophy, Mission, Vision */}
      <section className="py-16 bg-surface px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Philosophy */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group">
            <h3 className="text-3xl font-display mb-8 group-hover:text-red-600 transition-colors">Our philosophy</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-red-600 transition-colors">
              <div className="absolute inset-0 bg-red-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Lightbulb size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              We deliver top-quality architectural services, blending creative design, technical excellence, and attention to detail. Our style evolves from site specifics and design goals, avoiding imitation of trends. We excel in both contemporary and historical designs to bring your dream home to life.
            </p>
          </div>

          {/* Mission */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group delay-100">
            <h3 className="text-3xl font-display mb-8 group-hover:text-red-600 transition-colors">On a mission</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-red-600 transition-colors">
              <div className="absolute inset-0 bg-red-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Target size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Our mission at Creo Homes is to provide client focused service through our responsible practice of Architecture. Our tradition of dedication, professionalism and outstanding customer service is a testament to that mission as we strive each day for excellence in bringing our valued clients' ideas to life.
            </p>
          </div>

          {/* Vision */}
          <div data-reveal className="bg-background border border-border/10 p-10 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center group delay-200">
            <h3 className="text-3xl font-display mb-8 group-hover:text-red-600 transition-colors">Our vision</h3>
            <div className="w-20 h-20 rounded-full border border-foreground/20 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-red-600 transition-colors">
              <div className="absolute inset-0 bg-red-600/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              <Eye size={32} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-foreground/70 leading-relaxed text-sm">
              We envision raising the standards of living by designing the most energy-efficient and environmentally responsible homes possible. We want to viewed as a respected architectural firm, providing high quality design and services to our clients with honesty and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 md:px-10 xl:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" data-parallax="0.1">
          <img src={heroImg} alt="Background" className="w-full h-[120%] object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center mb-24 md:mb-32 border-b border-white/10 pb-12">
            <div data-reveal>
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">1000+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Completed projects</p>
            </div>
            <div data-reveal className="delay-100">
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">12+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Years of experience</p>
            </div>
            <div data-reveal className="delay-200">
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">100+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Team members</p>
            </div>
            <div data-reveal className="delay-300">
              <p className="text-5xl md:text-6xl lg:text-7xl font-display mb-4 text-[#C8A45D]">500+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Active clients</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight" data-split>
              {splitChars("From inception to end of project' solution")}
            </h2>
            <div data-reveal className="space-y-8 text-white/70 leading-relaxed text-xl">
              <p>
                At Creo Homes, we view each project as a journey, from concept to successful completion. As top home builders and architectural consultants in Kerala, our skilled team focuses on delivering sustainable, innovative homes through turnkey construction.
              </p>
              <p>
                We handle planning, design, and execution of both interiors and exteriors, ensuring client satisfaction at every stage, and hand over the keys after completion. Using advanced technology, proven processes, and award-winning designs, we aim to provide an exceptional experience for every homeowner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Leadership Section */}
      <section className="py-20 px-4 sm:px-6 md:px-10 xl:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20 text-center" data-reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">Meet Our Leaders</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mr. Roshan Eshutty", role: "Managing Director", img: project1 },
              { name: "Mr. Arun Joy", role: "Director - Sales & Marketing", img: project1 },
              { name: "Mr. Tigil Thomas", role: "Director - Projects : construction", img: project1 },
              { name: "Mr. Nikhil Sotter", role: "Director - Projects : Interior", img: project1 }
            ].map((member, i) => (
              <div key={i} data-reveal className={`bg-[#111] text-white rounded-xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden mask-reveal">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 transition-opacity duration-500 group-hover:opacity-100"></div>
                  {/* Placeholder for team images */}
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                </div>
                <div className="p-6 relative z-20 -mt-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-display mb-1">{member.name}</h3>
                  <p className="text-[#C8A45D] text-sm uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Collaborate CTA */}
      <section className="bg-red-600 text-white py-20 px-4 sm:px-6 md:px-10 text-center relative overflow-hidden">
        {/* Parallax texture background */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay w-full h-[120%] -top-[10%]" data-parallax="0.15">
           <img src={project1} alt="Texture" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display mb-8 md:mb-12 leading-tight" data-split>
            {splitChars("Let's collaborate on a project")}
          </h2>
          <div data-reveal>
            <Button className="bg-black hover:bg-white hover:text-black text-white px-8 py-6 sm:px-12 sm:py-8 text-base sm:text-xl rounded-none shadow-2xl transition-all duration-500 hover:scale-105 uppercase tracking-widest min-w-[44px] min-h-[44px] whitespace-normal h-auto">
              Give us a call now
            </Button>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}
