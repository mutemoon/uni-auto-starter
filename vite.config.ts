import uni from "@dcloudio/vite-plugin-uni";
import UniLayouts from "@uni-helper/vite-plugin-uni-layouts";
import UniPages from "@uni-helper/vite-plugin-uni-pages";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UniPages({
      dts: "./src/uni-pages.d.ts",
    }),
    UniLayouts(),
    AutoImport({
      imports: ["vue", "uni-app"],
      dirs: ["./src/composables"],
      dts: "./src/auto-imports.d.ts",
    }),
    Components({
      dts: "./src/components.d.ts",
    }),
    vueDevTools(),
    uni(),
  ],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },
});
