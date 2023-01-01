import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.ts","src/**/*.js"],
    passWithNoTests: true,
    teardownTimeout: 5000,
  },
});
