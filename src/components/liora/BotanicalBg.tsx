export function BotanicalBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#D97D49" strokeWidth="1" opacity="0.35" fill="none" strokeLinecap="round">
        {/* left lily stem */}
        <path d="M40 500 C 60 380, 90 300, 130 220" />
        <path d="M130 220 C 100 210, 80 195, 75 175" />
        <path d="M130 220 C 160 210, 175 195, 180 175" />
        <path d="M100 380 C 80 375, 65 365, 60 350" />
        <path d="M120 300 C 145 295, 160 285, 165 270" />
        {/* flower */}
        <ellipse cx="130" cy="180" rx="6" ry="14" transform="rotate(-30 130 180)" />
        <ellipse cx="140" cy="175" rx="6" ry="14" transform="rotate(15 140 175)" />
        <ellipse cx="120" cy="175" rx="6" ry="14" transform="rotate(-70 120 175)" />
        <ellipse cx="135" cy="190" rx="6" ry="14" transform="rotate(60 135 190)" />
        <circle cx="130" cy="182" r="3" />

        {/* right lily stem */}
        <path d="M760 560 C 720 420, 690 340, 660 260" />
        <path d="M660 260 C 690 250, 705 235, 710 215" />
        <path d="M660 260 C 630 250, 615 235, 610 215" />
        <path d="M710 440 C 730 435, 740 425, 745 410" />
        <path d="M690 340 C 665 335, 650 325, 645 310" />
        <ellipse cx="660" cy="220" rx="6" ry="14" transform="rotate(30 660 220)" />
        <ellipse cx="650" cy="215" rx="6" ry="14" transform="rotate(-15 650 215)" />
        <ellipse cx="670" cy="215" rx="6" ry="14" transform="rotate(70 670 215)" />
        <ellipse cx="655" cy="230" rx="6" ry="14" transform="rotate(-60 655 230)" />
        <circle cx="660" cy="222" r="3" />
      </g>
    </svg>
  );
}
