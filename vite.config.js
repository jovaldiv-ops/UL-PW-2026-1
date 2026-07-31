// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const shouldMinify = env.VITE_MINIFY === 'true'
  const minSuffix = shouldMinify ? '.min' : ''

  return {
    base: '/dist/', 
    publicDir: false, // 1. Elimina la advertencia (!) de carpetas solapadas
    plugins: [
      react(),
      tailwindcss()
    ],
    build: {
      emptyOutDir: false,
      outDir: 'public/dist',
      minify: shouldMinify,
      rollupOptions: {
        input: {
          'web': resolve(__dirname, 'src/entries/web.jsx'),
        },
        output: {
          entryFileNames: `js/[name]${minSuffix}.js`,
          chunkFileNames: `js/[name]${minSuffix}.js`,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return `css/[name]${minSuffix}[extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  }
})