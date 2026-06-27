import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center justify-center bg-[#25D366] text-foreground p-3 md:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:scale-105 transition-all text-sm font-medium overflow-hidden"
      >
        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 ease-in-out whitespace-nowrap">
          <span className="block text-[10px] uppercase tracking-wider opacity-80">Whatsapp</span>
          <span className="block font-display text-lg">{CONTACT.phone}</span>
        </span>
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call us"
        className="group flex items-center justify-center bg-[#C8A45D] text-black p-3 md:p-4 min-w-[48px] min-h-[48px] rounded-full shadow-lg hover:scale-105 transition-all text-sm font-medium overflow-hidden"
      >
        <Phone className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 ease-in-out whitespace-nowrap">
          <span className="block text-[10px] uppercase tracking-wider opacity-80">Call us now</span>
          <span className="block font-display text-lg">{CONTACT.phone}</span>
        </span>
      </a>
    </div>
  );
}
