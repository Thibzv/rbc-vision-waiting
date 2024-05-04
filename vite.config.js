import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  root: "src",
  base: "",

  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,

    rollupOptions: {
      index: "./src/index.html",
    },
  },
});
