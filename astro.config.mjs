import { defineConfig } from "astro/config";

// 2026-05-29 07:42 — sitemap moved to static public/sitemap-*.xml
export default defineConfig({
  site: "https://triplebench.com",
  output: "static"
});
