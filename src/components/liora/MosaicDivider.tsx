import mosaicDivider from "@/assets/mosaic-divider.PNG";

export function MosaicDivider() {
  return (
    <div
      aria-hidden
      className="flex justify-center my-16"
    >
      <img
        src={mosaicDivider}
        alt=""
        className="w-full max-w-6xl h-auto"
      />
    </div>
  );
}
