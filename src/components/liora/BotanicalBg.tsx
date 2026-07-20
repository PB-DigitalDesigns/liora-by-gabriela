export function BotanicalBg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#D97D49"
        strokeWidth="1.5"
        opacity="0.22"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* LEFT LILY — delicate editorial line art */}

        {/* stem */}
       <path d="M25 560 C45 450 70 340 110 235" />
      
        {/* leaves */}
        <path d="M120 390 C80 370 55 340 60 310 C95 330 120 350 120 390" />
        <path d="M145 315 C180 285 205 250 205 220 C170 235 150 260 145 315" />

        {/* lily flower petals */}
        <path d="M110 235 C135 220 120 185 135 150 C155 170 165 200 165 235" />
        <path d="M110 235 C155 190 165 145 190 120 C205 165 195 205 165 235" />
        <path d="M110 235 C205 215 235 185 230 145 C195 155 175 190 165 235" />
        <path d="M110 235 C125 230 100 210 95 175 C125 180 150 200 165 235" />

        {/* lily center */}
        <path d="M160 230 C165 225 170 225 175 230" />
        <circle cx="168" cy="228" r="2" />

        {/* RIGHT LILY */}

        {/* stem */}
        <path d="M775 600 C755 470 735 360 700 255" />
      
        {/* leaves */}
        <path d="M680 420 C730 390 755 350 750 315 C710 340 685 375 680 420" />
        <path d="M655 330 C620 300 595 260 600 230 C640 250 660 285 655 330" />

        {/* lily flower petals */}
        <path d="M700 255 C660 235 680 195 665 155 C640 175 630 215 630 255" />
        <path d="M700 255 C640 205 630 160 600 135 C590 180 600 220 630 255" />
        <path d="M700 255 C590 240 560 205 570 170 C605 180 625 215 630 255" />
        <path d="M700 255 C670 250 700 220 705 185 C670 190 645 220 630 255" />

        {/* lily center */}
        <path d="M625 250 C630 245 635 245 640 250" />
        <circle cx="633" cy="248" r="2" />

        {/* subtle floating stems */}
        <path d="M350 80 C370 130 375 180 360 220" opacity="0.5" />
        <path d="M360 220 C345 205 335 190 335 170" opacity="0.5" />
        <path d="M360 220 C380 205 390 185 390 165" opacity="0.5" />
      </g>
    </svg>
  );
}
