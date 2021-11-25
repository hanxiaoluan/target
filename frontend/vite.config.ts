import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {ORIGIN, PORT} from '../config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:  {
    outDir: '../server/public'
  },
  server: {
    proxy: {
      '^/api': {
        target: `${ORIGIN}:${PORT}`,
        changeOrigin: true,
      },
    }
  },
})
