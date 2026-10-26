import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const legacyArticles = [
      "kogda-menyat-rezinu",
      "spuskaet-koleso",
      "priznaki-iznosa-shin",
      "prokol-shinyi",
    ];
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/price/index.php", destination: "/uslugi/", permanent: true },
      { source: "/price", destination: "/uslugi/", permanent: true },
      { source: "/price/", destination: "/uslugi/", permanent: true },
      { source: "/gallery/index.php", destination: "/kontakty/", permanent: true },
      { source: "/gallery", destination: "/kontakty/", permanent: true },
      { source: "/gallery/", destination: "/kontakty/", permanent: true },
      { source: "/sovety/index.php", destination: "/sovety/", permanent: true },
      ...legacyArticles.map((slug) => ({
        source: `/sovety/${slug}.php`,
        destination: `/sovety/${slug}/`,
        permanent: true,
      })),
    ];
  },
  turbopack: {
    root: projectRoot,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
