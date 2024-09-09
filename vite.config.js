import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/Enlighten/', // Ensure a leading and trailing slash
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
