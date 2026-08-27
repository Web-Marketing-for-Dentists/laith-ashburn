import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://offer.dentist-in-ashburn.com",
  output: "server",
  session: {
    driver: "memory",
  },
  adapter: cloudflare({ mode: "directory" }),
  vite: {
    ssr: {
      external: [],
    },
  },
});
