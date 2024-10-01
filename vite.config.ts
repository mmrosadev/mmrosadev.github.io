import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/views': path.resolve(__dirname, 'src/views'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/routes': path.resolve(__dirname, 'src/routes'),
    },
  },
})
