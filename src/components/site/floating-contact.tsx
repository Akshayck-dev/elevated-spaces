import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-sm font-medium"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Call us"
        className="flex items-center gap-2 bg-[#C8A45D] text-black px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-sm font-medium"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call us</span>
      </a>
    </div>
  );
}
