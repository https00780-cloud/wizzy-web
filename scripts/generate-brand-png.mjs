/**
 * Renders public/favicon.svg → favicon.png & apple-touch-icon.png (sharp).
 * Run: node scripts/generate-brand-png.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "public", "favicon.svg");

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("[icons] sharp not installed — skip PNG generation (SVG favicon still works)");
    process.exit(0);
  }

  const svg = readFileSync(svgPath);
  await sharp(svg).resize(32, 32).png().toFile(join(root, "public", "favicon.png"));
  await sharp(svg).resize(180, 180).png().toFile(join(root, "public", "apple-touch-icon.png"));
  await sharp(svg).resize(512, 512).png().toFile(join(root, "public", "icon-512.png"));

  const ogSvg = readFileSync(join(root, "public", "og-brand.svg"));
  await sharp(ogSvg).resize(1200, 630).png().toFile(join(root, "public", "og-card.png"));
  await sharp(ogSvg).resize(1200, 630).png().toFile(join(root, "public", "og-image.png"));
  console.log("[icons] wrote favicon.png, apple-touch-icon.png, icon-512.png, og-card.png, og-image.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
