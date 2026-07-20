import lily from "@/assets/lily-line-art.png";

export function BotanicalBg({ className = "" }: { className?: string }) {
  return (
    <div
      <div
        className={`pointer-events-none absolute top-0 left-0 w-full h-[1000px] overflow-visible ${className}`}
      >    
      
      {/* Desktop Left */}
      <img
        src={lily}
        alt=""
        className="
          hidden lg:block
          absolute
          -left-44
          top-0
          w-[700px]
          opacity-20
          select-none
        "
      />

     {/* Desktop Right */}
      <img
        src={lily}
        alt=""
        className="
        hidden lg:block
        absolute
        -right-56
        top-28
        w-[700px]
        scale-x-[-1]
        rotate-[-40deg]
        opacity-20
        select-none
     "
    />

   {/* Desktop Right Bottom */}
    <img
      src={lily}
      alt=""
      className="
      hidden lg:block
      absolute
      -right-56
      top-[500px]
      w-[700px]
      rotate-[-20deg]
      opacity-20
      select-none
    "
   />  
      
      {/* Mobile Top */}
      <img
        src={lily}
        alt=""
        className="
          lg:hidden
          absolute
          -left-28
          -top-10
          w-[340px]
          opacity-20
          select-none
        "
      />

      {/* Mobile Bottom */}
      <img
        src={lily}
        alt=""
        className="
          lg:hidden
          absolute
          -right-24
          bottom-[-80px]
          w-[300px]
          scale-x-[-1]
          opacity-15
          select-none
        "
      />
    </div>
  );
}
