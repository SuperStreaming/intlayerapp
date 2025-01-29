import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig, PluginOption } from "vite";

export const plugin1 = (): PluginOption => ({
  name: "plugin1",

  config: () => {
    process.env = {
      ...process.env,
      VITE_CUSTOM_VAR: "A CUSTOM VAR",
      VITE_A_OVERRIDED_VAR: "OVERRIDED PLUGIN 1",
    };
  },
});

export const plugin2 = (): PluginOption => ({
  name: "plugin2",

  config: () => {
    process.env = {
      // ...process.env,
      VITE_CUSTOM_VAR2: "A CUSTOM VAR 2",
      VITE_A_OVERRIDED_VAR: "OVERRIDED PLUGIN 2",
    };
  },
});

export const plugin3 = (): PluginOption => ({
  name: "plugin3",

  config: () => {
    process.env.VITE_CUSTOM_VAR3 = "A CUSTOM VAR 3";
    process.env.VITE_A_OVERRIDED_VAR = "OVERRIDED PLUGIN 3";
  },
});

export const brokenPlugin = (): PluginOption => ({
  name: "brokenPlugin",

  config: (config) => {
    dotenv.config({
      path: [
        `.env.${config.mode}.local`,
        `.env.${config.mode}`,
        ".env.local",
        ".env",
      ],
    });
  },
});

export default defineConfig({
  plugins: [react(), plugin1(), brokenPlugin(), plugin2(), plugin3()],
  server: {
    open: true,
  },
});
