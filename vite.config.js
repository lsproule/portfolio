import path from "path";
import solid from "solid-start/vite";
import vercel from 'solid-start-vercel';
import { defineConfig } from "vite";

export default defineConfig({
  build:{
    emptyOutDir: true,
    outDir: '.output',
  },
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "/src"),
    }
  },
  plugins: [solid({ ssr: true, adapter:vercel() })],
  ssr: {
    noExternal: ['solid-slider'],
  },

});
