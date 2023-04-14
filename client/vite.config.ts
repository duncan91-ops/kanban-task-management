import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

const cacheDir =
  process.env.NODE_ENV === 'development-docker'
    ? '/app/node_modules/.vite'
    : 'node_modules/.vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    }
  },
  server: {
    host: true,
    port: +process.env.PORT! || 3001,
  },
  cacheDir,
})
