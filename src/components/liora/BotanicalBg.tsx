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
        className="absolute -left-40 top-4 w-[520px] opacity-18"
      />

      {/* Right lily */}
      <img
        src={lily}
        alt=""
        className="absolute -right-40 top-10 w-[520px] scale-x-[-1] opacity-18"
        />    
      </div>
  );
}
