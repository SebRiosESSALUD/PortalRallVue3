import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/portalweb/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  plugins: [vue()]
})