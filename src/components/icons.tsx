import { SVGProps } from "react";

export function ArchitectureIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 21h18" className="group-hover:stroke-[#C8A45D] transition-colors duration-500" />
      <path d="M5 21V7l7-5 7 5v14" />
      <path d="M9 21v-6h6v6" />
      {/* Drafting compass - opens up on hover */}
      <g className="group-hover:-rotate-12 transition-transform duration-500" style={{ transformOrigin: "12px 4px" }}>
        <path d="M12 4l-4 10" />
      </g>
      <g className="group-hover:rotate-12 transition-transform duration-500" style={{ transformOrigin: "12px 4px" }}>
        <path d="M12 4l4 10" />
      </g>
      <circle cx="12" cy="4" r="1.5" className="group-hover:fill-[#C8A45D] transition-colors duration-500" />
    </svg>
  );
}

export function ConstructionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Hardhat */}
      <path d="M5 10c0-3.87 3.13-7 7-7s7 3.13 7 7" />
      <path d="M3 10h18" />
      {/* Hardhat Light - glows on hover */}
      <circle cx="12" cy="6.5" r="1.5" className="group-hover:fill-[#C8A45D] group-hover:scale-150 transition-all duration-500" style={{ transformOrigin: "12px 6.5px" }} />
      
      {/* Face */}
      <path d="M8 10v2a4 4 0 0 0 8 0v-2" />
      
      {/* Body / Overalls */}
      <path d="M6 21v-3c0-1.5 1-3 2.5-3.5" />
      <path d="M18 21v-3c0-1.5-1-3-2.5-3.5" />
      <path d="M8.5 14.5c1 1.5 2 2.5 3.5 2.5s2.5-1 3.5-2.5" />
      <path d="M9 21v-4" />
      <path d="M15 21v-4" />
      <path d="M2 21h20" className="group-hover:stroke-[#C8A45D] transition-colors duration-500" />
      
      {/* Wrench - rotates on hover */}
      <g className="group-hover:-rotate-45 transition-transform duration-500" style={{ transformOrigin: "21px 10px" }}>
        <path d="M21 7a1.5 1.5 0 0 0-1.5 1.5v3l-1.5 1.5a1.5 1.5 0 0 0 0 2.1l1.4 1.4a1.5 1.5 0 0 0 2.1 0l1.5-1.5V8.5A1.5 1.5 0 0 0 21 7z" />
      </g>
    </svg>
  );
}

export function InteriorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Sofa */}
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M2 13h20v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z" />
      <path d="M4 11h16" />
      <path d="M2 13v-2a1 1 0 0 1 1-1h2" />
      <path d="M22 13v-2a1 1 0 0 0-1-1h-2" />
      
      {/* Cushions */}
      <path d="M12 11v4" />
      
      {/* Floor Lamp - lamp head tilts and glows on hover */}
      <g className="group-hover:-rotate-12 transition-transform duration-500" style={{ transformOrigin: "18px 13px" }}>
        <path d="M19 6L17 2h4l-2 4v7" />
        <circle cx="18" cy="4" r="1.5" className="opacity-0 group-hover:opacity-100 group-hover:fill-[#C8A45D] transition-opacity duration-500 stroke-none" />
      </g>
    </svg>
  );
}

export function TurnkeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* House outline */}
      <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" className="group-hover:stroke-[#C8A45D] transition-colors duration-500" />
      
      {/* Large Key - rotates to "unlock" on hover */}
      <g className="group-hover:rotate-90 transition-transform duration-500" style={{ transformOrigin: "12px 10px" }}>
        <circle cx="9" cy="14" r="2" className="group-hover:fill-[#C8A45D] transition-colors duration-500" />
        <path d="M10.5 12.5L16 7" />
        <path d="M14 9l1 1" />
        <path d="M15 8l1 1" />
      </g>
    </svg>
  );
}
