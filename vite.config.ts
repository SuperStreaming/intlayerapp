import react from "@vitejs/plugin-react";
import { defineConfig, PluginOption } from "vite";
// import { intlayerPlugin } from "vite-intlayer";

const customPlugin = (): PluginOption => ({
  name: "custom-plugin",

  config: () => {
    process.env = {
      ...process.env,
      VITE_CUSTOM_VAR: "A CUSTOM VAR",
    };
  },
});

const intlayerPlugin = (): PluginOption => ({
  name: "custom-plugin",

  config: () => {
    process.env = {
      ...process.env,
      VITE_INTLAYER_VAR: "A CUSTOM VAR3",
    };
  },
});

export default defineConfig({
  plugins: [react(), intlayerPlugin(), customPlugin()],
  server: {
    open: true,
  },
});
