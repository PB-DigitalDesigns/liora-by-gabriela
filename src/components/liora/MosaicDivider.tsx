import mosaicDivider from "@/assets/mosaic-divider.PNG";

export function MosaicDivider() {
  return (
    <div
      aria-hidden
      className="flex justify-center my-6"
    >
      <img
        src={mosaicDivider}
        alt=""
        className="w-[70%] max-w-3xl h-auto object-contain"
      />
    </div>
  );
}
