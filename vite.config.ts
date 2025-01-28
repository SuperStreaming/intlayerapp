import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";
// import { intlayerPlugin } from "vite-intlayer";

export const intlayerPlugin = (): PluginOption => ({
  name: "custom-plugin",

  config: () => {
    process.env = {
      // ...process.env,

      // VITE_CUSTOM_VAR2: "A CUSTOM VAR2",
      VITE_CUSTOM_VAR: "A CUSTOM VAR3",
    };
  },
});

export default defineConfig({
  plugins: [react(), intlayerPlugin()],
  server: {
    open: true,
  },
});
