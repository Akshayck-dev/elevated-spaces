import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a 
        href={CONTACT.phoneHref}
        className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform hover:scale-110 active:scale-95 border-2 border-white/20 relative group"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-black text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Us
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95 relative group"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={32} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-black text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
