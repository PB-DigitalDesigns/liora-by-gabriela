export function LioraWordmark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex items-start leading-none ${className}`}
      style={{ fontFamily: "'Playfair Display', serif", color }}
    >
      <span className="relative pr-[0.05em] text-[1em] font-bold tracking-tight">
        L
      </span>
      <span className="relative text-[1em] font-bold tracking-tight">
        {/* 'i' with flower dot */}
        <span className="relative inline-block">
          <span aria-hidden>ı</span>
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="absolute left-1/2 top-[-0.55em] h-[0.6em] w-[0.6em] -translate-x-1/2"
          >
            <g fill={color}>
              {Array.from({ length: 5 }).map((_, i) => {
                const a = (i * 72 - 90) * (Math.PI / 180);
                const cx = 10 + Math.cos(a) * 5;
                const cy = 10 + Math.sin(a) * 5;
                return (
                  <ellipse
                    key={i}
                    cx={cx}
                    cy={cy}
                    rx="2.2"
                    ry="4"
                    transform={`rotate(${i * 72} ${cx} ${cy})`}
                  />
                );
              })}
              <circle cx="10" cy="10" r="1.6" />
            </g>
          </svg>
        </span>
        ora
      </span>
    </span>
  );
}
