import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.ts"],
    passWithNoTests: true,
    teardownTimeout: 5000,
  },
});
