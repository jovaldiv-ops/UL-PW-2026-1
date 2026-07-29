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
    // 1. Especificamos la base URL para los assets compilados
    base: '/dist/', 
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
            // Guarda las fuentes e imágenes dentro de public/dist/assets/
            return `assets/[name]-[hash][extname]`;
          },
        },
      },
    },
  }
})