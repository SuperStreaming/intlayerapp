import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { intlayerPlugin } from "vite-intlayer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), intlayerPlugin()],
});
