import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vitest/config";
export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        "vue",
        // could add 'vue-router' or 'vitest', whatever else you need.
      ],
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
});
