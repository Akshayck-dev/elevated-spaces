import { CONTACT } from "@/lib/site-data";
import logoImg from "@/assets/logo-caeris.png";
import { Phone, Mail, ArrowUp, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground relative pt-20 pb-8 px-4 sm:px-8 md:px-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Left: Address */}
          <div className="flex flex-col text-left">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/90">Address</h3>
            <p className="text-sm leading-loose text-foreground/70 font-medium">
              ST. ANTONYS COMPLEX<br />
              NEAR PVT. BUS STAND, NAGAMPADAM<br />
              KOTTAYAM
            </p>
          </div>

          {/* Center: Logo & Tagline */}
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="Logo" className="h-20 md:h-24 w-auto object-contain mb-6 filter dark:invert" />
            <p className="text-sm text-foreground/80 font-medium mb-6 max-w-sm">
              Quality Construction is our Principle, Promise, and our Priority.
            </p>
            <div className="flex items-center gap-4">
               {/* Social Icons - outlined circles */}
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <MessageCircle className="w-4 h-4" /> {/* WhatsApp fallback */}
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Facebook className="w-4 h-4" />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-foreground/5 transition-colors border border-foreground/20 text-foreground/80 hover:text-[#C8A45D] hover:border-[#C8A45D]">
                 <Youtube className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col md:items-end text-left md:text-right">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-foreground/90">Contact</h3>
            <div className="space-y-3 flex flex-col md:items-end">
              <a href="tel:+919995470700" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-4 h-4" />
                <span>+91 999 54 70 700</span>
              </a>
              <a href="tel:+919446572326" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium">
                <Phone className="w-4 h-4" />
                <span>+91 944 65 72 326</span>
              </a>
              <a href="mailto:info@varkeyshomes.com" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium uppercase mt-2">
                <Mail className="w-4 h-4" />
                <span>info@varkeyshomes.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#C8A45D]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-foreground/60 font-medium">© Caeris Homes 2026</p>
          
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors text-foreground/80 hover:text-[#C8A45D]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          
          <p className="text-sm text-foreground/60 font-medium">Designed and Developed by ENEM</p>
        </div>
      </div>
    </footer>
  );
}
