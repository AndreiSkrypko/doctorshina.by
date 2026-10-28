import { existsSync, rmSync, renameSync } from "node:fs";

const OUT = "out";
const DIST = "dist";

if (!existsSync(OUT)) {
  console.error(`Expected "${OUT}/" after next build (output: export).`);
  process.exit(1);
}

if (existsSync(DIST)) {
  rmSync(DIST, { recursive: true, force: true });
}

renameSync(OUT, DIST);
console.log(`Static site ready in ${DIST}/`);
