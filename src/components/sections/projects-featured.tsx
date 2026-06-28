import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Home } from "lucide-react";
import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/project-2.jpg";
import img3 from "@/assets/project-3.jpg";

export function ProjectsFeatured() {
  const projects = [
    {
      title: "Mr. Menon & Family",
      location: "Kochi, Kerala",
      img: img1
    },
    {
      title: "Mr. Nambiar & Family",
      location: "Trivandrum, Kerala",
      img: img2
    },
    {
      title: "Mr. Moretti & Family",
      location: "Lake Como, Italy",
      img: img3
    }
  ];

  return (
    <section className="relative z-30 px-4 sm:px-8 md:px-12 xl:px-20 -mt-24 sm:-mt-32 md:-mt-48 pb-20">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Link 
              key={i} 
              to={`/projects`} 
              className="group block relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black"
              data-reveal
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90" />
              
              {/* Top Left Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Home className="w-5 h-5 text-[#C8A45D]" strokeWidth={1.5} />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-[#C8A45D] mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-white text-[10px] font-bold tracking-widest uppercase opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  VIEW PROJECT <ArrowRight className="w-3 h-3 text-[#C8A45D]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
