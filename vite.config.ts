import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: true })],
  ssr: {
    noExternal: ['solid-slider'],
  },
  build:{
    outDir: '.output',
  }
});
