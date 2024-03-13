import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: './tests/setup.js', // assuming the test folder is in the root of our project
    environment: "jsdom",
    includeSource: ["src/**/*.{js,ts}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
  define: {
    "import.meta.vitest": "undefined",
  },
});
