// vite.config.js
import { defineConfig } from "file:///Users/pochientsai/Library/CloudStorage/Dropbox/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/Web/%E5%85%AD%E8%A7%92/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/Week5-Backend-Form-Design/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///Users/pochientsai/Library/CloudStorage/Dropbox/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/Web/%E5%85%AD%E8%A7%92/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/Week5-Backend-Form-Design/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///Users/pochientsai/Library/CloudStorage/Dropbox/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/Web/%E5%85%AD%E8%A7%92/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/Week5-Backend-Form-Design/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///Users/pochientsai/Library/CloudStorage/Dropbox/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/Web/%E5%85%AD%E8%A7%92/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/Week5-Backend-Form-Design/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/pochientsai/Library/CloudStorage/Dropbox/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88/Web/%E5%85%AD%E8%A7%92/2023%E5%88%87%E7%89%88%E7%9B%B4%E6%92%AD%E7%8F%AD/%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99/Week5-Backend-Form-Design/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/Week5-Backend-Form-Design/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcG9jaGllbnRzYWkvTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9cdTdBMEJcdTVGMEZcdThBMkRcdThBMDgvV2ViL1x1NTE2RFx1ODlEMi8yMDIzXHU1MjA3XHU3MjQ4XHU3NkY0XHU2NEFEXHU3M0VEL1x1NEUzQlx1N0REQVx1NEVGQlx1NTJEOS9XZWVrNS1CYWNrZW5kLUZvcm0tRGVzaWduXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcG9jaGllbnRzYWkvTGlicmFyeS9DbG91ZFN0b3JhZ2UvRHJvcGJveC9cdTdBMEJcdTVGMEZcdThBMkRcdThBMDgvV2ViL1x1NTE2RFx1ODlEMi8yMDIzXHU1MjA3XHU3MjQ4XHU3NkY0XHU2NEFEXHU3M0VEL1x1NEUzQlx1N0REQVx1NEVGQlx1NTJEOS9XZWVrNS1CYWNrZW5kLUZvcm0tRGVzaWduL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wb2NoaWVudHNhaS9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9Ecm9wYm94LyVFNyVBOCU4QiVFNSVCQyU4RiVFOCVBOCVBRCVFOCVBOCU4OC9XZWIvJUU1JTg1JUFEJUU4JUE3JTkyLzIwMjMlRTUlODglODclRTclODklODglRTclOUIlQjQlRTYlOTIlQUQlRTclOEYlQUQvJUU0JUI4JUJCJUU3JUI3JTlBJUU0JUJCJUJCJUU1JThCJTk5L1dlZWs1LUJhY2tlbmQtRm9ybS1EZXNpZ24vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XG5cbmltcG9ydCBsaXZlUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWxpdmUtcmVsb2FkJztcblxuZnVuY3Rpb24gbW92ZU91dHB1dFBsdWdpbigpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZU5hbWUgaW4gYnVuZGxlKSB7XG4gICAgICAgIGlmIChmaWxlTmFtZS5zdGFydHNXaXRoKCdwYWdlcy8nKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcbiAgICAgICAgICBidW5kbGVbZmlsZU5hbWVdLmZpbGVOYW1lID0gbmV3RmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBiYXNlIFx1NzY4NFx1NUJFQlx1NkNENVx1RkYxQVxuICAvLyBiYXNlOiAnL1JlcG9zaXRvcnkgXHU3Njg0XHU1NDBEXHU3QTMxLydcbiAgYmFzZTogJy9XZWVrNS1CYWNrZW5kLUZvcm0tRGVzaWduLycsXG4gIHBsdWdpbnM6IFtcbiAgICBsaXZlUmVsb2FkKFsnLi9sYXlvdXQvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouaHRtbCddKSxcbiAgICBWaXRlRWpzUGx1Z2luKCksXG4gICAgbW92ZU91dHB1dFBsdWdpbigpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBcdTU1NUZcdTUyRDUgc2VydmVyIFx1NjY0Mlx1OTgxMFx1OEEyRFx1OTU4Qlx1NTU1Rlx1NzY4NFx1OTgwMVx1OTc2MlxuICAgIG9wZW46ICdwYWdlcy9pbmRleC5odG1sJyxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBnbG9iXG4gICAgICAgICAgLnN5bmMoJ3BhZ2VzLyoqLyouaHRtbCcpXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xuICAgICAgICAgICAgcGF0aC5yZWxhdGl2ZSgncGFnZXMnLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxuICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIF0pXG4gICAgICApLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc2xCLFNBQVMsb0JBQW9CO0FBQ25uQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTnlSLElBQU0sMkNBQTJDO0FBUWpXLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLFdBQVcsQ0FBQyxxQkFBcUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQUEsSUFDekUsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
