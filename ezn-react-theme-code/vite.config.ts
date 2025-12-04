import { defineConfig } from "vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Wyłącz ES modules - generuj IIFE dla kompatybilności
        format: "iife",
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  server: {
    port: 5173,
    cors: true,
    origin: "http://localhost:5173",
  },
  // DODANE KONFIGURACJE:
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    include: ["@tanstack/react-query", "@tanstack/react-router"],
  },
});
