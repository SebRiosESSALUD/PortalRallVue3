import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html'; // Usa { createHtmlPlugin } en lugar de htmlPlugin

export default defineConfig({
  base: "/portalweb/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          version: new Date().getTime(), // Evitar caché con versión dinámica
        },
      },
    })
  ]
});
