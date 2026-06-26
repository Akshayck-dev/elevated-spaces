import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "@/lib/gsap";
import { X } from "lucide-react";

import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";

const images = [proj1, proj2, proj3, proj4];

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/construction" as const, label: "Construction" },
  { to: "/process" as const, label: "Process" },
  { to: "/materials" as const, label: "Materials" },
];

export function FullScreenMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Set random image on mount
  useEffect(() => {
    if (menuRef.current) {
      gsap.set(menuRef.current, { yPercent: -100 });
    }
    if (isOpen) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }
  }, [isOpen]);

  // Handle open/close animations
  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.set(el, { visibility: "visible" });
      gsap.to(el, { yPercent: 0, duration: 0.8, ease: "expo.inOut" });
      
      if (linksRef.current) {
        const linkItems = linksRef.current.querySelectorAll("li");
        gsap.fromTo(
          linkItems,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "expo.out", delay: 0.4 }
        );
      }
      
      if (imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.5 }
        );
      }
    } else {
      gsap.to(el, { yPercent: -100, duration: 0.8, ease: "expo.inOut", onComplete: () => gsap.set(el, { visibility: "hidden" }) });
    }
  }, [isOpen]);

  const handleLinkHover = (index: number) => {
    // Optional: change image based on hovered link index modulo image length
    const newImage = images[index % images.length];
    if (newImage !== currentImage) {
      if (imgRef.current) {
        gsap.to(imgRef.current, { opacity: 0, duration: 0.2, onComplete: () => {
          setCurrentImage(newImage);
          gsap.to(imgRef.current, { opacity: 1, duration: 0.4 });
        }});
      } else {
        setCurrentImage(newImage);
      }
    }
  };

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-[100] bg-background text-foreground flex flex-col md:flex-row invisible overflow-hidden"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-[110] p-4 text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Left Column: Links */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-12 md:px-24 pt-20 md:pt-0">
        <p className="text-eyebrow mb-12 opacity-60">Menu</p>
        <ul ref={linksRef} className="space-y-6">
          {links.map((link, i) => (
            <li key={link.to} onMouseEnter={() => handleLinkHover(i)}>
              <Link
                to={link.to}
                onClick={onClose}
                className="font-display text-5xl md:text-7xl hover:italic hover:text-[#C8A45D] transition-colors"
                activeProps={{ className: "italic text-[#C8A45D]" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-20 flex gap-8">
          <a href="#" className="text-meta hover:text-[#C8A45D] transition-colors">Instagram</a>
          <a href="#" className="text-meta hover:text-[#C8A45D] transition-colors">LinkedIn</a>
          <a href="#" className="text-meta hover:text-[#C8A45D] transition-colors">Pinterest</a>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-surface">
        <img 
          ref={imgRef}
          src={currentImage} 
          alt="Project" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
    </div>
  );
}
