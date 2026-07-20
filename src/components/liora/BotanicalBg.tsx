import lily from "@/assets/lily-line-art.png";

export function BotanicalBg({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Left lily */}
      <img
        src={lily}
        alt=""
        className="absolute -left-20 top-16 w-[320px] opacity-20"
      />

      {/* Right lily */}
      <img
        src={lily}
        alt=""
        className="absolute -right-20 bottom-0 w-[320px] rotate-180 opacity-20"
      />
    </div>
  );
}
