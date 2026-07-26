export function MosaicDivider() {
  return (
    <div
      role="presentation"
      className="w-full h-[clamp(46px,6vw,86px)] bg-repeat-x bg-center"
      style={{
        backgroundImage: "url('/assets/mosaic-divider.PNG')",
        backgroundSize: "auto 100%",
      }}
    />
  );
}
