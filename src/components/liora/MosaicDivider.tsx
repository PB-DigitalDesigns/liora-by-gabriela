export function MosaicDivider() {
  return (
    <div aria-hidden className="w-full overflow-hidden">
      <svg
        className="block h-8 w-full sm:h-10"
        viewBox="0 0 240 32"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="liora-mosaic" x="0" y="0" width="40" height="32" patternUnits="userSpaceOnUse">
            <rect width="40" height="32" fill="#FAF6F0" />
            {/* diamond */}
            <path d="M20 4 L28 16 L20 28 L12 16 Z" fill="#D97D49" opacity="0.9" />
            <path d="M20 9 L25 16 L20 23 L15 16 Z" fill="#FAF6F0" />
            {/* flower dot */}
            <circle cx="20" cy="16" r="2.2" fill="#3B4D3A" />
            {/* side leaves */}
            <path d="M0 16 Q5 8 10 16 Q5 24 0 16 Z" fill="#A3A670" />
            <path d="M40 16 Q35 8 30 16 Q35 24 40 16 Z" fill="#A3A670" />
            {/* corner accents */}
            <circle cx="0" cy="0" r="1.4" fill="#B8632F" />
            <circle cx="40" cy="0" r="1.4" fill="#B8632F" />
            <circle cx="0" cy="32" r="1.4" fill="#B8632F" />
            <circle cx="40" cy="32" r="1.4" fill="#B8632F" />
          </pattern>
        </defs>
        <rect width="240" height="32" fill="url(#liora-mosaic)" />
      </svg>
    </div>
  );
}
