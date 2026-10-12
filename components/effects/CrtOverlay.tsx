/** Fixed scanline + grain layer. Pure CSS, never intercepts pointer events. */
export function CrtOverlay() {
  return <div aria-hidden className="crt" />;
}
